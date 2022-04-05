let habilidades: (boolean | string | number)[] = ["Bash", "Counter", "Healing"];

habilidades.push(1);
habilidades.push(true);

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNata?: string;
}

const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.puebloNata = "Pueblo paleta";
console.table(personaje);
