export function suma(a, b){
    return a + b;
}
export function resta(a, b){
    return a - b;
}
export function multiplicacion(a, b){
    return a * b;
}
export function divicion(a, b){
    if(b == 0){
        throw new Error("No se puede dividir entre 0")
    }
    return a / b;
}