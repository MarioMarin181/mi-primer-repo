import { useState } from "react";

export const FirstPage = () => {
    const [conde, setConde] = useState(10)//sirve para disparar estados
    const modificar = (num) =>{
        /*if(num!==-1 || (num===-1 && conde!==0)){
            setConde(conde+num);
        } */
        //el mayor entre 0 y número futuro
        setConde(Math.max(conde+num, 0));       
    }
    const reset = () =>{
        setConde(10);
    }
    return (
        <>
            <h1>Hola, soy miembro de MadConde</h1>
            <h1>Contador Mejorado</h1>
            <h1>Este contador es el número de personas a favor de este nuevo nombre</h1>
            <h1>{conde}</h1>
            <button onClick={() =>modificar(1)}>+1</button>
            <br></br>
            <button onClick={() => modificar (-1)}>-1</button>
            <br></br>
            <button onClick={reset}>Resetear</button>
        </>
        
    )
} 