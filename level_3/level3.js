document.addEventListener("DOMContentLoaded", function () {
let level = 1;
const maxLevel = 6;

const badge = document.querySelector(".badge");
const text = document.getElementById("levelText");
const button = document.getElementById("buttonlevelUp");

button.addEventListener("click", function () {
    if (level < maxLevel) {
        level++;

        badge.textContent = "level " +   level;
        text.textContent = "Current Level: " + level + ".Click to level up!";

        showCoin();

    } else {
        text.textContent = "You have reached the maximum level! tama na please.";

    }
});

function showCoin() {
    const coin = document.createElement("div");
    coin.className = "coin";
    const img = document.createElement("img");
    img.src = "exp.png";
    img.alt = "Coin";
    img.style.width = "30px";
    img.style.height = "30px";
    coin.appendChild(img);  

    const rect = button.getBoundingClientRect();
    coin.style.left = rect.left + rect.width / 2 + "px";
    coin.style.top = rect.top + "px"; 

    document.body.appendChild(coin);
    setTimeout(() => coin.remove(), 800);


    }
});
    