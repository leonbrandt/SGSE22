function filter(func) {
    return (arr) => {
        const out = [];

        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i]) == true) {
                out.push(arr[i]);
            }
        }

        return out;
    };
}

const data = [
    {
        name : "Hans",
        alter : 50
    },
    {
        name : "Elisa",
        alter : 25
    },
    {
        name : "Hannah",
        alter : 35
    }
]

console.log(
    filter(el => el.alter > 30)(filter(el => el.name.length > 4)(data))
)