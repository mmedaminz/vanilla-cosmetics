cat > css/style.css <<'EOF'
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

:root {
    --olive: #59634a;
    --olive-dark: #3f4935;
    --olive-light: #788267;

    --beige: #f5f0e6;
    --cream: #faf8f2;

    --text: #30332c;
    --muted: #77796f;

    --white: #ffffff;
    --border: #e4dfd3;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream);
    color: var(--text);
    font-family: "Cairo", sans-serif;
}

button,
input,
textarea {
    font-family: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}


/* ================= HEADER ================= */

.header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;

    background: rgba(250,248,242,.95);

    backdrop-filter: blur(12px);

    border-bottom: 1px solid var(--border);

    z-index: 1000;
}

.logo {
    text-align: center;
    line-height: 1;
}

.logo span {
    display: block;

    font-family: "Playfair Display", serif;

    font-size: 27px;

    color: var(--olive-dark);
}

.logo small {
    display: block;

    margin-top: 4px;

    font-family: "Playfair Display", serif;

    font-size: 11px;

    letter-spacing: 3px;

    color: var(--olive-light);
}

.menu-btn,
.cart-btn {
    width: 44px;
    height: 44px;

    border: 0;

    border-radius: 50%;

    background: var(--beige);

    color: var(--olive-dark);

    font-size: 18px;

    position: relative;
}

.cart-btn span {
    position: absolute;

    top: -4px;
    right: -4px;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background: var(--olive-dark);

    color: white;

    font-size: 11px;

    display: flex;
    align-items: center;
    justify-content: center;
}


/* ================= SIDE MENU ================= */

.overlay,
.cart-overlay {
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,.35);

    opacity: 0;
    visibility: hidden;

    transition: .3s;

    z-index: 1500;
}

.overlay.active,
.cart-overlay.active {
    opacity: 1;
    visibility: visible;
}

.side-menu {
    position: fixed;

    top: 0;
    right: -330px;

    width: 310px;
    height: 100vh;

    padding: 90px 30px 30px;

    background: var(--olive-dark);

    color: white;

    z-index: 2000;

    transition: .35s;

    border-radius: 0 0 0 30px;
}

.side-menu.active {
    right: 0;
}

.close-menu {
    position: absolute;

    top: 24px;
    left: 24px;

    width: 42px;
    height: 42px;

    border: 1px solid rgba(255,255,255,.25);

    border-radius: 50%;

    background: transparent;

    color: white;

    font-size: 20px;
}

.side-logo {
    font-family: "Playfair Display", serif;

    font-size: 27px;

    margin-bottom: 50px;
}

.side-menu nav {
    display: flex;
    flex-direction: column;

    gap: 25px;
}

.side-menu nav a {
    padding-bottom: 15px;

    border-bottom: 1px solid rgba(255,255,255,.15);

    transition: .2s;
}

.side-menu nav a:hover {
    padding-right: 8px;
}


/* ================= HERO ================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 120px 25px 70px;

    text-align: center;

    background:
        radial-gradient(circle at 20% 20%, rgba(89,99,74,.12), transparent 35%),
        radial-gradient(circle at 80% 80%, rgba(214,205,184,.4), transparent 35%),
        var(--cream);
}

.hero-content {
    max-width: 650px;
}

.eyebrow {
    color: var(--olive-light);

    font-size: 11px;

    letter-spacing: 4px;

    margin-bottom: 20px;
}

.hero h1 {
    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 15vw, 105px);

    line-height: .85;

    color: var(--olive-dark);
}

.hero h1 span {
    font-style: italic;

    font-size: .55em;

    color: var(--olive-light);
}

.hero-text {
    max-width: 500px;

    margin: 35px auto;

    color: var(--muted);

    line-height: 2;
}

.main-btn {
    display: inline-flex;

    align-items: center;
    gap: 12px;

    padding: 15px 28px;

    border-radius: 30px;

    background: var(--olive-dark);

    color: white;

    transition: .3s;
}

.main-btn:hover {
    transform: translateY(-3px);

    background: var(--olive);
}


/* ================= SECTIONS ================= */

.products-section,
.order-section {
    padding: 100px 20px;
}

.section-heading {
    max-width: 650px;

    margin: 0 auto 55px;

    text-align: center;
}

.section-heading span,
.contact-section > span {
    font-size: 10px;

    letter-spacing: 4px;

    color: var(--olive-light);
}

.section-heading h2,
.contact-section h2 {
    font-family: "Playfair Display", serif;

    font-size: 42px;

    color: var(--olive-dark);

    margin: 10px 0;
}

.section-heading p {
    color: var(--muted);
}


/* ================= PRODUCTS ================= */

.products-container {
    max-width: 600px;

    margin: auto;

    display: flex;

    flex-direction: column;

    gap: 25px;
}

.product-card {
    background: var(--white);

    border: 1px solid var(--border);

    border-radius: 24px;

    overflow: hidden;

    box-shadow: 0 10px 30px rgba(50,50,40,.05);
}

.product-image {
    width: 100%;

    aspect-ratio: 1 / 1;

    background: var(--beige);

    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;
}

.product-info {
    padding: 25px;
}

.product-category {
    font-size: 9px;

    letter-spacing: 2px;

    color: var(--olive-light);
}

.product-info h3 {
    margin: 8px 0;

    font-size: 21px;
}

.product-info p {
    color: var(--muted);

    font-size: 13px;

    line-height: 1.9;

    margin-bottom: 20px;
}

.product-bottom {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;
}

.product-bottom strong {
    color: var(--olive-dark);

    white-space: nowrap;

    font-size: 20px;
}

.product-bottom small {
    font-size: 11px;
}

.add-cart {
    border: 0;

    border-radius: 25px;

    padding: 11px 15px;

    background: var(--olive-dark);

    color: white;

    font-size: 12px;
}

.add-cart i {
    margin-right: 5px;
}


/* ================= ORDER ================= */

.order-section {
    background: var(--beige);
}

.order-box {
    max-width: 600px;

    margin: auto;

    background: white;

    padding: 30px;

    border-radius: 25px;

    border: 1px solid var(--border);
}

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;

    margin-bottom: 7px;

    font-size: 13px;

    font-weight: 600;
}

input,
textarea {
    width: 100%;

    border: 1px solid var(--border);

    background: var(--cream);

    border-radius: 12px;

    padding: 14px;

    outline: none;

    color: var(--text);

    font-size: 14px;
}

input:focus,
textarea:focus {
    border-color: var(--olive);
}

textarea {
    height: 100px;

    resize: vertical;
}

.form-row {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;
}

.order-summary {
    margin: 25px 0;

    padding: 18px;

    border-radius: 15px;

    background: var(--cream);
}

.order-summary > div {
    display: flex;

    justify-content: space-between;

    margin-bottom: 8px;

    color: var(--muted);
}

.order-summary .total-line {
    margin: 0;

    padding-top: 12px;

    border-top: 1px solid var(--border);

    color: var(--text);

    font-size: 17px;
}

.confirm-order {
    width: 100%;

    border: 0;

    padding: 16px;

    border-radius: 30px;

    background: #59634a;

    color: white;

    font-size: 15px;
}

.confirm-order i {
    margin-right: 7px;

    font-size: 19px;
}


/* ================= CONTACT ================= */

.contact-section {
    padding: 100px 25px;

    text-align: center;

    background: var(--olive-dark);

    color: white;
}

.contact-section h2 {
    color: white;
}

.contact-section p {
    max-width: 500px;

    margin: 20px auto 30px;

    line-height: 2;

    color: rgba(255,255,255,.7);
}

.contact-whatsapp {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding: 14px 25px;

    border-radius: 30px;

    background: white;

    color: var(--olive-dark);
}


/* ================= CART ================= */

.cart-panel {
    position: fixed;

    top: 0;
    right: -420px;

    width: min(400px, 92vw);

    height: 100vh;

    background: white;

    z-index: 2100;

    transition: .35s;

    display: flex;

    flex-direction: column;
}

.cart-panel.active {
    right: 0;
}

.cart-header {
    padding: 22px;

    border-bottom: 1px solid var(--border);

    display: flex;

    align-items: center;

    justify-content: space-between;
}

.cart-header h2 {
    font-size: 20px;
}

.cart-header button {
    width: 40px;
    height: 40px;

    border: 0;

    border-radius: 50%;

    background: var(--beige);

    color: var(--olive-dark);
}

.cart-items {
    flex: 1;

    overflow-y: auto;

    padding: 20px;
}

.empty-cart {
    min-height: 250px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    gap: 15px;

    color: var(--muted);
}

.empty-cart i {
    font-size: 40px;

    color: var(--olive-light);
}

.cart-item {
    display: flex;

    align-items: center;

    gap: 12px;

    padding: 15px 0;

    border-bottom: 1px solid var(--border);
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    font-size: 14px;

    margin-bottom: 5px;
}

.cart-item-price {
    font-size: 13px;

    color: var(--olive-dark);
}

.quantity {
    display: flex;

    align-items: center;

    gap: 8px;

    margin-top: 8px;
}

.quantity button {
    width: 27px;
    height: 27px;

    border: 1px solid var(--border);

    background: var(--cream);

    border-radius: 50%;
}

.remove-item {
    border: 0;

    background: transparent;

    color: #a55;

    font-size: 15px;
}

.cart-footer {
    padding: 20px;

    border-top: 1px solid var(--border);
}

.cart-total {
    display: flex;

    justify-content: space-between;

    margin-bottom: 15px;

    font-size: 17px;
}

.cart-total strong {
    color: var(--olive-dark);
}

.checkout-btn {
    width: 100%;

    border: 0;

    padding: 15px;

    border-radius: 30px;

    background: var(--olive-dark);

    color: white;
}


/* ================= WHATSAPP ================= */

.whatsapp-float {
    position: fixed;

    bottom: 22px;
    right: 20px;

    width: 58px;
    height: 58px;

    border-radius: 50%;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #25D366;

    color: white;

    font-size: 32px;

    box-shadow: 0 6px 20px rgba(0,0,0,.2);

    z-index: 1200;

    transition: .3s;
}

.whatsapp-float:hover {
    transform: scale(1.08);
}


/* ================= TOAST ================= */

.toast {
    position: fixed;

    bottom: 95px;
    right: 20px;

    background: var(--olive-dark);

    color: white;

    padding: 13px 20px;

    border-radius: 30px;

    font-size: 13px;

    opacity: 0;

    visibility: hidden;

    transform: translateY(15px);

    transition: .3s;

    z-index: 3000;
}

.toast.show {
    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}


/* ================= MOBILE ================= */

@media (max-width: 600px) {

    .header {
        height: 68px;

        padding: 0 16px;
    }

    .logo span {
        font-size: 23px;
    }

    .hero {
        padding-top: 100px;
    }

    .hero h1 {
        font-size: 68px;
    }

    .section-heading h2 {
        font-size: 35px;
    }

    .products-section,
    .order-section {
        padding: 75px 16px;
    }

    .product-info {
        padding: 20px;
    }

    .product-bottom {
        align-items: flex-end;
    }

    .add-cart {
        padding: 10px 12px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .order-box {
        padding: 22px;
    }

}
EOF
