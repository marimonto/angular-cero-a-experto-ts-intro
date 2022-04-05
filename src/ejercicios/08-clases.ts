class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}
class Heroe extends PersonaNormal {
  /*   alterEgo: string;
  edad: number;
  nombreReal: number;

  constructor(alterEgo: string) {
    this.alterEgo = alterEgo;
  } */

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string,
    public direccion: string
  ) {
    super(nombreReal, direccion);
  }
}

const ironman = new Heroe("Ironman", 20, "Tony", "New York, Usa");

console.log(ironman);
