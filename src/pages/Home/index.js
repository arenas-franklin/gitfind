import React from 'react';
import { Header } from "../../components/Header";
import background from "../../assets/background.png"
import "./styles.css"

const App = ()=> {
    return (
      <div className="App">
        <Header/>
        <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
        <div className="info">
          <div>
            <input className="input" name="usuario" placeholder="@username"/>
            <button className="button">Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/22668960?v=4"
             className="profile" alt="imagem de perfil"/>
            <div>
              <h3>Franklin</h3>
              <span>@arenas-franklin</span>
              <p>Descrição </p>
            </div>
          </div>
          <hr/>
        </div>
        </div>
      </div>
    );
  }


export default App;
