# Blockchain Explorer

A simple blockchain explorer built with Flask for the backend and vanilla HTML, CSS, and JavaScript for the frontend. This project demonstrates basic blockchain functionality including block mining, transaction management, node registration, and conflict resolution with a dark mode user interface.

## Features

- **Mine a New Block**: Add a new block to the blockchain.
- **Add a New Transaction**: Create and add a new transaction to the next block.
- **View Blockchain**: Retrieve and display the current blockchain.
- **Register a Node**: Register new nodes in the network.
- **Resolve Conflicts**: Implement a consensus algorithm to resolve chain conflicts across nodes.

## Technologies

- **Backend**: Flask
- **Frontend**: HTML, CSS, JavaScript
- **Data Handling**: JSON
- **Cryptographic Hashing**: SHA-256

## Setup

### Prerequisites

- Python 3.x
- Flask (`pip install Flask`)
- Requests library (`pip install requests`)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/DarkMatterCompiler/blockchain-explorer.git
    cd blockchain-explorer
    ```

2. **Install Dependencies**

    ```bash
    pip install Flask requests
    ```

3. **Run the Flask Server**

    ```bash
    python app.py
    ```

4. **Open the Frontend**

    Open `index.html` in your browser to access the blockchain interface.

## Endpoints

- **GET /mine**: Initiates the mining of a new block.
- **POST /transactions/new**: Adds a new transaction to the blockchain.
- **GET /chain**: Retrieves the entire blockchain.
- **POST /nodes/register**: Registers a new node in the network.
- **GET /nodes/resolve**: Resolves conflicts by replacing the chain with the longest valid one.

## Frontend

- **index.html**: Contains the structure of the web interface.
- **styles.css**: Provides the dark mode styling for the interface.
- **app.js**: Contains JavaScript for handling user interactions and API requests.

## Example Usage

### Mining a New Block

- Click the "Mine Block" button on the frontend to mine a new block.

### Adding a New Transaction

- Fill in the form with sender, recipient, and amount details, then submit to add a new transaction.

### Viewing the Blockchain

- Click the "Get Blockchain" button to retrieve and view the current blockchain.

### Registering a Node

- Enter the node address and click "Register Node" to add a new node to the network.

### Resolving Conflicts

- Click the "Resolve Conflicts" button to update the chain with the longest valid chain from the network.

## Contributing

Feel free to submit pull requests or issues if you find bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various blockchain tutorials and resources.
- Thank you to the open-source community for providing valuable tools and libraries.

