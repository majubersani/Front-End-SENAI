// Elementos HTML
const $list = document.getElementById('list');
const $error = document.getElementById('error');
const $spinner = document.getElementById('spinner');
const btnLoad = document.getElementById('btn-load');

const API = 'https://dummyjson.com/products'; // API pública de testes

// Mostrar spinner
function showSpinner(show) {
    $spinner.style.display = show ? 'block' : 'none';
}

// Mostrar erro
function showError(msg) {
    $error.textContent = msg || '';
}

function renderPost(posts) {
    const html = posts.products.map(p => `
    <div class="card mb-4 shadow-sm">
        <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text categoria">Categoria: ${p.category}</p>
          <p class="card-text preco">Preço: R$ ${p.price}</p>
          <p class="card-text">Avaliação: ${p.rating} ⭐</p>
          <p class="card-text">Estoque: ${p.stock}</p>
          <div class="mt-auto">
            <button class="btn-comprar w-100">
                <i class="bi bi-cart3"></i> Comprar
            </button>
          </div>
        </div>
    </div>
    `).join('');

    $list.innerHTML = html; // não precisa de row/col, cards ficam um embaixo do outro
}

// Buscar produtos
async function getProducts() {
    showError('');
    showSpinner(true);
    btnLoad.disabled = true; // Desabilitar botão (UX)
    try {
        const res = await fetch(`${API}`);
        if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
        const data = await res.json();
        renderPost(data);
    } catch (err) {
        showError(err.message ?? 'Falha ao buscar dados');
    } finally {
        showSpinner(false);
        btnLoad.disabled = false; // Reabilitar botão
    }
}
