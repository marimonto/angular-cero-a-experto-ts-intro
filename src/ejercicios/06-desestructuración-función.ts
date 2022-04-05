export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tablet: Producto = {
  desc: "ipad air",
  precio: 350,
};

export function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }, i, arrProductos) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos: Producto[] = [tablet, telefono];

const [total, isv] = calculaISV(articulos);

console.log("ISV: ", isv);
console.log("Total: ", total);
