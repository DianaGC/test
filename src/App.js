import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cadena from './Cadena.js'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
           result: 0,
            name: 0
        };
        // this.result =0;
        this.cadena = new Cadena();
        this.titleCadena = undefined;
    }

    sumar(){
        let n1 = document.suma.n1.value;
        let n2 = document.suma.n2.value;
        let suma = parseInt(n1)+parseInt(n2);

        this.setState({result: suma})
    }

    cadenas(){
        this.titleCadena = document.name.name.value;
        const numberString =  this.cadena.countString(this.titleCadena);
        this.setState({name: numberString})
        console.log('////',numberString)
    }

    render() {
        return (
            <div>
                <header>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Suma </h1>
                </header>
                <form name="suma">
                    <p1>Ingrese n1:</p1>
                    <input type="text"
                           name="n1"
                           ref="textInput"
                           placeholder="type a number "/>
                    <p1>Ingrese n2:</p1>
                    <input type="text"
                           name="n2"
                           ref="textInput"
                           placeholder="type a number "/>
                    <input type="button" onClick={this.sumar.bind(this)} value="Sumar"/>
                    {this.state.result }
                </form>
                <h1>contar caracteres </h1>
                <form name = "name">
                    <input id="txt" type="text" name="name"   />
                    <input type="button" onClick={this.cadenas.bind(this)} value="contar"/>
                    {this.titleCadena + " tiene "+ this.state.name +" caracteres"}
                </form>

            </div>
        );
    }
}

export default App;
