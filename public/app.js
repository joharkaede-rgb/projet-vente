/Frontend JS - gestion produits, panier,
estimation livraison et checkout mock /
Const apiBase = ";
let products = [1;
let cart = [);
|| Elements
Const productsEl =
document.getElementByld ('products');
const cartCountEl =
document.getElementByld ('cart-count');
const viewCartBtn =
document.getElementByld('view-cart-bt
n);
const cartModal =
document.getElementByld('cart-modal');
const closeCartBtn =
document.getElementByld ('close-cart');
const cartltemsEl =
document.getElementByld ('cart-items');
Const subtotalEl =
document.getElementByld ('subtotal');
const summaryDeliveryEI =
document.getElementByld('summary-de
livery');
const summaryTotalEl =
document.getElementByld ('summary-tot
al);
const checkoutBtn =
document.getElementByld('checkout-bt
n');
const checkout ResultEl =
document.getElenmentByld (checkout-re
sult');
const inputDistance =
document.getElementByld('input-distan
ce');
const inputWeight =
document.getElementByld('input-weight
);
const inputExpress =
document.getElementByld ('input-expres
s);
const calcDeliveryBtn =
document.getElementByld ('calc-delivery
);
const deliveryResultEl =
document.getElementByld('delivery-res
ult');
const checkoutDistance =
document.getElementByld ('checkout-di
stance');
const checkoutWeight =document.getElementByld('checkout-we
ight');
const checkoutExpress =
document.getElementByld('checkout-ex
press');
async function fetchProducts (){
const res = await fetch(apiBase + '/api/
products');
products = await res.json();
renderProducts(0:
function renderProducts () {
productsEl.innerHTML =";
products.forEach (p →{
Const card =
document.createElement('div');
card.className = 'card';
card.innerHTML =
<img src="${p.image}"
alt="${p.title}">
<h4>${p.title) </h4>
<p>${p.description}< /p>
<div><strong>$
{p.price.toLocaleString('fr-FR')
} Ar</strong></div>
  <div
style="margin-top:.5rem;">
<button class="btn
add-btn" data-id="$
{p.id}">Ajouter au panier</
button>
</div>
productsEl.appendChild(card);
});
document.querySelectorAll('.add-btn').fo
rEach(bb.addEventListener('click', (e)
} =
const id = e.target.dataset.id;
addToCart(id);
}));
}
function addToCart(id){
const prod = products.find(p ⇒ p.id
=== id);
if(!prod) return;
const existing = cart.find(i ⇒ i.id ===
id);
if(existing) existing.quantity += 1;
else cart.push({ id: prod.id, title:
