#!/bin/bash
apt update

# jp2a
apt install -y make libjpeg-dev libpng-dev libcurl4-gnutls-dev libncurses5-dev autoconf-archive pkg-config
git clone https://github.com/Talinx/jp2a.git
cd jp2a
autoreconf -vi
./configure CC=clang CFLAGS="-Oz" CXX=clang++ CXXFLAGS="-Oz"
make -j
echo Oz jp2a $(du -b src/jp2a) >> ~/sizes.txt
make clean
./configure CC=clang CFLAGS="-Oz -mllvm -enable-ml-inliner=release" CXX=clang++ CXXFLAGS="-Oz -mllvm -enable-ml-inliner=release"
make -j
echo OzMLGO jp2a $(du -b src/jp2a) >> ~/sizes.txt
cd ..

# vlc
# https://wiki.videolan.org/UnixCompile/

apt-get install -y git make libtool automake autopoint pkg-config flex bison lua5.2
git clone git://git.videolan.org/vlc.git
cd vlc
./bootstrap
sed -Ei 's/^# deb-src /deb-src /' /etc/apt/sources.list
apt-get update
apt-get build-dep -y vlc
./configure CC=clang CFLAGS="-Oz" CXX=clang++ CXXFLAGS="-Oz" --disable-xcb --disable-qt
make -j
echo Oz vlc $(du -b bin/vlc-static) >> ~/sizes.txt
make clean
./configure CC=clang CFLAGS="-Oz -mllvm -enable-ml-inliner=release" CXX=clang++ CXXFLAGS="-Oz -mllvm -enable-ml-inliner=release" --disable-xcb --disable-qt
make -j
echo OzMLGO vlc $(du -b bin/vlc-static) >> ~/sizes.txt
cd ..

# Firefox
# https://firefox-source-docs.mozilla.org/setup/linux_build.html
apt-get install -y curl python3 python3-dev python3-pip
if ! [ $(which hg) ]
then
	python3 -m pip install --user mercurial
	export PATH=$(python3 -m site --user-base)/bin:$PATH
fi
if ! [ $(which rustc) ]
then
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs > rustup.sh
	chmod +x rustup.sh
	./rustup.sh -y
	export PATH=$HOME/.cargo/bin:$PATH
	rm rustup.sh
fi
mkdir firefox
cd firefox
curl https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py -O
python3 bootstrap.py --no-interactive # press enter when prompted
cd mozilla-unified
cat > mozconfig << EOF
export CC=/usr/local/bin/clang
export CXX=/usr/local/bin/clang++

ac_add_options CC=/usr/local/bin/clang
ac_add_options CXX=/usr/local/bin/clang++
ac_add_options --target=x86_64-pc-linux-gnu
ac_add_options --enable-pulseaudio
ac_add_options --enable-alsa

ac_add_options --disable-crashreporter
ac_add_options --disable-debug
ac_add_options --disable-dmd
ac_add_options --disable-geckodriver
ac_add_options --disable-profiling
ac_add_options --disable-tests

ac_add_options --enable-application=browser
ac_add_options --enable-optimize="-Oz -mllvm -enable-ml-inliner=release"
ac_add_options --enable-rust-simd
ac_add_options --enable-updater

export RUSTC_OPT_LEVEL=2
export MOZ_INCLUDE_SOURCE_INFO=1
mk_add_options AUTOCLOBBER=1
MOZ_REQUIRE_SIGNING=
EOF
export MOZCONFIG=$(pwd)/mozconfig
mkdir -p /usr/local/lib/clang/14.0.5/lib/wasi
wget -O "/usr/local/lib/clang/14.0.5/lib/wasi/libclang_rt.builtins-wasm32.a" "https://github.com/jedisct1/libclang_rt.builtins-wasm32.a/blob/master/precompiled/libclang_rt.builtins-wasm32.a?raw=true"
./mach build
echo OzMLGO firefox $(du -b obj-x86_64-pc-linux-gnu/dist/bin/firefox) >> ~/sizes.txt
echo OzMLGO firefox-dist-dir $(du -bs obj-x86_64-pc-linux-gnu/dist/) >> ~/sizes.txt
./mach clobber
cat > mozconfig << EOF
export CC=/usr/local/bin/clang
export CXX=/usr/local/bin/clang++

ac_add_options CC=/usr/local/bin/clang
ac_add_options CXX=/usr/local/bin/clang++
ac_add_options --target=x86_64-pc-linux-gnu
ac_add_options --enable-pulseaudio
ac_add_options --enable-alsa

ac_add_options --disable-crashreporter
ac_add_options --disable-debug
ac_add_options --disable-dmd
ac_add_options --disable-geckodriver
ac_add_options --disable-profiling
ac_add_options --disable-tests

ac_add_options --enable-application=browser
ac_add_options --enable-optimize="-Oz"
ac_add_options --enable-rust-simd
ac_add_options --enable-updater

export RUSTC_OPT_LEVEL=2
export MOZ_INCLUDE_SOURCE_INFO=1
mk_add_options AUTOCLOBBER=1
MOZ_REQUIRE_SIGNING=
EOF
./mach build
echo Oz firefox $(du -b obj-x86_64-pc-linux-gnu/dist/bin/firefox) >> ~/sizes.txt
echo Oz firefox-dist-dir $(du -bs obj-x86_64-pc-linux-gnu/dist/) >> ~/sizes.txt
cd ../..

# Thunderbird
# https://developer.thunderbird.net/thunderbird-development/getting-started
# https://developer.thunderbird.net/thunderbird-development/building-thunderbird/linux-build-prerequisites
# https://developer.thunderbird.net/thunderbird-development/building-thunderbird 
apt-get install -y curl python3 python3-dev python3-pip
if ! [ $(which hg) ]
then
	python3 -m pip install --user mercurial
	export PATH=$(python3 -m site --user-base)/bin:$PATH
fi
if ! [ $(which rustc) ]
then
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs > rustup.sh
	chmod +x rustup.sh
	./rustup.sh -y
	export PATH=$HOME/.cargo/bin:$PATH
	rm rustup.sh
fi
mkdir thunderbird
cd thunderbird
hg clone https://hg.mozilla.org/mozilla-central source/
cd source/
hg clone https://hg.mozilla.org/comm-central comm/
./mach --no-interactive bootstrap --application-choice "Firefox for Desktop"
cat > mozconfig << EOF
export CC=/usr/local/bin/clang
export CXX=/usr/local/bin/clang++

ac_add_options CC=/usr/local/bin/clang
ac_add_options CXX=/usr/local/bin/clang++
ac_add_options --target=x86_64-pc-linux-gnu
ac_add_options --enable-pulseaudio
ac_add_options --enable-alsa

ac_add_options --enable-application=comm/mail
ac_add_options --enable-optimize="-Oz -mllvm -enable-ml-inliner=release"
ac_add_options --enable-rust-simd
ac_add_options --enable-updater

export RUSTC_OPT_LEVEL=2
export MOZ_INCLUDE_SOURCE_INFO=1
mk_add_options AUTOCLOBBER=1
MOZ_REQUIRE_SIGNING=
EOF
export MOZCONFIG=$(pwd)/mozconfig
./mach build
echo OzMLGO thunderbird $(du -b obj-x86_64-pc-linux-gnu/dist/bin/thunderbird) >> ~/sizes.txt
echo OzMLGO thunderbird-dist-dir $(du -bs obj-x86_64-pc-linux-gnu/dist/) >> ~/sizes.txt
./mach clobber
cat > mozconfig << EOF
export CC=/usr/local/bin/clang
export CXX=/usr/local/bin/clang++

ac_add_options CC=/usr/local/bin/clang
ac_add_options CXX=/usr/local/bin/clang++
ac_add_options --target=x86_64-pc-linux-gnu
ac_add_options --enable-pulseaudio
ac_add_options --enable-alsa

ac_add_options --enable-application=comm/mail
ac_add_options --enable-optimize="-Oz"
ac_add_options --enable-rust-simd
ac_add_options --enable-updater

export RUSTC_OPT_LEVEL=2
export MOZ_INCLUDE_SOURCE_INFO=1
mk_add_options AUTOCLOBBER=1
MOZ_REQUIRE_SIGNING=
EOF
./mach build
echo Oz thunderbird $(du -b obj-x86_64-pc-linux-gnu/dist/bin/thunderbird) >> ~/sizes.txt
echo Oz thunderbird-dist-dir $(du -bs obj-x86_64-pc-linux-gnu/dist/) >> ~/sizes.txt
cd ../..

# Linux kernel
apt-get install -y build-essential libncurses-dev bison flex libssl-dev libelf-dev bc cpio
mkdir kernelbuild
cd kernelbuild
wget "https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.18.6.tar.xz"
xz -d -v linux-5.18.6.tar.xz
tar xvf linux-5.18.6.tar
cd linux-5.18.6
cp /linuxconfig ./.config
make CC=clang CFLAGS="-Oz -mllvm -enable-ml-inliner=release" -j
echo OzMLGO linux $(du -b vmlinux) >> ~/sizes.txt
rm vmlinux && make clean
make CC=clang CFLAGS="-Oz" -j
echo Oz linux $(du -b vmlinux) >> ~/sizes.txt
cd ../..

# Output all sizes
echo "Sizes:"
cat ~/sizes.txt
