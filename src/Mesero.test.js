////// Exercise  Pizza

import {Number, NumberPar} from "./Numbers";
import Mesero from "./Mesero";


var sinon = require('sinon');
var expect  = require('chai').expect;

////numberPar
it('should return is Par  when I put 10  ', () => {
    var number = new NumberPar();
    var n = 10
    var isPar = number.isPar(n);
    expect(isPar).to.equal(true)

})
it('should return is Par false  when I put 11  ', () => {
    var number = new NumberPar();
    var n = 11
    var isPar = number.isPar(n);
    expect(isPar).to.equal(false)

})

///probar numero par con jest

it('Shoul return true when I have 10', () =>{
    var number = new Number();
    var n= 10;
    expect(number.isNumber(n)).toBe(true);

})

it('should return true when I have a number', () =>{
    var n = 2;
    var number = new Number();
    var isNumber = number.isNumber(n);
    expect(isNumber).to.equal(true);

});

it('should return false when I have a text', () =>{
    var n = 'Hola';
    var number = new Number();
    var isNumber = number.isNumber(n);
    expect(isNumber).to.equal(false);

});

it('validarQueSeValidequenPeopleesNumero',() =>{
    var data = {nPeople: 8, nPizza: 2, slices: 8};
    var number = new Number();
    var numberPar = new NumberPar();
    var mesero = new Mesero(number, numberPar);
    var spia = sinon.spy(number, "isNumber");
    var spiaPar = sinon.spy(numberPar, "isPar")

    mesero.dividePizza(data)

// 8 2 7  se llama una vez
    sinon.assert.calledWith(spia, data.nPeople);
    sinon.assert.calledWith(spia, data.nPizza);
    sinon.assert.calledWith(spia, data.slices);

// 7  se llama una vez la funcion isPar
    expect(spiaPar.calledOnce).to.be.true;
    number.isNumber.restore();
    var stub = sinon.stub(number,'isNumber')

    stub.returns(true);
    number.isNumber.restore();

    // var mock = sinon.mock(number, 'isNumber');

})


it('si no es numero no llamar al validador para verif si es numer par',() =>{

    var data = {nPeople: 8, nPizza: 2, slices: 8};
    var number = new Number();
    sinon.stub(number,'isNumber').returns(false)


    var numberPar = new NumberPar();
    var mesero = new Mesero(number, numberPar);


    var spiaPar = sinon.spy(numberPar, "isPar")

    mesero.dividePizza(data)

    expect(spiaPar.calledOnce).to.be.false;
});

it('si isNumber retorna true entonces isPar se llama una vez ',()=>{
    var data = {nPeople: 8, nPizza: 2, slices: 8};
    var number = new Number();
    sinon.stub(number,'isNumber').returns(true)


    var numberPar = new NumberPar();
    var mesero = new Mesero(number, numberPar);


    var spiaPar = sinon.spy(numberPar, "isPar")

    mesero.dividePizza(data)

    expect(spiaPar.calledOnce).to.be.true;
});

it('si isNumber retorna false entonces estado debe tener false ',()=>{
    var data = {nPeople: 8, nPizza: 2, slices: 8};
    var number = new Number();
    sinon.stub(number,'isNumber').returns(false)

    var numberPar = new NumberPar();
    var mesero = new Mesero(number, numberPar);

    var slicePizza =mesero.dividePizza(data)
    expect(slicePizza.estado).to.equal(false);

});

it('si isPar retorna false entonces estado debe tener false ',()=>{
    var data = {nPeople: 8, nPizza: 2, slices: 8};
    var number = new Number();
    var numberPar = new NumberPar();
    sinon.stub(numberPar,'isPar').returns(false)

    var mesero = new Mesero(number, numberPar);

    var slicePizza =mesero.dividePizza(data)
    expect(slicePizza.estado).to.equal(false);

});

it('si number retorna true y numberPar retorna true entonces resultado debe tener true ',()=>{
    var data = {nPeople: 8, nPizza: 2, slices: 8};
    var number = new Number();
    sinon.stub(number,'isNumber').returns(true)
    var numberPar = new NumberPar();
    sinon.stub(numberPar,'isPar').returns(true)

    var mesero = new Mesero(number, numberPar);

    var slicePizza =mesero.dividePizza(data)
    expect(slicePizza.estado).to.equal(true);

});

// si tengo 2 pizzas y cada pizza tiene 4 slices, y divido para 2 personas entonces cada persona 4 slices
it('si tengo 2 pizzas y cada pizza tiene 4 slices, y divido para 2 personas entonces cada persona 4 slices',()=>{
    var data = {nPeople: 2, nPizza: 2, slices: 4};
    var number = new Number();
    var numberPar = new NumberPar();
    var mesero = new Mesero(number, numberPar);

    var slicePizza =mesero.dividePizza(data)
    expect(slicePizza.sliteForPerson).to.equal(4);

});

// si tengo 2 pizzas y cada pizza tiene 3 slices y divido para 4 personas entonces cada persona 1 slice y sobran 2
it('si tengo 1 pizzas y cada pizza tiene 6 slices y divido para 4 personas entonces cada persona 1 slice y sobran 2',()=>{
    var data = {nPeople: 4, nPizza: 1, slices: 6};
    var number = new Number();
    var numberPar = new NumberPar();
    var mesero = new Mesero(number, numberPar);

    var slicePizza =mesero.dividePizza(data)
    expect(slicePizza.sliteForPerson).to.equal(1);
    expect(slicePizza.leftOver).to.equal(2);

});

