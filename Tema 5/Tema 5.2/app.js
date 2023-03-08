// Ejercicio 2

let Cuenta = function(titular) {
  this.titular = titular;
  this.saldo = 0;
  this.ingresar = function (cantidad) {
      this.saldo += cantidad;
  }
  this.extraer = function(cantidad) {
      if (this.saldo >= cantidad) {
          this.saldo -= cantidad;
      } else {
          console.log("Saldo insuficiente.");
      }
  }
  this.informar = function() {
      console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
  }
}

let ccorriente = new Cuenta("Pedro");
ccorriente.ingresar(500);
ccorriente.extraer(120);
ccorriente.informar();

let CPlazoFijo = function (titular, añoCreacion, plazofijo) {
  Cuenta.call(this,titular);
  this.añoCreacion = añoCreacion;
  this.plazofijo = plazofijo;
  this.extraer = function(cantidad) {
      let currentYear = new Date().getFullYear();
      if (currentYear - this.añoCreacion >= this.plazofijo) {
          this.saldo -= cantidad;
      } else {
          console.log(`La cuenta esta bloqueada hasta el ${this.añoCreacion + this.plazofijo}`);
      }
  }
}

let cfijo1 = new CPlazoFijo("Jorge", 2007, 20);
let cfijo2 = new CPlazoFijo("Fernando", 2007, 10);

cfijo1.ingresar(100);
cfijo2.ingresar(200);

cfijo2.extraer(50);
cfijo1.extraer(50);
cfijo2.informar();
