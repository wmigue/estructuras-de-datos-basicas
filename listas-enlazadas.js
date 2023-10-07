class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let nodoActual = this.cabeza;
            while (nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = nuevoNodo;
        }
    }

    recorrer() {
        let nodoActual = this.cabeza;
        while (nodoActual) {
            console.log(nodoActual.valor);
            nodoActual = nodoActual.siguiente;
        }
    }

    eliminar(valor) {
        if (!this.cabeza) {
            return;
        }

        if (this.cabeza.valor === valor) {
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let nodoActual = this.cabeza;
        while (nodoActual.siguiente) {
            if (nodoActual.siguiente.valor === valor) {
                nodoActual.siguiente = nodoActual.siguiente.siguiente;
                return;
            }
            nodoActual = nodoActual.siguiente;
        }
    }
}

const miLista = new ListaEnlazada();
miLista.agregar("A");
miLista.agregar("B");
miLista.agregar("C");

miLista.eliminar("B"); // Elimina el nodo con valor "B"

miLista.recorrer(); // Imprime "A" y "C"








// Las listas enlazadas son una estructura de datos lineal en la que los elementos están organizados en nodos, y cada nodo contiene un valor y una referencia (o enlace) al siguiente nodo en la secuencia. Las listas enlazadas son útiles cuando necesitas una estructura de datos que permita una inserción y eliminación eficiente de elementos en cualquier posición.

// Aquí hay una explicación general de cómo funcionan las listas enlazadas y luego te proporcionaré ejemplos de cómo crear y recorrer una lista enlazada en JavaScript.

// Estructura de un nodo de lista enlazada:

//     Valor: Almacena el dato o elemento que deseas almacenar en la lista.
//     Referencia al siguiente nodo: Apunta al siguiente nodo en la secuencia. En el último nodo de la lista, esta referencia generalmente es null.

// Nodo 1        Nodo 2        Nodo 3
// [valor: A] -> [valor: B] -> [valor: C] -> null

