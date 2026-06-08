const buttons = `
    <br>
    Páginas:
    <button onclick="redirect('pagina_2.html')">Strokes</button>
    <button onclick="popup('https://zabalbike.com.br/wp-content/uploads/2022/11/b80119127cd173b5460cd8268d1fb0fe.jpg')">Bicicleta</button>
    <button onclick="redirect('pizza.html')">Pizza</button>
    <button onclick="redirect('caneca.html')">Caneca</button>
`;

function redirect(page) {
    window.location.href = page;
}

function popup(page) {
    window.open(page, '_blank', popup)
}

function populate_website() {
    document.body.insertAdjacentHTML('beforeend', buttons);
}