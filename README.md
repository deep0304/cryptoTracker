<p align="center"><img align="center" width="280" src="./frontend/src/assets/logo"/></p>
<p align="center"><img align="center" width="280" src="./public/images/WEBP-logo-light.webp#gh-light-mode-only"/></p>
<h3 align="center">A Comprehensive Blockchain Forensic Tool</h3>
<hr>

A powerful blockchain forensic tool that combines Neo4j's graph visualization capabilities with machine learning-based anomaly detection to track and analyze suspicious transactions on the Tezos blockchain. Built for enhanced transparency and security in the crypto ecosystem.

## [View Demo](#)

![Project Demo](demo.mp4)

<details>
<summary><h2>Table of Contents</h2></summary>

- [Preview](#preview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Team Details](#team-details)
- [Contributing](#contributing)
- [Connect with Us](#connect-with-us)
- [License](#license)

</details>

## 🛠️ Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white" alt="Neo4j"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
</p>

- **Backend Stack**
  - Neo4j for graph database management
  - MongoDB for transaction metadata storage
  - Express.js for API development
  - Node.js for server-side operations

- **Frontend Technologies**
  - React.js for user interface
  - D3.js for graph visualizations
  - Material-UI for component design

- **Machine Learning**
  - Isolation Forest for anomaly detection
  - Scikit-learn for pattern analysis

## 🚀 Key Features

- **Advanced Graph Visualization**
  - Interactive wallet relationship mapping
  - Real-time transaction flow tracking
  - Cluster analysis for identifying related wallets
  - Custom graph querying capabilities

- **Machine Learning-Powered Detection**
  - Real-time anomaly detection using Isolation Forest
  - Pattern recognition for mixing services
  - Behavioral analysis of wallet activities
  - Automated risk scoring system

- **Comprehensive Forensics Suite**
  - Detailed transaction path analysis
  - Historical pattern recognition
  - Export capabilities for investigation reports
  - Custom alert configuration
 
## 🎮 Usage

Once the application is up and running, you can:

1. **Visualize Wallet Networks**
   - Import wallet addresses
   - View transaction relationships
   - Analyze connection patterns

2. **Monitor Transactions**
   - Track real-time blockchain activity
   - Receive alerts for suspicious patterns
   - Generate investigation reports

3. **Analyze Patterns**
   - Identify mixing services
   - Detect unusual transaction flows
   - Track fund movements

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Neo4j Database
- Git

### Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/deep0304/cryptoTracker
   cd cryptoTracker
   ```

4. **Environment Configuration**
   Create a `.env` file in the `backend` directory and add:
   ```bash
   JWT_SECRET = random-_password
   MONGO_URI=mongodb+srv://<user_name>:<user_password>@<cluster0_name>.g0xck.mongodb.net/<db_name>?retryWrites=true&w=majority
   BLOCKCYPHER_API_KEY=460c2dea03274faaabab269ff56e9099
   ETHERSCAN_API_KEY=STR6XG481PBAMK2X9UU37IDH4BBH4MDS5B

   Create a `.env` file in the `python_model` directory and add:
   ```bash
   NEO4J_URI=neo4j+s://<your-neo4j-instance>
   NEO4J_USERNAME=<your-username>
   NEO4J_PASSWORD=<your-password>
   ```

   2. **Backend Setup**
   ```bash
   # Navigate to backend directory
   cd backend
   
   # Install dependencies
   npm i
   
   # Start the backend server
   npm run start
   ```

3. **Frontend Setup**
   ```bash
   # Open a new terminal and navigate to frontend directory
   cd frontend
   
   # Install dependencies
   npm i
   
   # Start the development server
   npm run dev
   ```

### Access Points
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## Project Structure
```
cryptoTracker/
├── backend/          # Express server and API routes
├── frontend/         # React application
└── README.md
```

## 👥 Team Details

<p align="center">
<a href="https://github.com/your-username/cryptoTracker/graphs/contributors">
<img src="https://contrib.rocks/image?repo=your-username/cryptoTracker"/>
</a>
</p>

**Lead Developer:** Amit Singhal

**Team Members:**
- Member 1 - Role/Expertise
- Member 2 - Role/Expertise
- Member 3 - Role/Expertise

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<p align="center">Made with ❤️ for a more transparent blockchain ecosystem</p>
