// Ejercicio 1

class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar (cantidad) {
    this.saldo += cantidad
  }

  extraer(cantidad) {
    if (this.saldo >= cantidad) {
        this.saldo -= cantidad;
    } else {
        console.log("Saldo insuficiente.");
    }
  }

  informar() {
    console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
  }
}


let ccorriente = new Cuenta("Pedro");
ccorriente.ingresar(500);
ccorriente.extraer(120);
ccorriente.informar();


class CPlazoFijo extends Cuenta {
  constructor(titular, añoCreacion, plazofijo) {
      super(titular);
      this.añoCreacion = añoCreacion;
      this.plazofijo = plazofijo;
  }

  extraer(cantidad) {
      let currentYear = new Date().getFullYear();
      if (currentYear - this.añoCreacion >= this.plazofijo) {
          super.extraer(cantidad);
      } else {
          console.log(`La cuenta esta bloqueada hasta el ${this.añoCreacion + this.plazofijo}`)
      }
  }
}
console.log(new Date().getFullYear());
console.log(2007);
let cfijo1 = new CPlazoFijo("Jorge", 2007, 20);
let cfijo2 = new CPlazoFijo("Fernando", 2007, 10);

cfijo1.ingresar(100);
cfijo2.ingresar(200);

cfijo2.extraer(50);
cfijo1.extraer(50);
cfijo2.informar();


// clase circulo con propiedad radio, por defecto es 5

class Circulo {
  constructor(radio = 5) {
    this.radio = radio;
  }

  getRadio() {
    return this.radio;
  }

  setRadio(radio) {
    this.radio = radio;
  }

  getArea() {
    return Math.PI * this.radio * this.radio;
  }

  getPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}