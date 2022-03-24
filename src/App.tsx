import React from 'react';
import logo from './logo.svg';
import './App.css';

const Equipe = (props: any) =>{
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook} />
    </div>
  )
}

const Sobre = (props:any) =>{
  return(
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  )
}

const Social = (props:any) =>{
  return(
    <div>
      <a href={props.fb}>Facebook</a>
      <a>LinkedIn</a>
      <a>Youtube</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Conheça nossa equipe!</h1>
      <Equipe nome='Lucas' cargo='Programador' idade='29' facebook="google.com"/>
      <Equipe nome='Matheus' cargo='Designer' idade='18'/>
    </div>
  );
}

export default App;
