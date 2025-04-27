import {useState} from 'react'

function Home(){
    return <div>
        HOME 2025
        <Contador/>
        <div>Finalizado</div>
    </div>
}

function Contador(){
    const [contador, setContador] = useState(1);
    const [Multiplicar, setMultiplicar] = useState(1);
    
    function addContador(){
        setContador(contador +1);
    }
    function mutiplicador(){
        setMultiplicar(mutiplicador*contador);
    }
    return(
        <div>
            <h2>Contador = {contador}</h2>
            <button type="button" onClick={addContador}>Adicionar</button>
            <button type='button' onClick={mutiplicador}>Multiplicar</button>
        </div>
    )     
}


export default Home