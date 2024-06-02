//DOM
//Permite a los desarrolladores acceder y modificar los elementos de la página utilizando código JavaScript.

//getElements
//getElementById: Es una función, que permite seleccionar un único elemento de una página web basándonos en su atributo de identificación (ID).
//Ejemplo:
const divElemento = document.getElementById("miDiv");
console.log(divElemento.textContent); // Muestra el texto dentro del div*/

//querySelector: Se utiliza para seleccionar un elemento del DOM, utilizando un selector CSS. Devuelve el primer elemento que coincide con el selector especificado.
//Ejemplo:
const primerParrafo = document.querySelector(".parrafo");
console.log(primerParrafo.textContent); // Muestra el texto del primer párrafo dentro del div

//querySelectorAll: Es similar a querySelector, pero en lugar de devolver solo el primer elemento que coincide con el selector especificado, devuelve una NodeList (una lista de nodos) que contiene todos los elementos que coinciden con el selector.
//Ejemplo:
const todosLosParrafos = document.querySelectorAll(".parrafo");
todosLosParrafos.forEach(parrafo => {
    console.log(parrafo.textContent);
}
)

//modifiedElements
//textContent: Te permite acceder al contenido textual de un elemento HTML y modificarlo si es necesario.
//Ejemplo:

const miDiv = document.getElementById("miDiv"); // Seleccionar el elemento con el ID "miDiv"
miDiv.textContent = "Este es el nuevo texto para el elemento con ID 'miDiv'"; // Modificar el texto dentro del elemento utilizando textContent
console.log(miDiv.textContent);// Ver el contenido actualizado del elemento en la consola

//innerHTML: Te permite acceder y modificar el contenido HTML dentro de un elemento HTML.
//Ejemplo:

const parrafos = document.querySelectorAll(".parrafo"); // Seleccionar todos los elementos de párrafo con la clase "parrafo"

parrafos.forEach(parrafo => {
    parrafo.innerHTML = "Este es un nuevo <strong>párrafo</strong> con clase 'parrafo'"; // Iterar o recorrer sobre cada elemento de párrafo y modificar su contenido HTML utilizando innerHTML

    console.log(parrafo.innerHTML);  // Imprimir el contenido actualizado del párrafo en la consola
});

//En resumen, textContent maneja solo texto dentro de un elemento, mientras que innerHTML maneja y permite modificar el contenido HTML dentro de un elemento, incluyendo etiquetas HTML.

//styles
//property classList.add: Te permite añadir una clase CSS a un elemento HTML. Si el elemento ya tiene la clase especificada, classList.add no hará nada.
//property classList.remove: Te permite eliminar una clase CSS de un elemento HTML. Si el elemento no tiene la clase especificada, classList.remove no hará nada.
//Ejemplo:
const MyTitle = document.getElementById('MyTitle')

MyTitle.style.backgroundColor = 'white'
MyTitle.classList.add('highlighted'); // Agregar una clase CSS 'highlighted' al título utilizando classList.add y en mi archivo CSS modificaré el background a color pink.
MyTitle.classList.remove('highlighted');  // Eliminar la clase CSS 'highlighted' del título utilizando classList.remove


//Dom Traversing
//Es el proceso de moverse a través de los elementos del DOM. Para poder encontrar, acceder o manipular elementos específicos.

//parentElement:  Te da acceso al elemento padre directo del elemento actual.
//Ejemplo: 
// Obtener el párrafo con clase "parrafo"
const paragraph = document.querySelector('.parrafo');

// Acceder al elemento padre directo del párrafo
const parentElement = paragraph.parentElement;

console.log(parentElement); // Esto imprimirá el div con id "miDiv"

//nextElementsSibling: Te da acceso al siguiente hermano del elemento actual en el mismo nivel de jerarquía.
//Ejemplo: 

const firstParagraph = document.querySelector('.parrafo'); // Obtener el primer párrafo con clase "parrafo"
const nextSibling = firstParagraph.nextElementSibling; // Acceder al siguiente hermano del primer párrafo
console.log(nextSibling); // Esto imprimirá el segundo párrafo con clase "parrafo"

//children: Te da acceso a todos los elementos hijos directos del elemento actual.
//Ejemplo:

const divElement = document.getElementById('miDiv'); // Obtener el div con id "miDiv"
const childrenElements = divElement.children;  // Acceder a todos los elementos hijos directos del div
console.log(childrenElements); // Esto imprimirá una colección de todos los elementos hijos directos del div


//Create element
//createElement: Se utiliza para crear un nuevo elemento HTML en el DOM.
//Este método te permite crear elementos como divs, párrafos, encabezados, etc., y luego agregarlos a tu página web.
//Ejemplo:
// Crear un nuevo elemento párrafo
const newParagraph = document.createElement('p');

// Asignar texto al nuevo párrafo
newParagraph.textContent = "Este es un nuevo párrafo creado por createElement.";

// Agregar el nuevo párrafo al final del cuerpo del documento
document.body.appendChild(newParagraph);
console.log(newParagraph);


