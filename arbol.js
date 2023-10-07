

class TreeNode {
    constructor(valor) {
        this.valor = valor;
        this.hijos = [];
    }

    agregarHijo(hijo) {
        this.hijos.push(hijo);
    }
}





//Algoritmo para recorrer un árbol en profundidad (DFS):
// El algoritmo se llama "Depth-First" porque explora lo más profundo posible a lo largo de cada rama antes de retroceder y seguir con otro hijo.
function recorridoDFS(nodo) {
    if (nodo === null) {
        return;
    }

    console.log(nodo.valor);  // Procesar el nodo actual

    // Recorrer los nodos hijos en profundidad
    for (const x of nodo.hijos) {
        recorridoDFS(x)
    }
}



// Algoritmo para recorrer un árbol en amplitud (BFS):
// El algoritmo BFS utiliza una cola para asegurarse de que los nodos se visiten en el orden en que se encuentran a una distancia creciente desde el nodo raíz.
function recorridoBFS(raiz) {
    if (raiz === null) {
        return;
    }

    const cola = [];
    cola.push(raiz);

    while (cola.length > 0) {
        const nodoActual = cola.shift() // Desencolar el nodo actual
        console.log(nodoActual) // Procesar el nodo actual

        // Enqueue los nodos hijos
        for (const hijo of nodoActual.hijos) {
            cola.push(hijo);
        }
    }
}





// Ejemplo de uso:
const raiz = new TreeNode("A");
const nodoB = new TreeNode("B");
const nodoC = new TreeNode("C");
const nodoD = new TreeNode("D");

raiz.agregarHijo(nodoB);
raiz.agregarHijo(nodoC);
nodoB.agregarHijo(nodoD);

recorridoBFS(raiz);
//recorridoDFS(raiz);

















// Además de los algoritmos de recorrido en profundidad (DFS) y recorrido en amplitud (BFS), hay otros enfoques y variantes para recorrer un árbol, dependiendo de la naturaleza del problema que estés resolviendo y de cómo quieras visitar los nodos. Algunos de estos enfoques incluyen:

//     Recorrido en orden (Inorder Traversal):
//         Este enfoque se utiliza comúnmente en árboles binarios de búsqueda (BST).
//         El recorrido visita primero el subárbol izquierdo, luego el nodo raíz y finalmente el subárbol derecho.
//         Se utiliza en BST para obtener los nodos en orden ascendente.

//     Recorrido en orden inverso (Reverse Inorder Traversal):
//         Similar al recorrido en orden, pero visita los nodos en el orden inverso.
//         Útil en BST para obtener los nodos en orden descendente.

//     Recorrido por niveles:
//         Este enfoque recorre el árbol nivel por nivel, comenzando desde la raíz y avanzando hacia abajo.
//         Es similar a BFS, pero se utiliza en árboles generales además de grafos.
//         Se puede implementar utilizando una cola.

//     Recorrido en zigzag (Zigzag Traversal):
//         En este enfoque, se recorren las ramas en un patrón zigzag, alternando entre izquierda y derecha.
//         Puede ser útil en árboles binarios para obtener un orden espiral.

//     Recorrido por profundidad limitada (Depth-Limited Traversal):
//         Este enfoque es similar a DFS, pero se detiene después de alcanzar cierta profundidad en el árbol.
//         Útil para limitar la búsqueda en profundidad en árboles muy profundos.

//     Recorrido por anchura limitada (Breadth-Limited Traversal):
//         Similar a BFS, pero se detiene después de visitar un cierto número de niveles.
//         Puede ser útil para limitar la búsqueda en amplitud.

// La elección del enfoque de recorrido depende de la tarea específica que estés realizando y de cómo quieras procesar los nodos en el árbol. Cada enfoque tiene sus propias aplicaciones y ventajas en diferentes situaciones.