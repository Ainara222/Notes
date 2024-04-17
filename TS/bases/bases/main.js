"use strict";
(() => {
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'clark kent',
        age: 45,
        powers: [3],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'fernando',
        age: 23,
        address: {
            id: 123,
            zip: 'kis sur',
            city: 'london'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'melisa',
        age: 23,
        address: {
            id: 123,
            zip: 'kis sur',
            city: 'london'
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
    }
}
//# sourceMappingURL=main.js.map