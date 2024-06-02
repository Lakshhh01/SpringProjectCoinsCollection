var coins = [];
var coin = {
    denomination: '',
    coinName: '',
    coinQuantity: '',
    coinValue: '',
    coinCountry: ''
}


//GET COINS


function getCoins() {
    fetch("http://localhost:8083/coins")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        coins = data;
        mapCoinsToCard();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}


//MAP TO CARDS


function mapCoinsToCard() {
    var cards = `<div class="row">`;

    for (let i = 0; i < coins.length; i++) {
        cards += `<div class="card col-3 m-2">
        
            <div class="card-body">
                <h4 class="card-title mb-3">Name: ${coins[i].coinName}</h4>
                <h6 class="card-subtitle mb-2"> Quantity: ${coins[i].coinQuantity}</h6>
                <p class="card-subtitle">Country: ${coins[i].coinCountry}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">OgValue: ${coins[i].coinValue}</li>
            </ul>
            </div>`;
            // <i class="bi bi-trash text-danger delete-icon" onclick="deleteCoin('${coins[i].denomination}')"></i>
        }
        
    cards += `</div>`;
    document.getElementById("coinCards").innerHTML = cards;  
}

//ADD


function addCoin(){
    coin.denomination = document.getElementById("denominationAdd").value;
    coin.coinName = document.getElementById("name").value;
    coin.coinCountry = document.getElementById("country").value;
    coin.coinQuantity = document.getElementById("quantity").value;
    coin.coinValue = document.getElementById("value").value; 

    console.log(coin);

    fetch("http://localhost:8083/coins", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },body: JSON.stringify(coin)
    })
    .then(response => response.json())
    .then(data => {
        getCoins(); 
    })
}


//DELETE

function deleteCoin(denomination){
    fetch(`http://localhost:8083/coins/${denomination}`,
    {

    method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
        // return response.text();
    })
    .then(data => {
        getCoins();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

// Update Coin//
/*
function handleSelection() {
    var dropdown = document.getElementById("dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var inputField = document.getElementById("updateInputField");
    var label = document.getElementById("updateInputLabel");

    if (selectedOption === "option1") {
        label.innerText = "Enter new name:";
    } else if (selectedOption === "option2") {
        label.innerText = "Enter new country:";
    } else if (selectedOption === "option3") {
        label.innerText = "Enter new quantity:";
    } else if (selectedOption === "option4") {
        label.innerText = "Enter new value:";
    }

    inputField.style.display = "block";
}

function updateCoin() {
    var dropdown = document.getElementById("dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var updatedValue = document.getElementById("updateValue").value;
    var denomination = document.getElementById('updatedenomination').value;
    var updateData = {};

    if (selectedOption === "option1") {
        updateData.coinName = updatedValue;
    } else if (selectedOption === "option2") {
        updateData.coinCountry = updatedValue;
    } else if (selectedOption === "option3") {
        updateData.coinQuantity = updatedValue;
    } else if (selectedOption === "option4") {
        updateData.coinValue = updatedValue;
    }

    fetch(`http://localhost:8083/coins/updateCoin/${denomination}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        getCoins();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

*/
// Update Coin

function handleSelection() {
    var dropdown = document.getElementById("dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var inputField = document.getElementById("updateInputField");
    var label = document.getElementById("updateInputLabel");

    if (selectedOption === "option1") {
        label.innerText = "Enter new name:";
    } else if (selectedOption === "option2") {
        label.innerText = "Enter new country:";
    } else if (selectedOption === "option3") {
        label.innerText = "Enter new quantity:";
    } else if (selectedOption === "option4") {
        label.innerText = "Enter new value:";
    }

    inputField.style.display = "block";
}

function updateCoin() {
    var dropdown = document.getElementById("dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var updatedValue = document.getElementById("updateValue").value;
    var denomination = document.getElementById('updatedenomination').value;
    var updateData = {};

    if (selectedOption === "option1") {
        updateData.coinName = updatedValue;
    } else if (selectedOption === "option2") {
        updateData.coinCountry = updatedValue;
    } else if (selectedOption === "option3") {
        updateData.coinQuantity = parseInt(updatedValue); // Convert to integer
    } else if (selectedOption === "option4") {
        updateData.coinValue = parseFloat(updatedValue); // Convert to float
    }

    fetch(`http://localhost:8083/coins/updateCoin/${denomination}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        getCoins();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

//to avoid refreshing page//

window.onload = function() {
    getCoins();
};
