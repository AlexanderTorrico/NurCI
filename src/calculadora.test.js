import { describe, expect, it } from "vitest"
import { suma, resta, multiplicacion, divicion } from "./calculadora"




describe("Calculadora", ()=> {
    

    it("Suma", ()=>{
        expect(suma(4,5)).toBe(9);
    })

    it("Resta" , ()=> {
        expect(resta(8, 1)).toBe(7);
    }) 


    it("Multiplicación", ()=> {
        expect(multiplicacion(9,9)).toBe(81);
    })

    
    it("División", () => {
        expect(divicion(3, 2)).toBe(1.5)
    });

    it("División", () => {
        expect( () => divicion(3, 0)).toThrow("No se puede dividir entre 0")
    });

});