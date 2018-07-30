import {Number, NumberPar} from "./Numbers";


export default class Mesero {



    constructor(validadorNumeros, validadorImpares){
        this.validadorNumeros=validadorNumeros;
        this.validadorNumerosImpares=validadorImpares;

    }

    procesoDividePizza(data) {

        var totalSlices = data.nPizza * data.slices;
        var nslice = totalSlices / data.nPeople;
        var sliceForPerson = Math.floor(nslice);
        var leftOver = totalSlices - (sliceForPerson * data.nPeople);
        var result = {
            estado: true,
            totalSlices: totalSlices,
            People: data.nPeople,
            sliteForPerson: sliceForPerson,
            leftOver: leftOver
        };
        return result;
    }


    dividePizza(data) {

        if (this.validadorNumeros.isNumber(data.slices)

            && this.validadorNumeros.isNumber(data.nPeople) && this.validadorNumeros.isNumber(data.nPizza) && this.validadorNumerosImpares.isPar(data.slices)) {
            var result = this.procesoDividePizza(data);
            return result;

        } else {
            var result = {estado: false, totalSlices: 0, People: data.nPeople, sliteForPerson: 0, leftOver: 0};
            return result;
        }

    }


}