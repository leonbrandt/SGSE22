function map(func) {
    return (arr) => {
        const out = [];
        for (let i = 0; i < arr.length; i++) {
            out.push(func(arr[i]));
        }

        return out;
    };
}


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

// Zustand 1
const filteredData = filter(el => el.alter > 30)(data);
const filteredNames = map(el => el.name)(filteredData);

console.log( filteredNames );

// Zustand 2
console.log( map(el => el.name)(filter(el => el.alter > 30)(data)) )