function map( func ) {
    return arr => {
        const out = [];

        for ( let i=0; i < arr.length; i++ ) {
            out.push( func(arr[i]) );
        }

        return out;
    }
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