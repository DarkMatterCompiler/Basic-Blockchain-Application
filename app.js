const apiUrl = 'http://localhost:5000'; // The base URL of your Flask server

// Function to mine a new block
function mineBlock() {
    fetch(`${apiUrl}/mine`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('mine-result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('mine-result').innerText = 'Error: ' + error;
        });
}

// Function to add a new transaction
function addTransaction() {
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    fetch(`${apiUrl}/transactions/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sender, recipient, amount })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('transaction-result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('transaction-result').innerText = 'Error: ' + error;
        });

    return false; // Prevent form submission
}

// Function to get the full blockchain
function getFullChain() {
    fetch(`${apiUrl}/chain`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('chain-result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('chain-result').innerText = 'Error: ' + error;
        });
}

// Function to register a new node
function registerNode() {
    const nodeAddress = document.getElementById('node-address').value;

    fetch(`${apiUrl}/nodes/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nodes: [nodeAddress] })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('register-result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('register-result').innerText = 'Error: ' + error;
        });

    return false; // Prevent form submission
}

// Function to resolve conflicts
function resolveConflicts() {
    fetch(`${apiUrl}/nodes/resolve`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('resolve-result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('resolve-result').innerText = 'Error: ' + error;
        });
}
