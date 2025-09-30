
// type Add = (aa:number, b:number) => number;

// const aaa:Add = (a, b) => a+b


// type SuperPrint = <T>(a:T[]) => T

// const superPrint: SuperPrint = (a) => a[0] 


function superPrint<V>(a: V[]){
    return a[0]
}