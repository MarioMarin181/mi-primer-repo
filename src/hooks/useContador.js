import { useState } from "react";

export const useContador = (initialState) => {
    const [conde, setConde] = useState(initialState)//sirve para disparar estados
    const modificarEstado = (num) =>{
        /*if(num!==-1 || (num===-1 && conde!==0)){
            setConde(conde+num);
        } */
        //el mayor entre 0 y número futuro
        setConde(Math.max(conde+num, 0));       
    }
    const reset = () =>{
        setConde(initialState);
    }
    return {
        conde,
        modificarEstado,
        reset
    }
}