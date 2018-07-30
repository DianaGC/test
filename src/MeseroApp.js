import React, { Component } from 'react';
import Mesero from "./Mesero";
import {NumberPar, Number }from  "./Numbers";
import DataInput from "./DataInput";

class MeseroApp extends Component{

    constructor(props) {
        super(props);

        this.state = {
            sliceForPerson: 0,
            leftOver: 0
        };
        // this.result =0;
        this.personas = undefined;
        this.pizzas = undefined;
        this.slices = undefined;
        this.number = new Number();
        this.numberPar = new NumberPar();
        this.mesero = new Mesero(this.number, this.numberPar);
        this.result= undefined;


    }

    dividePizza(){
        this.personas =  document.form.personas.value;
        this.pizzas = document.form.pizzas.value;
        this.slices = document.form.slices.value;
        let data = {nPeople: this.personas, nPizza: this.pizzas, slices: this.slices};
        this.result =this.mesero.dividePizza(data);
        this.setState({sliceForPerson: this.result.sliteForPerson, leftOver: this.result.leftOver})

    }
    render() {
        return (
            <div>
                <header>
                    <h1 className="App-title">Pizza Party </h1>
                </header>
                <form name="form">
                    <p1>Ingrese el numero de personas:</p1>
                    <DataInput name= 'personas' />
                    <p1>Ingrese el  numero de pizzas:</p1>
                    <DataInput name= 'pizzas'  />
                    <p1>Ingrese el numero de slices:</p1>
                    <DataInput name= 'slices' />

                    <input type="button" onClick={this.dividePizza.bind(this)} value="Servir"/><br/>

                </form>
                <div>
                    <label>Each person gets </label> {this.state.sliceForPerson} <label> pieces of pizza</label><br/>
                    <label>There are  </label> {this.state.leftOver} <label> leftover pieces</label>
                </div>



            </div>
        );
    }
    
}
export default MeseroApp