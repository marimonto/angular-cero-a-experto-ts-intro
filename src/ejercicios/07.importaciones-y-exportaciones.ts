import {
    Producto,
    calculaISV,
  } from "./06-desestructuración-función";
  
  const carritoCompras: Producto[] = [
    { desc: "telefono 1", precio: 100 },
    { desc: "telefono 2", precio: 150 },
  ];
  
  const [total, isv] = calculaISV(carritoCompras);
  
  console.log("ISV: ", isv);
  console.log("Total: ", total);
  