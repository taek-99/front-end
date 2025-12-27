


// type ADD = {
//     (a: number, b:number) : number
// }

// const add:ADD = (a, b) => {
//     return (
//         a+b
//     );
// }



type Add = {
    (a: number, b:number) : number,
    (a: number, b: number, c: number) : number,
}
    
const add:Add = (a, b, c?) => {
    return a + b
}

