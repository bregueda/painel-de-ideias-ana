
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

  const ideia = {
    id: Date.now(), texto: "Minha ideia aqui", feita: false
  }
  setIdeias ([
    ideia, ideia, ideia
  ])
}}>
  <input 
  type="text"
  value={novaIdeia}
  onChange={(event) => 
  setNovaIdeia(event.target.value)
}
  placeholder="Digite sua ideia..." 
  />

  <button type="submit">adicionar</button>
  
  </form>
  </div>
)

}
