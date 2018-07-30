import React, {Component} from 'react';
import Mesero from "../../Mesero";
import {Number, NumberPar} from "../../Numbers";
import PizzaParty from '../presentational/PizzaParty'

class PizzaPartyContainer extends Component {
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
        this.result = undefined;


    }

    dividePizza() {
        this.personas = document.form.personas.value;
        this.pizzas = document.form.pizzas.value;
        this.slices = document.form.slices.value;
        let data = {nPeople: this.personas, nPizza: this.pizzas, slices: this.slices};
        this.result = this.mesero.dividePizza(data);
        this.setState({sliceForPerson: this.result.sliteForPerson, leftOver: this.result.leftOver})

    }

    render() {
        return (
            <div>
                <PizzaParty/>


            </div>

        )

    }


}

export default PizzaPartyContainer;