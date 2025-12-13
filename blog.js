// --- Lógica das Abas ---
function openTab(tabName) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove a classe ativa de todos os botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostra a aba selecionada
    document.getElementById('tab-' + tabName).classList.add('active');
    
    // Ativa o botão selecionado
    document.getElementById('btn-' + tabName).classList.add('active');
}

// --- Lógica da Loja (Carrinho) ---
let cartTotalDiamonds = 0;
let cartTotalPrice = 0.0;
const cartItemsContainer = document.getElementById('cart-items');

function addToCart(diamonds, price) {
    // Se o total for 0, significa que o carrinho estava vazio (ou com o texto placeholder)
    // Limpamos antes de adicionar o primeiro item
    if (cartTotalDiamonds === 0) {
        cartItemsContainer.innerHTML = '';
        cartItemsContainer.classList.remove('text-center', 'italic', 'text-gray-400');
    }

    cartTotalDiamonds += diamonds;
    cartTotalPrice += price;

    const itemDiv = document.createElement('div');
    // Melhorando o visual do item da lista
    itemDiv.className = 'cart-item flex justify-between items-center p-2 mb-2 bg-[#2a1b0e] border border-[#5d4037] rounded shadow-sm hover:bg-[#3e2723] transition-colors';
    
    itemDiv.innerHTML = `
        <div class="flex flex-col text-left">
            <span class="text-blue-300 font-bold text-sm">${diamonds.toLocaleString('pt-BR')} Dimas</span>
            <span class="text-[#ffd700] text-xs">R$ ${price.toFixed(2).replace('.', ',')}</span>
        </div>
        <button onclick="removeFromCart(this, ${diamonds}, ${price})" class="text-red-500 hover:text-red-300 p-2 rounded-full hover:bg-black/20 transition" title="Remover">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;
    cartItemsContainer.appendChild(itemDiv);
    
    // Rola para o fim da lista
    cartItemsContainer.scrollTop = cartItemsContainer.scrollHeight;
    
    updateDisplay();
}

function removeFromCart(button, diamonds, price) {
    // Remove o elemento visualmente
    button.closest('.cart-item').remove();
    
    // Atualiza os totais
    cartTotalDiamonds -= diamonds;
    cartTotalPrice -= price;
    
    // Evita problemas de precisão com float (ex: -0.000001)
    if (cartTotalPrice < 0) cartTotalPrice = 0;
    if (cartTotalDiamonds < 0) cartTotalDiamonds = 0;

    updateDisplay();

    // Se ficou vazio (total zerado), restaura a mensagem de "Carrinho vazio"
    if (cartTotalDiamonds === 0) {
        cartItemsContainer.innerHTML = 'Carrinho vazio';
        cartItemsContainer.classList.add('text-center', 'italic', 'text-gray-400');
    }
}

function updateDisplay() {
    document.getElementById('total-diamonds').innerText = cartTotalDiamonds.toLocaleString('pt-BR');
    document.getElementById('total-price').innerText = 'R$ ' + cartTotalPrice.toFixed(2).replace('.', ',');
}

// --- Lógica do Modal de Compra ---
function checkout() {
    if (cartTotalDiamonds === 0) {
        alert("Seu carrinho está vazio, marujo!");
        return;
    }
    const modal = document.getElementById('store-modal');
    modal.classList.remove('hidden');
}

function closeStoreModal() {
    const modal = document.getElementById('store-modal');
    modal.classList.add('hidden');
}

// --- Lógica para Alternar Imagens do Jogo 1 (World For Pirate Battle) ---
// Alterna entre img/1.png e img/2.png a cada 8 segundos
let currentPirateImg = 1;
function rotatePirateImages() {
    const imgElement = document.getElementById('pirate-game-img');
    if (imgElement) {
        currentPirateImg = (currentPirateImg === 1) ? 2 : 1;
        // Adiciona classe de fade para transição suave
        imgElement.classList.remove('fade-in-image');
        void imgElement.offsetWidth; // Trigger reflow para reiniciar animação
        imgElement.classList.add('fade-in-image');
        imgElement.src = `img/${currentPirateImg}.png`;
    }
}

// Inicia o intervalo da rotação de imagem (8s)
setInterval(rotatePirateImages, 8000);