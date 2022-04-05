
/// destructuración de objetos ///
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
  }
  
  interface Detalles {
    autor: string;
    año: number;
  }
  
  const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
      autor: "Ed Sheeran",
      año: 2015,
    },
  };
  
  
  const { volumen, segundo, cancion, detalles } = reproductor;
  const { autor, año } = detalles;
  /* 
  console.log("El volumen actual de: ", volumen);
  console.log("El segundo actual de: ", segundo);
  console.log("La cancion actual de: ", cancion);
  console.log("El autor es: ", autor); */
  
  ///Destructuración de arreglos///
  
  const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
  
  const [a, b, c] = dbz;
  
  console.log("Personaje 1: ", a);
  console.log("Personaje 1: ", b);
  console.log("Personaje 1: ", c);