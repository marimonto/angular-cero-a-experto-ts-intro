function sumar(a: number, b: number): string {
    return (a + b).toString();
  }
  const sumarNew = (a: number, b: number): number => {
    return a + b;
  };
  
  const multiplicar = (numero: number, otroNumero?: number, base: number = 2) => {
    return numero * base;
  };
  
  function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
  }
  
  interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp?: () => void;
  }
  
  const resultado = sumar(1, 2);
  const resultadoSumaNew = sumarNew(3, 4);
  const resultadoMultiplicar = multiplicar(3);
  
  const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHp() {
      console.log("Puntos de vida: ", this.pv);
    },
  };
  
  curar(nuevoPersonaje, 50);
  nuevoPersonaje.mostrarHp();
  