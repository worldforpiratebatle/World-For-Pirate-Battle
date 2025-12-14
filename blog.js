// --- Lógica das Abas ---
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    
    const btn = document.getElementById('txt-tab-' + tabName) || document.getElementById('btn-' + tabName);
    if(btn) btn.classList.add('active');
}

// --- Lógica da Loja (Carrinho Inteligente) ---
// Agora armazenamos objetos { index: numero, diamonds: numero }
let cartItems = []; 

function selectItem(index, diamonds) {
    // Adiciona o item à lista (apenas referência, sem preço fixo)
    cartItems.push({ index: index, diamonds: diamonds });
    
    // Redesenha o carrinho com a moeda atual
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    
    // Se o carrinho estiver vazio
    if (cartItems.length === 0) {
        const currentLang = localStorage.getItem('wfpb_lang') || 'pt';
        // Pega texto traduzido ou padrão
        // Nota: translations está no outro arquivo, mas acessível globalmente
        let emptyText = 'Carrinho vazio';
        if (typeof translations !== 'undefined' && translations[currentLang]) {
            emptyText = translations[currentLang]['cart-empty'];
        }
        
        cartContainer.innerHTML = `<span id="txt-cart-empty">${emptyText}</span>`;
        cartContainer.classList.add('text-center', 'italic', 'text-gray-400');
        
        // Zera os totais na tela
        document.getElementById('total-diamonds').innerText = '0';
        document.getElementById('total-price').innerText = `${currentPriceConfig.currency} 0,00`;
        return;
    }

    // Se tiver itens, limpa e redesenha
    cartContainer.innerHTML = '';
    cartContainer.classList.remove('text-center', 'italic', 'text-gray-400');

    let totalDiamonds = 0;
    let totalPrice = 0;

    cartItems.forEach((item, cartIndex) => {
        // Pega o preço ATUAL baseado na configuração de moeda global
        const currentPrice = currentPriceConfig.values[item.index];
        
        totalDiamonds += item.diamonds;
        totalPrice += currentPrice;

        // Formatação do item
        let formattedPrice = currentPrice.toLocaleString(currentPriceConfig.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (currentPriceConfig.locale === 'zh-CN') formattedPrice = currentPrice.toFixed(2);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item flex justify-between items-center p-2 mb-2 bg-[#2a1b0e] border border-[#5d4037] rounded shadow-sm hover:bg-[#3e2723] transition-colors';
        
        itemDiv.innerHTML = `
            <div class="flex flex-col text-left">
                <span class="text-blue-300 font-bold text-sm">${item.diamonds.toLocaleString(currentPriceConfig.locale)} Dimas</span>
                <span class="text-[#ffd700] text-xs">${currentPriceConfig.currency} ${formattedPrice}</span>
            </div>
            <button onclick="removeCartItem(${cartIndex})" class="text-red-500 hover:text-red-300 p-2 rounded-full hover:bg-black/20 transition" title="Remover">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    // Atualiza Totais
    document.getElementById('total-diamonds').innerText = totalDiamonds.toLocaleString(currentPriceConfig.locale);
    
    let formattedTotal = totalPrice.toLocaleString(currentPriceConfig.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (currentPriceConfig.locale === 'zh-CN') formattedTotal = totalPrice.toFixed(2);
    
    document.getElementById('total-price').innerText = `${currentPriceConfig.currency} ${formattedTotal}`;
    
    // Rola para o fim
    cartContainer.scrollTop = cartContainer.scrollHeight;
}

function removeCartItem(indexToRemove) {
    // Remove o item pelo índice no array
    cartItems.splice(indexToRemove, 1);
    // Redesenha tudo
    renderCart();
}

// --- Lógica do Modal de Compra ---
function checkout() {
    if (cartItems.length === 0) {
        alert("Carrinho vazio!");
        return;
    }
    const modal = document.getElementById('store-modal');
    modal.classList.remove('hidden');
}

function closeStoreModal() {
    const modal = document.getElementById('store-modal');
    modal.classList.add('hidden');
}

// --- Rotação de Imagem ---
let currentPirateImg = 1;
function rotatePirateImages() {
    const imgElement = document.getElementById('pirate-game-img');
    if (imgElement) {
        currentPirateImg = (currentPirateImg === 1) ? 2 : 1;
        imgElement.classList.remove('fade-in-image');
        void imgElement.offsetWidth;
        imgElement.classList.add('fade-in-image');
        imgElement.src = `img/${currentPirateImg}.png`;
    }
}
setInterval(rotatePirateImages, 8000);