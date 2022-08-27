export interface Libro {
  id: number;
  nombre: string;
  autor: string;
  descripcion: string;
  precio: number;
}

export const libros: Array<Libro> = [
  {
    id: 1,
    nombre: 'El Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    descripcion: 'Clásico del idioma castellano',
    precio: 2600,
  },
  {
    id: 2,
    nombre: 'Hombres sin Mujeres',
    autor: 'Haruki Murakami',
    descripcion: 'Historias de hombres que han perdido mujeres',
    precio: 2900,
  },
  {
    id: 3,
    nombre: 'Sapiens: de animales a dioses',
    autor: 'Yuval Noah Harari',
    descripcion: 'Recuento de la historia de la Humanidad desde la prehistoria',
    precio: 3200,
  },
  {
    id: 4,
    nombre: 'El Señor de los Anillos',
    autor: 'JR Tolkien',
    descripcion: 'Clásico adaptado al cine, en versión para la cartera de la dama',
    precio: 3800,
  },
];
