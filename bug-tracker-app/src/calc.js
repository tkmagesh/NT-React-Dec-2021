export function add(x,y){
    return x+y;
}

export function subtract(x,y){
    return x-y;
}

const utils = {
    isEven(n){
        return n % 2 === 0;
    },
    isOdd(n){
        return !this.isEven(n);
    }
}


//default export
export default utils;