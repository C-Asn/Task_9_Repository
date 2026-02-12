function validateName() {
    const name = document.getElementById('nameField').value.trim();
    const msg = document.getElementById("resultMessage");

    if (name === "") {
        msg.textContent = "❌ You have to enter a name to proceed.";
        msg.className = "text-success";
                
    }else {
        msg.textContent = "✅ Welcome, " + name + "!" ;
        msg.className = "text-success fw-semibold";
    }
}
    
