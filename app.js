let menuBtn = document.querySelector('#menu-btn');
let menu = document.querySelector('#navbar');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})



let total = 0;
const itemList = document.getElementById('itemList');
const totalElement = document.getElementById('total');

function addToCart(product, price) {
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
        <span>${product}</span>
        <span>$${price.toFixed(2)}</span>
        <button class="remove-btn" onclick="removeFromCart(this, ${price})"><i class="fa-solid fa-x"></i></button>
    `;
    itemList.appendChild(item);

    total += price;
    totalElement.textContent = total.toFixed(2);
}

function removeFromCart(element, price) {
    const item = element.parentElement;
    itemList.removeChild(item);

    total -= price;
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert('Ödeme işlemi henüz uygulanmadı.');
}   