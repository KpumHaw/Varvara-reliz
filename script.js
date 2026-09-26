let cart = [];

function addToCart(name, price) {
    cart.push([name, price]);

    document.getElementById("cartItems").innerHTML = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        document.getElementById("cartItems").innerHTML +=
            "<p>" +
            cart[i][0] +
            " — " +
            cart[i][1] +
            " грн " +
            "<button onclick='removeFromCart(" + i + ")'>Видалити</button>" +
            "</p>";

        total += cart[i][1];
    }

    document.getElementById("total").innerHTML = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);

    document.getElementById("cartItems").innerHTML = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        document.getElementById("cartItems").innerHTML +=
            "<p>" +
            cart[i][0] +
            " — " +
            cart[i][1] +
            " грн " +
            "<button onclick='removeFromCart(" + i + ")'>Видалити</button>" +
            "</p>";

        total += cart[i][1];
    }

    document.getElementById("total").innerHTML = total;

    if (cart.length === 0) {
        document.getElementById("cartItems").innerHTML = "Кошик порожній";
    }
}
