const almatyTourism = {
    attractions: ['Shymbulak', 'Medeo', 'Koktobe', 'Big Almaty Lake', 'Sharyn Canyon', 'Ayusai', 'City of Nomads'],
    food: ['besbarmaq', 'quyrdaq', 'Nauryz kozhe', 'zhent', 'bauyrsaq', 'qazy', 'qarta', 'qurt'],
    drink: ['qymyz', 'shubat', 'shai', ],
    visit: function () {
        return `You should visit ${this.attractions[Math.floor(Math.random() * 7)]}`;
    },
    eat: function () {
        return `You should try ${this.food[Math.floor(Math.random() * 8)]}`;
    },
    consume: function () {
        return `You should drink ${this.drink[Math.floor(Math.random() * 3)]}`;
    },
    mustToDO: function () {
       return `You should visit ${this.attractions[Math.floor(Math.random() * 7)]}, try ${this.food[Math.floor(Math.random() * 8)]} 
       and drink ${this.drink[Math.floor(Math.random() * 3)]}`
    }
};
console.log(almatyTourism.mustToDO())



