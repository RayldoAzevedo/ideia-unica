import {useState} from 'react'

function Home(){
    return <div>
        HOME 2025

        <Contador/>
        <div>Finalizado teste incicial</div>
    </div>
}

function Contador(){
    const [contador, setContador] = useState(1);
    const [multiplicar, setMultiplicar] = useState(1);
    
    function addContador(){
        setContador(contador +1);
    }
    function mutiplicador(){
        setMultiplicar(multiplicar * contador);
    }
    function limpardados(){
        setContador(1);
        setMultiplicar(1);
    }
    return(
        <div>
            <h2>Contador = {contador}</h2>
            <h2>Multiplicador = {multiplicar}</h2>
            <button type="button" onClick={addContador}>Adicionar</button>
            <button type='button' onClick={mutiplicador}>Multiplicar</button>
            <button type='button' onClick={limpardados}>Limpar contadores</button>
        </div>
    )     
}


export default Home