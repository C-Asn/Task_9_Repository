const correctDoor = Math.floor(Math.random() * 3) + 1;


const wrongDoorImage = "scary.png"; 
const successDoorImage = "heaven.png"; 

function checkDoor(selectedDoor) {
    const resultMessage = document.getElementById("resultMessage");

    if (selectedDoor === correctDoor) {
        resultMessage.textContent = "🎉 Success! You chose the correct door!";
        resultMessage.classList.remove("text-danger");
        resultMessage.classList.add("text-success");

        showOverlay(successDoorImage); 
    } else {
        resultMessage.textContent = "❌ Wrong door!";
        resultMessage.classList.remove("text-success");
        resultMessage.classList.add("text-danger");

        showOverlay(wrongDoorImage); 
    }
}


function showOverlay(imagePath) {
    const overlay = document.getElementById("doorOverlay");
    const img = document.getElementById("doorImage");
    img.src = imagePath;
    overlay.style.display = "flex";
}


function hideOverlay() {
    document.getElementById("doorOverlay").style.display = "none";
}