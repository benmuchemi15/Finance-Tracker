# Personal Finance Tracker

## Overview

The Personal Finance Tracker is a web application that allows users to securely manage their finances by logging transactions, setting budgets, and generating insightful financial reports. It is built using a full-stack technology setup: React on the frontend, Vite + JavaScript on the backend, and PostgreSQL for persistent data storage.

## Features

User authentication (login and signup)

Add, edit, and delete transactions

Categorize transactions (e.g., food, rent, entertainment)

Set and monitor monthly budgets

Generate visual financial reports

Downloadable reports (PDF/CSV)
## Tech Stack

Frontend: React

Backend: Vite, JavaScript

Database: PostgreSQL



## Installation

### Backend Setup
Navigate to backend folder
cd backend
Install backend dependencies
npm install
Create a .env file based on .env.example
Update database credentials and JWT secret in .env
Run backend in development mode
npm run dev

### Frontend Setup
Navigate to frontend folder
cd frontend
Install frontend dependencies
npm install
Run frontend in development mode
npm run dev
Environment Variables
Backend .env file must include:
DATABASE_URL=your_postgres_database_url
JWT_SECRET=your_jwt_secret_key
PORT=5173
Frontend .env file must include:
VITE_API_URL=http://localhost:5173

## Usage
Register a new user account.

Log in with your credentials.

Add your income and expense transactions.

Categorize each transaction appropriately.

Set your monthly budgets.

View your financial reports and insights.

Download your reports for personal records.

## Project Structure
frontend/
  - src/
    - assets/
    - components/
    - context/
    - hooks/
    - pages/
    - utils/
    - App.jsx/
    - Index.css/
    - Main.js/
backend/
  - src/
    - controllers/
    - routes/
    - services/
    - models/

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact

Created by Ben Muchemi — feel free to reach out for collaboration!
