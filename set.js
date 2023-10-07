// Un conjunto (set en inglés) en programación es una estructura de datos que almacena elementos sin repetición y sin un orden específico. Los conjuntos son útiles cuando necesitas mantener una colección de elementos únicos y no te importa el orden en que se almacenan. En JavaScript, puedes crear conjuntos utilizando el objeto Set.

const miSet = new Set();

miSet.add(1);
miSet.add(2);
miSet.add(3);

console.log(miSet.size); // Devuelve 3

miSet.delete(2);

miSet.forEach((x) => {
    console.log(x); // Imprime 1 y 3 en algún orden
});
