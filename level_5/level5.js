let coins = 0;

function increaseCoin(btn) {
    coins++;
    document.getElementById("coinCount").textContent = "Coins: " + coins;
    
    popCoin(btn);

}

function decreaseCoin() {
    if (coins > 0) {
        coins--;
        
    }
    document.getElementById("coinCount").textContent = "Coins: " + coins;
}

function popCoin(btn) {
    const coinEl = document.createElement("div");
    coinEl.className = "coin";
    const img = document.createElement("img");
    img.src = "image.png";
    img.alt = "Coin";
    img.style.width = "30px";
    img.style.height = "30px";
    coinEl.appendChild(img);

    const rect = btn.getBoundingClientRect();

    coinEl.style.left = rect.left + window.scrollX + rect.width / 2 + "px";
    coinEl.style.top = rect.top + window.scrollY + "px";

    document.body.appendChild(coinEl);

    setTimeout(() => coinEl.remove(), 800);

}

