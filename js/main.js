// Lista del menú
let menu = [
    { id: 1, nombre: "Ensalada de lechuga y tomate", precio: 500 },
    { id: 2, nombre: "Sopa de letras", precio: 300 },
    { id: 3, nombre: "Tallarines caseros", precio: 800 },
    { id: 4, nombre: "Pizza con Muzza", precio: 1000 },
    { id: 5, nombre: "Hamburguesa a lo Mc", precio: 700 },
    { id: 6, nombre: "Sushi", precio: 1200 },
    { id: 7, nombre: "Tacos", precio: 600 },
    { id: 8, nombre: "Asado de Tira", precio: 1100 },
    { id: 9, nombre: "Pescado a la plancha", precio: 900 },
    { id: 10, nombre: "Flan con dulce", precio: 400 }
];

let total = 0;
let pedido = [];

// muestra menu en index (chequear entes)
function mostrarMenu() {
    let menuHTML = "<h3>Menú del día:</h3><ul>";
    for (let i = 0; i < menu.length; i++) {
        menuHTML += `<li>${menu[i].id}. ${menu[i].nombre} - $${menu[i].precio}</li>`;
    }
    menuHTML += "</ul>";
    document.getElementById("menu").innerHTML = menuHTML;
}

// cheq platos (ver antes!!)
function pedirPlato() {
    let platoNumero = parseInt(document.getElementById('plato').value);

    if (platoNumero >= 1 && platoNumero <= 10) {
        let platoSeleccionado = menu[platoNumero - 1];
        pedido.push(platoSeleccionado);
        total += platoSeleccionado.precio;
        actualizarPedido();
    } else {
        alert("Número de plato no válido. Selecciona un número entre 1 y 10.");
    }
}

// muestra pedido
function actualizarPedido() {
    let pedidoHTML = "<h3>Tu pedido:</h3><ul>";
    for (let i = 0; i < pedido.length; i++) {
        pedidoHTML += `<li>${pedido[i].nombre} - $${pedido[i].precio}</li>`;
    }
    pedidoHTML += `</ul><p>Total Pedido: $${total}</p>`;
    document.getElementById("pedido").innerHTML = pedidoHTML;
}

// % Propina
function calcularPropina() {
    let propina = 0;
    let conPropina = parseInt(prompt("Selecciona el porcentaje de propina a dejar: 1 = 5%, 2 = 10%, 3 = 15%"));

    switch (conPropina) {
        case 1:
            propina = total * 0.05;
            break;
        case 2:
            propina = total * 0.10;
            break;
        case 3:
            propina = total * 0.15;
            break;
        default:
            alert("Opción no válida, no se añadirá propina.");
            propina = 0;
            break;
    }
    return propina;
}

// calcula propina
function finalizarPedido() {
    if (pedido.length === 0) {
        alert("No has pedido nada.");
        return;
    }

    let propina = 0;
    let quierePropina = "";
    
    while (quierePropina !== "si" && quierePropina !== "no") {
        quierePropina = prompt("¿Deseas dejar propina? (si/no)").toLowerCase();

        if (quierePropina !== "si" && quierePropina !== "no") {
            alert("Por favor, ingresa una respuesta válida: si o no.");
        }
     }

   
    if (quierePropina === "si") {
        propina = calcularPropina();
    }

    let totalConPropina = total + propina;
    document.getElementById("cuenta").innerHTML = `
        <h3>Descripción Ticket:</h3>
        <p>Total Pedido: $${total}</p>
        <p>Propia: $${propina.toFixed(2)}</p>
        <p>Total a pagar: $${totalConPropina.toFixed(2)}</p>`;
    }

    // Función para reiniciar el pedido

    function cargarnuevo() {
        pedido = [];  
        total = 0;
        document.getElementById("pedido").innerHTML = "<h3>Tu pedido:</h3><ul><li>Ingresa tu pedido.</li></ul><p>Total Pedido: $0</p>";
        document.getElementById("cuenta").innerHTML = ""; 
    }
mostrarMenu();
