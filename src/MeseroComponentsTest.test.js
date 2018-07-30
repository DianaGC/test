import React from 'react';
import { shallow } from 'enzyme';
import Mesero from "./MeseroApp";


it('renders without crashing', () => {
    shallow(<Mesero/>);

});