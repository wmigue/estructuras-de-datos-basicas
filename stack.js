class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const pila = new Stack(); // Crear una pila vacía utilizando una clase personalizada

// Operaciones de pila
pila.push(1);
pila.push(2);
pila.push(3);

const elementoEliminado = pila.pop();

console.log(elementoEliminado); // Imprimir 3
console.log(pila.size()); // Imprimir 2

















// Un "stack" (pila en español) es una estructura de datos que sigue el principio de LIFO (Last-In-First-Out), lo que significa que el último elemento agregado a la pila es el primero en ser eliminado. Es similar a una pila de objetos en la vida real, donde puedes agregar y quitar elementos solo desde la parte superior de la pila. Un stack es una estructura de datos fundamental en programación y se utiliza en una variedad de aplicaciones.

// Algunas de las operaciones comunes que se pueden realizar en un stack son:

//     Push: Agregar un elemento en la parte superior del stack.
//     Pop: Eliminar y devolver el elemento en la parte superior del stack.
//     Peek (o Top): Obtener el elemento en la parte superior del stack sin eliminarlo.
//     isEmpty: Verificar si el stack está vacío.
//     Tamaño: Obtener el número de elementos en el stack.

// Los stacks son útiles en una variedad de situaciones, incluidas las siguientes:

//     Administración de llamadas de funciones: En muchos lenguajes de programación, las llamadas de funciones se gestionan mediante una pila. Cuando se llama a una función, se agrega a la pila, y cuando la función termina, se quita de la pila.

//     Revertir elementos en orden: Puedes usar un stack para revertir el orden de los elementos. Por ejemplo, para revertir una cadena de caracteres.

//     Seguimiento de historiales y navegación en navegadores web: Los navegadores utilizan stacks para realizar un seguimiento de las páginas visitadas y permitir la navegación hacia adelante y hacia atrás.

//     Resolución de problemas en algoritmos y estructuras de datos: Los stacks se utilizan en una variedad de algoritmos, como la evaluación de expresiones matemáticas en notación polaca inversa (RPN), la búsqueda en profundidad (DFS) en grafos y la detección de paréntesis y corchetes balanceados en expresiones.

// En muchos lenguajes de programación, puedes implementar un stack utilizando un arreglo o una lista enlazada. La elección de la implementación depende de los requisitos de tu aplicación y de las operaciones que desees realizar de manera eficiente. Los stacks son una herramienta poderosa para resolver problemas de manera ordenada y eficiente en programación.