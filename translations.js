// Configuração de Preços Simplificada
const pricingData = {
    'pt': { 
        currency: 'R$', 
        values: [2.90, 7.90, 14.90, 38.90, 57.90, 119.90],
        locale: 'pt-BR'
    },
    'en': { 
        currency: '$', 
        values: [1.31, 3.34, 6.49, 16.75, 33.52, 66.03],
        locale: 'en-US'
    },
    'es': { 
        currency: '$', 
        values: [1.31, 3.34, 6.49, 16.75, 33.52, 66.03],
        locale: 'en-US'
    },
    'zh': { 
        currency: '¥', 
        values: [5.08, 14.19, 27.20, 68.86, 143.05, 286.23],
        locale: 'zh-CN'
    }
};

const translations = {
    'pt': {
        // --- Index / Login ---
        'login-btn': 'Login',
        'forgot-pass': 'Esqueceu a senha?',
        'players-online': 'Jogadores Online:',
        'subtitle': 'Conquiste os Sete Mares ou Morra Tentando',
        'trailer-label': 'Trailer',
        'register-header': 'Registrar',
        'label-name': 'Nome de Pirata',
        'label-pass': 'Senha Secreta',
        'label-email': 'Email',
        'check-terms': 'Li e aceito os Termos e Condições e a Declaração de Proteção de Dados.',
        'check-news': 'Quero receber notícias sobre tesouros e atualizações.',
        'btn-play-main': 'Jogue Agora',
        'btn-play-sub': 'Grátis para sempre!',
        'screenshots-label': 'Screenshots',
        'mobile-trailer': 'Trailer',
        'mobile-photos': 'Fotos',
        'nav-home': 'Início',
        'nav-forum': 'Fórum',
        'nav-blog': 'Blog & Loja',
        'nav-videos': 'Vídeos',
        'footer-tcs': 'T&Cs',
        'footer-privacy': 'Política de Privacidade',
        'footer-support': 'Suporte',
        'footer-forum': 'Fórum',
        'footer-rights': '© 2026 World For Pirate Battle. Todos os direitos reservados.',
        'footer-demo': 'Este site é provisório até o lançamento do Beta do jogo World For Pirate Battle 2026.',
        'placeholder-user': 'Usuário',
        'placeholder-pass': '••••••',
        'placeholder-pirate': 'Ex: Barba Ruiva',
        'placeholder-secret': '********',
        'placeholder-email': 'seu@email.com',
        'modal-title': 'Em Construção',
        'modal-msg': 'O registro e login estará disponível em breve, marujo! Nosso mundo ainda está em construção. Para acompanhar cada novidade do desenvolvimento, embarque no nosso Discord.',
        'modal-discord-btn': 'Embarcar no Discord',
        'modal-close': 'Fechar',

        // --- Blog & Loja ---
        'blog-title': 'Blog & Loja - World For Pirate Battle',
        'btn-back-game': 'Voltar para o Jogo',
        'tab-dev': 'Sobre o Desenvolvedor',
        'tab-games': 'Nossos Jogos',
        'tab-store': 'Loja de Diamantes',
        'dev-title': 'Sobre o Desenvolvedor',
        'dev-desc-1': 'O jogo está sendo feito pelo Desenvolvedor <strong>Endryw Fernandes Cardoso</strong>, Brasileiro, um projeto independente que ama jogos de RPG de navegação e irá criar alguns jogos do mesmo ramo.',
        'dev-desc-2': 'Nossa jornada começou agora, mas nossa visão é de longo prazo. Estamos dedicados a criar universos imersivos onde os jogadores não apenas jogam, mas vivem suas próprias lendas.',
        'dev-desc-3': 'Nosso compromisso é com a qualidade e com a comunidade. Cada linha de código é escrita pensando na diversão e no desafio que proporcionaremos aos nossos marujos digitais.',
        'dev-discord-btn': 'Fale Conosco no Discord',
        'game1-title': 'World For Pirate Battle',
        'game1-desc': 'Este jogo está atualmente em desenvolvimento. O lançamento da versão Beta está programado para 2026 ou 2027. Monte sua tripulação e prepare-se para dominar os mares!',
        'game1-btn': 'Ver Página do Jogo',
        'game2-title': 'Novos Universos',
        'game2-desc': 'Em breve traremos outros games também. O desenvolvedor está trabalhando duro para expandir seus horizontes.',
        'game2-btn': 'Aguarde...',
        'store-packs-title': 'Pacotes de Diamantes',
        'cart-title': 'Lista de Compras',
        'cart-empty': 'Carrinho vazio',
        'cart-total-d': 'Total Diamantes:',
        'cart-total-p': 'Total a Pagar:',
        'cart-checkout': 'Comprar',
        'modal-store-title': 'Comércio Fechado',
        'modal-store-msg': 'As compras na loja estão indisponíveis por enquanto, marujo. Em breve o comércio estará ativo! Jogo em Desenvolvimento.',
        'modal-store-btn': 'Entendido'
    },
    'en': {
        // --- Index / Login ---
        'login-btn': 'Login',
        'forgot-pass': 'Forgot password?',
        'players-online': 'Players Online:',
        'subtitle': 'Conquer the Seven Seas or Die Trying',
        'trailer-label': 'Trailer',
        'register-header': 'Register',
        'label-name': 'Pirate Name',
        'label-pass': 'Secret Password',
        'label-email': 'Email',
        'check-terms': 'I have read and accept the Terms & Conditions and Data Protection Declaration.',
        'check-news': 'I want to receive news about treasures and updates.',
        'btn-play-main': 'Play Now',
        'btn-play-sub': 'Free forever!',
        'screenshots-label': 'Screenshots',
        'mobile-trailer': 'Trailer',
        'mobile-photos': 'Photos',
        'nav-home': 'Home',
        'nav-forum': 'Forum',
        'nav-blog': 'Blog & Store',
        'nav-videos': 'Videos',
        'footer-tcs': 'T&Cs',
        'footer-privacy': 'Privacy Policy',
        'footer-support': 'Support',
        'footer-forum': 'Forum',
        'footer-rights': '© 2026 World For Pirate Battle. All rights reserved.',
        'footer-demo': 'This site is provisional until the Beta launch of World For Pirate Battle 2026.',
        'placeholder-user': 'Username',
        'placeholder-pass': '••••••',
        'placeholder-pirate': 'Ex: Redbeard',
        'placeholder-secret': '********',
        'placeholder-email': 'your@email.com',
        'modal-title': 'Under Construction',
        'modal-msg': 'Registration and login will be available soon, matey! Our world is still under construction. To keep up with every development update, set sail for our Discord.',
        'modal-discord-btn': 'Sail to Discord',
        'modal-close': 'Close',

        // --- Blog & Store ---
        'blog-title': 'Blog & Store - World For Pirate Battle',
        'btn-back-game': 'Back to Game',
        'tab-dev': 'About the Developer',
        'tab-games': 'Our Games',
        'tab-store': 'Diamond Store',
        'dev-title': 'About the Developer',
        'dev-desc-1': 'The game is being made by Developer <strong>Endryw Fernandes Cardoso</strong>, Brazilian.',
        'dev-desc-2': 'We are dedicated to creating immersive universes.',
        'dev-desc-3': 'Our commitment is to quality.',
        'dev-discord-btn': 'Talk to us on Discord',
        'game1-title': 'World For Pirate Battle',
        'game1-desc': 'This game is currently in development. Beta 2026/27.',
        'game1-btn': 'View Game Page',
        'game2-title': 'New Universes',
        'game2-desc': 'We will bring other games soon too.',
        'game2-btn': 'Wait...',
        'store-packs-title': 'Diamond Packs',
        'cart-title': 'Shopping List',
        'cart-empty': 'Empty cart',
        'cart-total-d': 'Total Diamonds:',
        'cart-total-p': 'Total to Pay:',
        'cart-checkout': 'Checkout',
        'modal-store-title': 'Store Closed',
        'modal-store-msg': 'Store purchases are unavailable for now.',
        'modal-store-btn': 'Understood'
    },
    'es': {
        // --- Index / Login ---
        'login-btn': 'Entrar',
        'forgot-pass': '¿Olvidaste tu contraseña?',
        'players-online': 'Jugadores en línea:',
        'subtitle': 'Conquista los Siete Mares o Muere en el Intento',
        'trailer-label': 'Tráiler',
        'register-header': 'Registrarse',
        'label-name': 'Nombre Pirata',
        'label-pass': 'Contraseña Secreta',
        'label-email': 'Correo',
        'check-terms': 'He leído y acepto los T&C y la Declaración de Protección de Datos.',
        'check-news': 'Quiero recibir noticias sobre tesoros y actualizaciones.',
        'btn-play-main': 'Juega Ahora',
        'btn-play-sub': '¡Gratis para siempre!',
        'screenshots-label': 'Capturas',
        'mobile-trailer': 'Tráiler',
        'mobile-photos': 'Fotos',
        'nav-home': 'Inicio',
        'nav-forum': 'Foro',
        'nav-blog': 'Blog y Tienda',
        'nav-videos': 'Videos',
        'footer-tcs': 'T&Cs',
        'footer-privacy': 'Política de Privacidad',
        'footer-support': 'Soporte',
        'footer-forum': 'Foro',
        'footer-rights': '© 2026 World For Pirate Battle. Todos los derechos reservados.',
        'footer-demo': 'Este sitio es provisional hasta el lanzamiento Beta de World For Pirate Battle 2026.',
        'placeholder-user': 'Usuario',
        'placeholder-pass': '••••••',
        'placeholder-pirate': 'Ej: Barbanegra',
        'placeholder-secret': '********',
        'placeholder-email': 'tu@correo.com',
        'modal-title': 'En Construcción',
        'modal-msg': '¡El registro y el inicio de sesión estarán disponibles pronto, marinero! Nuestro mundo aún está en construcción. Para seguir las novedades, embárcate en nuestro Discord.',
        'modal-discord-btn': 'Embarcar en Discord',
        'modal-close': 'Cerrar',

        // --- Blog & Store ---
        'blog-title': 'Blog y Tienda - World For Pirate Battle',
        'btn-back-game': 'Volver al Juego',
        'tab-dev': 'Sobre el Desarrollador',
        'tab-games': 'Nuestros Juegos',
        'tab-store': 'Tienda de Diamantes',
        'dev-title': 'Sobre el Desarrollador',
        'dev-desc-1': 'El juego está siendo realizado por el Desarrollador <strong>Endryw Fernandes Cardoso</strong>, Brasileño.',
        'dev-desc-2': 'Creando universos inmersivos.',
        'dev-desc-3': 'Compromiso con la calidad.',
        'dev-discord-btn': 'Discord',
        'game1-title': 'World For Pirate Battle',
        'game1-desc': 'En desarrollo. Beta 2026/27.',
        'game1-btn': 'Ver Juego',
        'game2-title': 'Nuevos Universos',
        'game2-desc': 'Pronto.',
        'game2-btn': 'Espere...',
        'store-packs-title': 'Paquetes de Diamantes',
        'cart-title': 'Lista de Compras',
        'cart-empty': 'Vacío',
        'cart-total-d': 'Total Diamantes:',
        'cart-total-p': 'Total:',
        'cart-checkout': 'Comprar',
        'modal-store-title': 'Comercio Cerrado',
        'modal-store-msg': 'Compras no disponibles.',
        'modal-store-btn': 'OK'
    },
    'zh': {
        // --- Index / Login ---
        'login-btn': '登录',
        'forgot-pass': '忘记密码?',
        'players-online': '在线玩家:',
        'subtitle': '征服七海，誓死方休',
        'trailer-label': '预告片',
        'register-header': '注册',
        'label-name': '海盗名字',
        'label-pass': '秘密密码',
        'label-email': '电子邮件',
        'check-terms': '我已阅读并接受条款和条件以及数据保护声明。',
        'check-news': '我想接收有关宝藏和更新的新闻。',
        'btn-play-main': '立即开始',
        'btn-play-sub': '永久免费!',
        'screenshots-label': '游戏截图',
        'mobile-trailer': '预告片',
        'mobile-photos': '照片',
        'nav-home': '首页',
        'nav-forum': '论坛',
        'nav-blog': '博客与商店',
        'nav-videos': '视频',
        'footer-tcs': '条款',
        'footer-privacy': '隐私政策',
        'footer-support': '支持',
        'footer-forum': '论坛',
        'footer-rights': '© 2026 World For Pirate Battle. 版权所有。',
        'footer-demo': '本网站为 World For Pirate Battle 2026 Beta 发布前的临时网站。',
        'placeholder-user': '用户名',
        'placeholder-pass': '••••••',
        'placeholder-pirate': '例如：红胡子',
        'placeholder-secret': '********',
        'placeholder-email': 'your@email.com',
        'modal-title': '建设中',
        'modal-msg': '注册和登录即将开放，水手！我们的世界仍在建设中。欲了解最新开发动态，请登上我们的 Discord。',
        'modal-discord-btn': '加入 Discord',
        'modal-close': '关闭',

        // --- Blog & Store ---
        'blog-title': '博客与商店 - World For Pirate Battle',
        'btn-back-game': '返回游戏',
        'tab-dev': '关于开发者',
        'tab-games': '我们的游戏',
        'tab-store': '钻石商店',
        'dev-title': '关于开发者',
        'dev-desc-1': '该游戏由巴西开发者 <strong>Endryw Fernandes Cardoso</strong> 制作。',
        'dev-desc-2': '致力于创造身临其境的宇宙。',
        'dev-desc-3': '我们的承诺是对质量负责。',
        'dev-discord-btn': 'Discord',
        'game1-title': 'World For Pirate Battle',
        'game1-desc': '开发中。Beta 2026/27。',
        'game1-btn': '查看游戏',
        'game2-title': '新宇宙',
        'game2-desc': '敬请期待。',
        'game2-btn': '等待...',
        'store-packs-title': '钻石包',
        'cart-title': '购物清单',
        'cart-empty': '空',
        'cart-total-d': '钻石总数:',
        'cart-total-p': '总计:',
        'cart-checkout': '结账',
        'modal-store-title': '商店关闭',
        'modal-store-msg': '暂时不可用。',
        'modal-store-btn': '明白'
    }
};

// Variável global para armazenar a moeda atual e preços
let currentPriceConfig = pricingData['pt'];

function changeLanguage(lang) {
    localStorage.setItem('wfpb_lang', lang);

    const langSelect = document.querySelector('select');
    if (langSelect) {
        langSelect.value = lang;
    }

    const texts = translations[lang] || translations['pt'];
    for (const key in texts) {
        const element = document.getElementById('txt-' + key);
        if (element) {
            if (texts[key].includes('<')) element.innerHTML = texts[key];
            else element.innerText = texts[key];
        }
    }

    // Atualiza Placeholders (Index)
    const inpUser = document.getElementById('inp-user');
    if(inpUser && texts['placeholder-user']) inpUser.placeholder = texts['placeholder-user'];
    
    const inpPass = document.getElementById('inp-pass');
    if(inpPass && texts['placeholder-pass']) inpPass.placeholder = texts['placeholder-pass'];
    
    const inpPirate = document.getElementById('inp-pirate');
    if(inpPirate && texts['placeholder-pirate']) inpPirate.placeholder = texts['placeholder-pirate'];
    
    const inpSecret = document.getElementById('inp-secret');
    if(inpSecret && texts['placeholder-secret']) inpSecret.placeholder = texts['placeholder-secret'];
    
    const inpEmail = document.getElementById('inp-email');
    if(inpEmail && texts['placeholder-email']) inpEmail.placeholder = texts['placeholder-email'];

    // Atualiza lógica de preços
    currentPriceConfig = pricingData[lang] || pricingData['pt'];
    
    // Atualiza preços na vitrine da Loja
    const priceTags = document.querySelectorAll('.price-tag');
    if (priceTags.length > 0) {
        priceTags.forEach((tag, index) => {
            const val = currentPriceConfig.values[index];
            const symbol = currentPriceConfig.currency;
            
            let formattedVal;
            if (lang === 'zh') {
                formattedVal = val.toFixed(2);
            } else {
                formattedVal = val.toLocaleString(currentPriceConfig.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }

            tag.innerText = `${symbol} ${formattedVal}`;
        });
    }

    // AVISO AO CARRINHO PARA RECALCULAR O TOTAL NA NOVA MOEDA
    // Verifica se a função renderCart existe (ela só existe no blog.js, não no index)
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('wfpb_lang') || 'pt';
    changeLanguage(savedLang);
});