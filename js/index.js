let totalPrice;
function updateCart() {
    let price = document.getElementsByClassName("price");
    let quantity = document.getElementsByClassName("quantity");
    let p_total = document.getElementsByClassName("p-total");
    totalPrice = 0;
    for (let i = 0; i < quantity.length; i++) {
        let pTotal = (price[i].innerHTML * quantity[i].value);
        p_total[i].innerHTML = "$" + pTotal.toFixed(2);
        totalPrice += pTotal;
    }
    document.getElementById("subtotal").innerHTML = "$" + totalPrice.toFixed(2);
    document.getElementById("total").innerHTML = "$" + totalPrice.toFixed(2);
}

function checkout() {
    updateCart();
    let name = document.getElementsByClassName("p-name");
    let quantity = document.getElementsByClassName("quantity");
    let price = document.getElementsByClassName("p-total");
    let str = "";
    for (let i = 0; i < name.length; i++) {
        if (quantity[i].value != 0)
            str += `<tr><td>${name[i].innerHTML} x ${quantity[i].value}</td><td>${price[i].innerHTML}</td></tr>`;
    }
    str += `<tr class="fw-bold"><td>Cart Subtotal</td><td>$${totalPrice.toFixed(2)}</td></tr><tr class="fw-bold"><td>Order Total</td><td>$${totalPrice.toFixed(2)}</td></tr>`;
    window.localStorage.clear();
    localStorage.setItem("product", str);

}

function remove(id) {
    document.getElementsByClassName("input")[id.id].value = 0;
    id.parentElement.parentElement.style.display = "none";
}

function increament(id) {
    let element = id.previousElementSibling;
    element.value++;
}

function decreament(id) {
    let element = id.nextElementSibling;
    if (element.value > 0) {
        element.value--;
    }
}

setInterval(updateCart, 1);

