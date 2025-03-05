import { useState } from "react";

export default function App(){
  function gerarStringAleatoria() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = "";
    for (let i = 0; i < 10; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setTextCopy(() => 'Copiar')
    return resultado;
  }
  const [password, setPassword] = useState('Senha')
  const [textCopy, setTextCopy] = useState('Copiar')

  function copyPassword(text){
    navigator.clipboard.writeText(text)
    setTextCopy(() => 'Copiado!')
  }

  return(
    <>
      <h1>Gerador de senha</h1>
      <div className="buttons">
        <button onClick={() => setPassword(() => gerarStringAleatoria())}>Gerar senha</button>
        <button onClick={() => copyPassword(password)}>{textCopy}</button>
      </div>
      <p>{password}</p>
    </>
  )
}