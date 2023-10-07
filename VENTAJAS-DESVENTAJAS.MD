## ventajas y desventajas de algunas estructuras de datos comunes:

### Arreglos (Arrays):

    Ventajas:
        Acceso rápido a elementos por índice (O(1)).
        Uso eficiente de la memoria para almacenar elementos en una secuencia contigua.
    Desventajas:
        Inserción y eliminación costosas en el medio del arreglo (O(n)).
        Tamaño fijo en la mayoría de los lenguajes (necesitas redimensionar si se llena).

### Listas Enlazadas (Linked Lists):

    Ventajas:
        Inserción y eliminación eficientes en cualquier posición (O(1) si tienes acceso al nodo).
        Utilizan solo la memoria necesaria.
    Desventajas:
        Acceso lento a elementos por índice (O(n)).
        Mayor consumo de memoria debido a las referencias a nodos.

### Pilas (Stacks) y Colas (Queues):

    Ventajas:
        Implementan operaciones de apilado (push) y desapilado (pop) o encolado (enqueue) y desencolado (dequeue) de manera eficiente (O(1)).
        Útiles para mantener un orden de elementos.
    Desventajas:
        Limitadas en términos de acceso aleatorio a elementos.

### Árboles (Trees):

    Ventajas:
        Estructura jerárquica para organizar datos de manera eficiente.
        Utilizados en estructuras avanzadas como árboles binarios de búsqueda, árboles AVL, árboles B, etc.
    Desventajas:
        Operaciones de búsqueda, inserción y eliminación pueden ser costosas dependiendo de la implementación.

### Tablas Hash (Hash Tables):

    Ventajas:
        Búsqueda, inserción y eliminación eficientes en promedio (O(1)).
        Buen rendimiento para grandes cantidades de datos cuando la función de dispersión es efectiva.
    Desventajas:
        Mal rendimiento en casos de colisiones.
        Uso de memoria puede ser ineficiente si la tabla es grande.

### Grafos (Graphs):

    Ventajas:
        Modelan relaciones complejas entre objetos.
        Útiles en algoritmos de búsqueda y representación de redes y conexiones.
    Desventajas:
        Operaciones de búsqueda y exploración pueden ser costosas en grafos grandes.

### Conjuntos (Sets) y Mapas (Maps):

    Ventajas:
        Almacenan elementos únicos (Sets) o pares clave-valor (Maps).
        Búsqueda eficiente y manejo de duplicados.
    Desventajas:
        Limitados en términos de acceso aleatorio a elementos.


//////////////////////////////////////////////////////////////////////////////////////////




## CUANDO USAR UNA U OTRA

    Arreglos (Arrays):
        Conviene usar arreglos cuando necesitas acceso rápido a elementos por índice y el tamaño de la colección es fijo o conocido de antemano.
        Son adecuados para implementar listas ordenadas o cuando necesitas almacenar elementos en un orden específico.

    Listas Enlazadas (Linked Lists):
        Conviene usar listas enlazadas cuando necesitas realizar inserciones o eliminaciones eficientes en cualquier posición de la colección.
        Son útiles cuando el tamaño de la colección puede variar dinámicamente.

    Pilas (Stacks) y Colas (Queues):
        Conviene usar pilas cuando necesitas un orden de último en entrar, primero en salir (LIFO).
        Conviene usar colas cuando necesitas un orden de primero en entrar, primero en salir (FIFO).
        Son adecuadas para tareas de gestión de tareas y algoritmos específicos como búsqueda en amplitud (BFS).

    Árboles (Trees):
        Conviene usar árboles cuando necesitas organizar datos en una estructura jerárquica.
        Son adecuados para representar relaciones padre-hijo o en aplicaciones como análisis sintáctico y algoritmos de búsqueda binaria.

    Tablas Hash (Hash Tables):
        Conviene usar tablas hash cuando necesitas buscar, insertar o eliminar elementos de manera eficiente, especialmente si tienes una buena función de dispersión y no esperas demasiadas colisiones.
        Son adecuadas para implementar diccionarios, conjuntos y caches.

    Grafos (Graphs):
        Conviene usar grafos cuando necesitas representar relaciones complejas y conexiones entre objetos.
        Son útiles en algoritmos de búsqueda de caminos, modelado de redes sociales y análisis de datos en general.

    Conjuntos (Sets) y Mapas (Maps):
        Conviene usar conjuntos cuando necesitas almacenar elementos únicos sin duplicados.
        Conviene usar mapas cuando necesitas asociar valores con claves únicas para una búsqueda eficiente.