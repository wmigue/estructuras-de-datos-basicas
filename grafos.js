class Grafo {
    constructor() {
        this.nodos = new Map();
    }

    agregarNodo(valor) {
        if (!this.nodos.has(valor)) {
            this.nodos.set(valor, []);
        }
    }

    agregarArista(nodo1, nodo2) {
        this.nodos.get(nodo1).push(nodo2);
        this.nodos.get(nodo2).push(nodo1); // Debido a que es un grafo no dirigido
    }

    obtenerVecinos(valor) {
        return this.nodos.get(valor);
    }
}

// Crear un grafo
const miGrafo = new Grafo();

// Agregar nodos
miGrafo.agregarNodo("A");
miGrafo.agregarNodo("B");
miGrafo.agregarNodo("C");
miGrafo.agregarNodo("D");
miGrafo.agregarNodo("E");

// Agregar aristas (conexiones)
miGrafo.agregarArista("A", "B");
miGrafo.agregarArista("A", "C");
miGrafo.agregarArista("B", "C");
miGrafo.agregarArista("B", "D");
miGrafo.agregarArista("B", "E");
miGrafo.agregarArista("C", "D");
miGrafo.agregarArista("D", "E");

// Obtener vecinos de un nodo
const vecinosDeB = miGrafo.obtenerVecinos("B");
console.log("Vecinos de B:", vecinosDeB);






// Los grafos son estructuras de datos utilizadas para representar relaciones entre objetos. Consisten en un conjunto de nodos (vértices) y un conjunto de aristas (arcos) que conectan los nodos. Los grafos se utilizan en una amplia variedad de aplicaciones, como representación de redes sociales, rutas de navegación, representación de datos en estructuras jerárquicas, resolución de problemas de búsqueda, entre otros.

// Ejemplo de un Grafo Simple (No Dirigido):

// Supongamos que tenemos un grafo simple que representa conexiones de amistad entre personas en una red social. Los nodos representan personas y las aristas representan la amistad entre ellas. Por ejemplo:

// A -- B
// |  / | \
// C -- D -- E


// Los nodos son: A, B, C, D, y E.
// Las aristas conectan: A-B, A-C, B-C, B-D, B-E, C-D, D-E


// En este ejemplo, el grafo es no dirigido porque la amistad es bidireccional (si A es amigo de B, entonces B es amigo de A). También es un grafo conexo porque hay un camino entre cualquier par de nodos.

// Los grafos son una herramienta poderosa para resolver una variedad de problemas y representar relaciones complejas en una estructura de datos. Las aplicaciones de grafos son diversas, y los algoritmos de grafos se utilizan en una amplia gama de campos, desde la informática hasta la logística y la ciencia social.