class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const cola = new Queue();

cola.enqueue(1);
cola.enqueue(2);

const elementoEliminado = cola.dequeue();
console.log(elementoEliminado); // Imprimir 1







//  Una cola (queue en inglés) es una estructura de datos que sigue el principio de FIFO (First-In-First-Out), lo que significa que el primer elemento en ser agregado a la cola es el primero en ser eliminado. Es similar a una cola en la vida real, donde el primero en llegar es el primero en ser atendido. Las colas son ampliamente utilizadas en programación para administrar elementos en un orden específico.

// Algunas de las operaciones comunes que se pueden realizar en una cola son:

//     Enqueue (o push): Agregar un elemento al final de la cola.
//     Dequeue (o pop): Eliminar y obtener el elemento en la parte frontal de la cola.
//     Front (o Peek): Obtener el elemento en la parte frontal de la cola sin eliminarlo.
//     isEmpty: Verificar si la cola está vacía.
//     Tamaño: Obtener el número de elementos en la cola.

// Las colas son útiles en una variedad de situaciones, incluidas las siguientes:

//     Administración de tareas en un sistema: Por ejemplo, un sistema de impresión donde los trabajos de impresión se procesan en orden de llegada.
//     Búsqueda en amplitud (BFS): En algoritmos para recorrer grafos, una cola se utiliza para gestionar los nodos a visitar en el siguiente nivel.
//     Espera y procesamiento de solicitudes: En sistemas de gestión de solicitudes, como colas de mensajes en sistemas de procesamiento de datos en tiempo real.
//     Algoritmos de búsqueda de caminos: En problemas donde necesitas encontrar la ruta más corta entre dos puntos, como en algoritmos de búsqueda en amplitud. 