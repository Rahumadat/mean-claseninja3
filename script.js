//NINJA 3
class Ninja {
    nombre = "";
    vida = 100;
    velocidad = 3;  
    fuerza = 3;     

    constructor (nombre){
        this.nombre = nombre;
    }

    sayName(){
        console.log("el nombre de mi ninja es " + this.nombre);
    }

    showStats(){
        console.log("Nombre: " + this.nombre + ", vida: " + this.vida + ", Velocidad: " + this.velocidad + ", Fuerza: " + this.fuerza);
    
    }
    drinkSake(){
        this.vida = this.vida + 10;
        console.log("El ninja " + this.nombre + " ha bebido sake, ahora posee " + this.vida + " de vida");
    }
    
    punch(ninjaGolpeado){
        ninjaGolpeado.vida = ninjaGolpeado.vida - 5;
        console.log("Nombre: " + this.nombre + " golpeo a " + ninjaGolpeado.nombre + " y perdio 5 de vida, quedando con " + ninjaGolpeado.vida);
    }
    kick(ninjaPateado){
        let patada = (this.fuerza * 15);
        ninjaPateado.vida = ninjaPateado.vida - patada ;
        console.log("Nombre: " + this.nombre + " pateo a " + ninjaPateado.nombre + " y perdio " + patada + " de vida, quedando con " + ninjaPateado.vida);
    }
}

class Sensei extends Ninja {
    sabiduria = 10;

    constructor (nombreSensei){
        super(nombreSensei);
        this.vida = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }

    speakWinsdom(){
        console.log("Este es un mensaje sabio para cumplir con lo que solicita CodingDijo");
        this.drinkSake();
    }
}

// let ninja1 = new Ninja ("NinjaGaiden");
// let ninja2 = new Ninja ("Kenshin");
let superSensei = new Sensei("Maestro Splinter");

superSensei.speakWinsdom();
superSensei.showStats();


// ninja1.punch(ninja2);
// ninja2.punch(ninja1);

// ninja2.kick(ninja1);
// ninja1.kick(ninja2);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
