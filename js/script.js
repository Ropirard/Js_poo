console.log("yo");

// Exemple de fonction traditionnelle
function maFonction( argument1 ) {
    console.log(argument1);
}

// Exemple d'objet litteral traditionnel
let monObjetLitteral = {
    prop1: 'La valeur de prop1',
    prop2: 'La valeur de prop2'
};

// Exemple d'oject littéral plus complexe
let monObjetLitteralComplexe = {
    prop1: 'le valeur de prop1',
    prop2: {
        propDeProp2: 'La valeur de prop1 de prop2',
        unAutreProp: 'la valeur de la prop'
    },
    uneFonction: function() {
        console.log(this);
    }
};

// Exemple de tableau traditionnel
let monTableau = ['valeur1', 'valeur2', 'valeur3'];

// Ecemple de prototype
const Car = function( color = 'blue') {
    Car.combienDeVoitures ++;
    this.color = color;
    this.brand = 'Peugeot';
    this.price = 0;
};

// "Méthode" non statique de Car
Car.prototype.getFormatedPrice = function() {
    return this.price + ' $';
};

// "Méthode" statique de Car
Car.getAllCars = function() {
    console.log('lpalm');
    return [];
};

// Propriété statique
Car.combienDeVoitures = 0;