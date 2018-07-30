import React from 'react';
import DataInput from './DataInput';

const PizzaParty = (props) => {
    return (
        <div>
            <h1 className="App-title">Pizza Party </h1>
            <form>
                <p1>Ingrese el numero de personas:</p1>
                <DataInput name='personas'/>
                <p1>Ingrese el numero de pizzas:</p1>
                <DataInput name='pizzas'/>
                <p1>Ingrese el numero de slices:</p1>
                <DataInput name='slices'/>

            </form>
        </div>
    )
}
export default PizzaParty