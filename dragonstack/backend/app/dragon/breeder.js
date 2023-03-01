const base64 = require('base-64');
const  Dragon = require('./index');


class Breeder{
    static breedDragon({ matron, patron}){
        const matronTraits = matron.traits;
        const patronTraits = patron.traits;

        const babyTraits = [];

        matronTraits.forEach(({traitType, traitValue}) =>{
            const matronTrait = traitValue;

            const patronTrait = patronTraits.find(
                trait => trait.traitType === traitType
            ).traitValue;
            babyTraits.push({
                traitType,
                traitValue: Breeder.pickTrait({ matronTrait, patronTrait})
            });
        });
        return new Dragon({ nickname: 'Unnamed baby', traits: babyTraits});
    }

    //two incoming traits: matronTrait and patronTrait
    // matronTrait and patronTrait string values are encoded
    // both traits have characters summed.
    //get a range by adding both character sums
    //generate a random number, in that range
    // if the number is less than the matrons character sum, pick matron
    // else pick patron

    static pickTrait({ matronTrait, patronTrait}){
        if (matronTrait === patronTrait)return matronTrait;

        const matronTraitCharSum = Breeder.charSum( base64.encode(matronTrait));
        const patronTraitCharSum = Breeder.charSum(base64.encode(patronTrait));

        const randNum = Math.floor(Math.random() * (matronTraitCharSum + patronTraitCharSum))
        return randNum < matronTraitCharSum ? matronTrait : patronTrait ;
    }
    static charSum(string){
        string.split('').reduce(
            (sum, character)=> sum += character.charCodeAt(),
            0
        );
    };
}
module.exports = Breeder;
