import Header from './components/Header'
// UseState manipula estado e useEffect faz alguns efeitos
import {useState, useEffect} from 'react'
import Resultado from './components/Resultado'
import './css/global.css'
import './css/estilo.css'


function App() {

//Hooks- useState- Manipula o estado da variável
// Os set.. alteram os valores das variáveis em azul
const [peso, setPeso]=useState(0)
const [altura, setAltura]=useState(0)
const [resultado,setResultado]=useState(0)
const [mostrarresultado,setMostrarResultado]=useState(false)

//criando a função calcularImc
  const calcularImc=()=>{
    const imc = peso /(altura * altura)
    // O valor calculado é armazenado no Resultado e é arredondado para duas casas decimais
    return setResultado(imc.toFixed(2))
  }
  //Hooks - useEffect - efeito colateral no caso mostrar o resultado
  useEffect(()=>{
    //if ternario
    // Caso o resultado seja maior que zero exibe o MostrarResultado, senão não exibe
    resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false)
  },[resultado])

  return (
    <>
    <div className="container">
      <div className="box">
      <Header/>
      <form>
        <div>
            <label htmlFor="altura">Altura 
            <span className="span">(Ex:1.80)</span>
            <input  type="number" 
                    id="altura" 
                    placeholder="Digite sua altura"
                    // A função converte o valor digitado para inteiro e armazena no altura
                    onBlur={({target})=>parseInt(setAltura(target.value))}
            />
            </label>
        </div>

        <div>
            <label htmlFor="peso">Peso 
            <span className="span">(Ex:80)</span>
            <input  type="number" 
                    id="peso" 
                    placeholder="Digite seu Peso"
                    // A função converte o valor digitado para inteiro e armazena no Peso
                    onBlur={({target})=>parseInt(setPeso(target.value))}
            />
            </label>
        </div>
        {/* CRIANDO O BOTÃO CHAMANDO O EVENTO ONCLICK E CHAMANDO A FUNÇÃO CALCULARIMC */}
        <button type="submit" onClick={calcularImc}>Calcular</button>

      </form>
      </div>
      {/* CHAMANDO O COMPONENTE RESULTADO E PASSANDO UM DESESTRUCT */}
      {mostrarresultado &&(
        <Resultado resultado={resultado}/>
      )}

    </div>

    </>
  )
}

export default App
