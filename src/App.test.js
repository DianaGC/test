import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Exercise from './Cadena';
import { shallow } from 'enzyme';
import {NumberPar, Number} from "./Numbers";




var expect  = require('chai').expect;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('test suma', () => {

  expect(3).to.equal(1+2);
});

it('should return 5 when the name is diana', () =>{

  var exercise = new Exercise();
  var sizeName = exercise.countString('diana')
  expect(sizeName).to.equal(5);

});

it('should return the concat two string ', () =>{
  var text ='Megan MaxwelSorpréndeme';
  var exercise = new Exercise();
  var concat = exercise.conctString('Sorpréndeme', 'Megan Maxwel');
  expect(concat).to.equal(text);
});


it('should return a simple story whit a noun, a verb, an adjetive, an adverb ', () =>{
  var text = 'Do you walk your blue dog quickly';
  var exercise = new Exercise();
  var story = exercise.madLibs('dog','walk', 'blue', 'quickly');
  // console.log('----->',story)
  expect(story).to.equal(text)

})








