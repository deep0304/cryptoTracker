# CryptoTracker

## Steps to Locally Install the Project

### 1. Clone the Repository

```bash
git clone https://github.com/deep0304/cryptoTracker
```

### 2. Navigate to the Project Directory

```bash
cd cryptoTracker
```

### 3. Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Start the backend server:

   ```bash
   npm run start
   ```

### 4. Frontend Setup

1. Open a new terminal and navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

### 5. Set Up Environment Variables

1. Create a `.env` file in the `backend` folder.

2. Add the following MongoDB connection string to the `.env` file:

   ```bash
   MONGO_URI=mongodb+srv://<user_name>:<user_password>@<cluster0_name>.g0xck.mongodb.net/<db_name>?retryWrites=true&w=majority
   ```

### Project Structure

- **Backend:** Manages API routes and transaction handling.
- **Frontend:** User interface for interacting with cryptocurrency data.

### Notes

- Make sure MongoDB is set up and properly configured.
- Frontend will run on the default development port (likely `http://localhost:5173`), and backend will run on `http://localhost:3000`.
