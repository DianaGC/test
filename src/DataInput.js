import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Mesero from "./Mesero";
import {Number, NumberPar} from "./Numbers";


class DataInput extends Component {
    constructor(props) {
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

    render() {
        return (
            <div>
                <input
                    name={this.props.name}
                    ref="textInput"
                    onChange={this.onchange.bind(this)}
                    value={this.state.data}
                />
            </div>
        )
    }

}

export default DataInput