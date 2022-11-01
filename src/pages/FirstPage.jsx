import { useContador } from "../hooks/useContador";
//Refactor
export const FirstPage = () => {
    const {conde, modificarEstado, reset}= useContador(200)
    return (
        <>
            <h1>Hola, soy miembro de MadConde</h1>
            <h1>Contador Mejorado</h1>
            <h1>Este contador es el número de personas a favor de este nuevo nombre</h1>
            <h1>{conde}</h1>
            <button onClick={() =>modificarEstado(1)}>+1</button>
            <br></br>
            <button onClick={() => modificarEstado(-1)}>-1</button>
            <br></br>
            <button onClick={reset}>Resetear</button>
        </>
        
    )
} 