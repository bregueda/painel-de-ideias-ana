
import { useState } from "react"
import "./App.css"

export default function App (){
  const [novaIdeia, setNovaIdeia] = useState("")
  const [ideias, setIdeias] = useState([])
  const [erro, setErro] = useState("");  

  function alternarFeita(id) {
  setIdeias(
    ideias.map((ideia) =>
      ideia.id === id
        ? { ...ideia, feita: !ideia.feita }
        : ideia
        
    )
  )
}
 
function apagarIdeia(id) {
  setIdeias(
    ideias.filter((ideia) => ideia.id !== id)
  )
}

const ideiasFeitas = ideias.filter((ideia) => ideia.feita).length;
const totalIdeias = ideias.length;
  
return (
<div>
  <h1>Painel de ideias</h1>
  <form onSubmit={(event) => {
  event.preventDefault();

  if (novaIdeia.trim() === "") {
    setErro("Você não digitou nada!");
    return;
  }

  const ideia = {
    id: Date.now(), texto: novaIdeia, feita: false
  }
   setIdeias([...ideias, ideia]);
   setErro("");
    setNovaIdeia("");
}}>
  <input 
  type="text"
  value={novaIdeia}
  onChange={(event) => {
    setNovaIdeia(event.target.value);
    setErro("");

  }}
  placeholder="Digite sua ideia..." 
  />

  <button type="submit">adicionar</button>

   
  </form>

  {erro && <p>{erro}</p>}
    <div>
      {ideias.map((ideia) => (
        <p key={ideia.id}>
      

     <input type="checkbox"
           checked={ideia.feita}
           onChange={() => alternarFeita(ideia.id)}
               /> 
      <span className={ideia.feita ? "ideia-feita" : ""}
      >
          {ideia.texto}
      </span>
      <button onClick={() => apagarIdeia(ideia.id)}>
      ✕
    </button>
        </p>
        
      ))}
    </div>
    <footer>{`Ideias no painel: ${totalIdeias} ... Ideias concluídas: ${ideiasFeitas}`}</footer>
  </div>


)

}
