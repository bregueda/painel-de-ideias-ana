
import { useState } from "react"

export default function App (){
  const [novaIdeia, setNovaIdeia] = useState("")
  const [ideias, setIdeias] = useState([])
  const [erro, setErro] = useState("");   
 

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
          {ideia.texto}
        </p>
      ))}
    </div>
  </div>
)

}
