From ubuntu:20.04
RUN apt-get update && DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get install -y build-essential cmake gcc-10 g++-10 zlib1g-dev python3-dev python3-pip python3-venv make git curl wget tar llvm clang clang-12 libc6-dev libc6-dev-i386-cross gcc-multilib g++-multilib libstdc++-10-dev libstdc++-10-dev-i386-cross neovim && pip3 install --no-cache-dir tensorflow==2.7.1 tf-agents==0.11.0 gin==0.1.6 absl-py==0.11.0 protobuf==3.20.1
RUN update-alternatives --install /usr/bin/cc cc /usr/bin/clang-12 100 && update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang++-12 100
RUN git clone https://github.com/llvm/llvm-project.git && mkdir llvm-project/build
RUN cd llvm-project && git checkout release/14.x && cd ..
RUN mkdir model-inlining && curl -L "https://github.com/google/ml-compiler-opt/releases/download/inlining-Oz-v1.1/inlining-Oz-99f0063-v1.1.tar.gz" | tar -xz -C model-inlining
WORKDIR llvm-project/build
# python3 -m pip show tensorflow | grep Location | cut -d ' ' -f 2 => /usr/local/lib/python3.8/dist-packages
ENV TENSORFLOW_AOT_PATH=/usr/local/lib/python3.8/dist-packages/tensorflow
RUN mkdir /root/tensorflow
ENV TENSORFLOW_C_LIB_PATH=/root/tensorflow
RUN wget https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-linux-x86_64-1.15.0.tar.gz && tar xfz libtensorflow-cpu-linux-x86_64-1.15.0.tar.gz -C "${TENSORFLOW_C_LIB_PATH}"
RUN cmake -G "Unix Makefiles" -DLLVM_ENABLE_LTO=OFF -DTENSORFLOW_AOT_PATH=${TENSORFLOW_AOT_PATH} -DTENSORFLOW_C_LIB_PATH=${TENSORFLOW_C_LIB_PATH} -DCMAKE_INSTALL_RPATH_USE_LINK_PATH=On -DLLVM_TARGETS_TO_BUILD="X86" -DLLVM_EXPERIMENTAL_TARGETS_TO_BUILD="WebAssembly" -DLLVM_ENABLE_RUNTIMES="compiler-rt" -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_PROJECTS="clang;clang-tools-extra;lld;libc;llvm" -DCMAKE_CXX_STANDARD=17 -DCMAKE_C_FLAGS="-fpermissive -flax-vector-conversions" -DCMAKE_CXX_FLAGS="-fpermissive -flax-vector-conversions" -DLLVM_BUILD_DOCS=OFF -DPYTHON_EXECUTABLE=/usr/bin/python3 -DLLVM_INLINER_MODEL_PATH=/model-inlining/model ../llvm
RUN make -j 2
RUN make install
WORKDIR /
CMD ["bash"]
