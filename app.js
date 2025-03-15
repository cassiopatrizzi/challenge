let amigos = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo');
    let nome = nomeDigitado.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    amigos.push(nome);
    nomeDigitado.value = '';
    nomeDigitado.focus();
    exibirLista();
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    exibirSorteio(amigoSorteado); 
}

function exibirSorteio(amigo) {
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; 

    let amigoSorteado = document.createElement('li');
    amigoSorteado.textContent = `O amigo secreto sorteado foi: ${amigo}`;
    resultadoLista.appendChild(amigoSorteado);
}
