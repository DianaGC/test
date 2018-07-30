import React, {Component}from 'react';
import {Number} from "../../Numbers";
import DataInput from '../presentational/DataInput';

class DataInputContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: 0
        }
        this.number = new Number();
    }


    onchange(e) {
        if (!this.number.isNumber(e.target.value)) {
            alert('deberia ingresar solo numeros ')
        } else {
            this.setState({
                data: e.target.value
            });
        }
    }

    render(){
        <DataInput name={}/>
    }
}




export default DataInputContainer