import './App.css';
import {Formulario}  from './componentes/formulario/index.js';
import { useState } from 'react';
import { BackgroundTime } from './componentes/Background-time/index.js';



function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const adicionarNovoColaborador = (colaborador) =>{
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    
  }

  const times = [{
    nome:"Programação",
    corPrimaria:"#C7C278",
    corSecundaria:"#FDE8E7",
  },
  {
    nome:"Front-End",
    corPrimaria:"#F0F8E2",
    corSecundaria:"#D9F7E9"
  },
  {
    nome:"Data Science",
    corPrimaria:"#FFF5D9",
    corSecundaria:"#FFEEDF"
  }
    
  ]
  
  return (
    <div className="App">
      <Formulario times={times.map((time) => time.nome)}aoColaboradorCadastrado={colaborador => adicionarNovoColaborador(colaborador)}/>
      {times.map(time => <BackgroundTime colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)} key= {time.nome} nome={time.nome} corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
