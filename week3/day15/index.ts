// const a:number = 5;

// const player = {
//     age:12
// }

// player.age = 6


// const aaa: number[] = []
// aaa.push(3)
// aaa.push(123)


// const bbb ={
//     name: "나다",
//     age: 45
// }


// bbb.age


type Player = {
    readonly name: string,
    age?: number
}

const taek: Player = {
    name: "Taek"
}

const playerMaker = (name: string): Player => ({name})

const nico = playerMaker("nigi")


const numbers : readonly number[] = [1,2,3]

const aaa: readonly[string, number, boolean] = ["nico", 1, true]
 

let a:unknown;

if (typeof a === 'number') {
    let b = a + 1;
}