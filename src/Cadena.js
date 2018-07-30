export default class Exercise {
    countString(name) {
        return name.length
    }

    conctString(quote, author ){
        let quotationAuthor = author.concat(quote);
        return quotationAuthor;
    }

    madLibs(noun, verb, adjetive,adverb){
        var story ='Do you '+ verb+ ' your '+adjetive +' '+ noun+' ' +adverb
        return story

    }



}