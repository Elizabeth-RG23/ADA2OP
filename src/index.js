import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {esNombre,esEdad,esPasatiempo,esDia,esMes,esAnio} from "./validaciones"



var p = React.createElement('p',{className:'style-parrafo'},'Curso');

var container = React.createElement('div',{className:'container'},p);



var div = (
  <div className='container'>
    <p className='style-parrafo'>Tarea</p>
  </div>
);


class Componente_ extends React.Component{

  constructor(props){

    super(props);
    this.nombre = React.createRef();
    this.edad = React.createRef();
    this.pasatiempo = React.createRef();
    this.dia = React.createRef();
    this.mes = React.createRef();
    this.anio = React.createRef();
  }
  

  clicRefs(evento){
    evento.preventDefault();
    console.log(this.nombre.current.value);
    console.log(this.edad.current.value);
    console.log(this.pasatiempo.current.value);
    console.log(this.dia.current.value);
    console.log(this.mes.current.value);
    console.log(this.anio.current.value);
  }

  
  clicEventos(evento){
    evento.preventDefault();
    console.log(evento.target[0].value);
    console.log(evento.target[1].value);
  }

  render(){
    return(
      <form onSubmit={this.clicEventos}>
        <h1>{"}"}</h1>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Edad" />
        <input type="text" placeholder="Pasatiempo" />
        <input type="text" placeholder="Dia" />
        <input type="text" placeholder="Mes" />
        <input type="text" placeholder="Anio" />
        <button>
          Enviar
        </button>
      </form>
    )
  }

}


class InputText extends React.Component{
  constructor(props){
    super(props);
    this.actualizarState = this.actualizarState.bind(this);
    this.state = {
      value:"",
      error:false,
      mensajeError:""
    };
  }
  actualizarState(e){
    const {name, value} = e.target;
    console.log(this.props.validacion(value));
    
    if(this.props.validacion(value)){
      this.setState({
        value,
        error:false,
        mensajeError:""
      });
      this.props.actualizarState({
        name,value,error:false
      });
    }else{
      this.setState({
        value,
        error:true,
        mensajeError:this.props.mensajeError
      });
      this.props.actualizarState({
        name,value,error:true
      });
    }
  }
  render(){
    return(
      <div className="componente-input">
        <label htmlFor={"id-"+this.props.name}>{this.props.label}</label>
        <input
          id={"id-"+this.props.name}
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={this.state.error ? "border-error":""}
          onChange={this.actualizarState}/>
          {
            this.state.error ? (
            <p className="componente-input-error">{this.state.mensajeError}</p>
            ):("")
          }
      </div>
    )
  }
}


class Componente extends React.Component{

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.actualizarState = this.actualizarState.bind(this);
    this.state = {
      nombre:{
        value:"",
        error:true
      },
      edad:{
        value:"",
        error:true
      },
      pasatiempo:{
        value:"",
        error:true
      },
      dia:{
        value:"",
        error:true
      },
      mes:{
        value:"",
        error:true
      },
      anio:{
        value:"",
        error:true
      }
    }
  }
  
  actualizarState(input){
    this.setState({
      ...this.state,
      [input.name]:{
        value:input.value,
        error:input.error
      }
    }, ()=>{console.log(this.state);});
    
  }

  submit(e){
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <h1>{"ADA 2"}</h1>
        <InputText
          label="Nombre"
          name="nombre"
          placeholder="Nombre"
          validacion={esNombre}
          mensajeError="Se esperaban letras"
          actualizarState={this.actualizarState} />
        
        <InputText
          label="Edad"
          name="edad"
          placeholder="Edad"
          validacion={esEdad}
          mensajeError="Edad no valida"
          actualizarState={this.actualizarState} />

        <InputText
          label="Pasatiempo"
          name="pasatiempo"
          placeholder="Pasatiempo"
          validacion={esPasatiempo}
          mensajeError="Por favor, escribe un pasatiempo"
          actualizarState={this.actualizarState} />

        <InputText
          label="Fecha de Nacimiento - Dia"
          name="dia"
          placeholder="Dia"
          validacion={esDia}
          mensajeError="Solo se admiten numeros"
          actualizarState={this.actualizarState} />

        <InputText
          label="Mes"
          name="mes"
          placeholder="Mes"
          validacion={esMes}
          mensajeError="Solo se admiten numeros"
          actualizarState={this.actualizarState} />

        <InputText
          label="Anio"
          name="anio"
          placeholder="Anio"
          validacion={esAnio}
          mensajeError="Solo se admiten numeros"
          actualizarState={this.actualizarState} />
        
        <button
          disabled={this.state.nombre.error ||
            this.state.edad.error ||
            this.state.pasatiempo.error ||
            this.state.dia.error ||
            this.state.mes.error ||
            this.state.anio.error}
          type="submit"
          className={this.state.nombre.error ||
            this.state.edad.error ||
            this.state.pasatiempo.error ||
            this.state.dia.error ||
            this.state.mes.error ||
            this.state.anio.error
            ? 
            "button-disable":"button"}>
          Enviar
        </button>
      </form>
    )
  }
}

ReactDOM.render(
  <Componente/>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();