// Una tabla hash (también conocida como hash table o hashmap) es una estructura de datos que permite el almacenamiento y recuperación eficiente de datos mediante una función de dispersión (hash function). En una tabla hash, los datos se almacenan en "buckets" (cubos) y la función de dispersión se utiliza para mapear una clave (key) a un índice dentro de la tabla.

// Las tablas hash son extremadamente eficientes para la búsqueda, inserción y eliminación de datos, siempre y cuando la función de dispersión sea efectiva y la distribución de datos en los buckets sea uniforme. La complejidad promedio de estas operaciones es O(1), lo que significa que el tiempo requerido es constante y no depende del tamaño de la tabla.

// Aquí hay algunos conceptos clave relacionados con las tablas hash:

//     Función de Dispersión (Hash Function): Es una función matemática que toma una clave como entrada y genera un valor hash (un número entero) que se utiliza como índice para almacenar o recuperar datos en la tabla hash. Una buena función de dispersión distribuirá los datos de manera uniforme en los buckets.

//     Bucket: Cada "cubo" o espacio de almacenamiento dentro de la tabla hash donde se almacenan los datos. Los buckets están identificados por índices que se generan a partir de la función de dispersión.

//     Colisión (Collision): Ocurre cuando dos claves diferentes se asignan al mismo índice o bucket después de aplicar la función de dispersión. Las colisiones son inevitables en las tablas hash y deben manejarse adecuadamente.

//     Resolución de Colisiones (Collision Resolution): Es el proceso de manejar colisiones cuando dos claves diferentes generan el mismo valor hash. Hay varias técnicas para resolver colisiones, como el encadenamiento (chaining) y la exploración lineal (linear probing).

//     Carga (Load Factor): Es una medida que indica cuántos elementos se almacenan en la tabla hash en relación con la capacidad total de la tabla. Un alto factor de carga puede provocar un rendimiento deficiente, por lo que es importante tener una función de dispersión adecuada y ajustar el tamaño de la tabla cuando sea necesario.

//     Tabla Hash Dinámica: Es una tabla hash que puede cambiar de tamaño automáticamente (aumentando o disminuyendo) para mantener un factor de carga adecuado a medida que se agregan o eliminan elementos.

//     Uso de Tablas Hash: Las tablas hash se utilizan en una amplia variedad de aplicaciones, incluyendo la implementación de diccionarios, conjuntos, bases de datos de búsqueda rápida y caches de datos.




// Crear una tabla hash
const tablaHash = new Map();

// Agregar elementos
tablaHash.set("clave1", "valor1");
tablaHash.set("clave2", "valor2");
tablaHash.set("clave3", "valor3");

// Obtener elementos
const valor = tablaHash.get("clave2");
console.log(valor); // Imprimirá "valor2"

// Verificar si una clave existe
const existeClave = tablaHash.has("clave4");
console.log(existeClave); // Imprimirá false

// Eliminar un elemento
tablaHash.delete("clave1");

// Recorrer la tabla hash
tablaHash.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});



