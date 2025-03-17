let amigos = []

// Funcioón para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    input.value = "";
    actualizarLista(); // Llama a la función para actualizar la lista de amigos en pantalla
}

// Funcion que actualiza la lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// función del sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}

