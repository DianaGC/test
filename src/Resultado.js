import React, {Component} from 'react';
import PropTypes from 'prop-types';


const Resultado = props => {
    console.log('check props', props);
    if (props.data) {
        return (
            <div>
                <label>Each person gets </label> {this.props.sliceForPerson} <label> pieces of pizza</label><br/>
                <label>There are </label> {this.props.leftOver} <label> leftover pieces</label>
            </div>
        )
    }
    else {
        return '';
    }
}
export default Resultado