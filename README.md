# Expense-Tracker-Mern
A fully-featured Expense-Tracker WebApp , built with the MERN stack.


### Backend 
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" /> 
### Front-end
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
### Database 
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>



### Installation
1) GitHub repository  
```
 https://github.com/vikram17dp/ExpenseTracker.git
```
2) Install dependencies  
```
cd Expense-Tracker_Mern  
cd frontend
npm install
cd..
cd backend
npm install
```

3) Run the frontend
```
npm start
```
4) Run the backend
```
npx nodemon server.js
```
### Backend

- **server.js**: The main entry point for the Express backend. This file sets up routes and connects to the database.
- **controllers/**: Contains all the logic for user authentication (sign up, login) and managing expenses (adding, updating, deleting).
- **routes/**: Defines API routes like `POST /api/register`, `POST /api/login`, and `GET /api/expenses`.
- **models/**: MongoDB schema models for user and expense data. The **User** model stores user information, and the **Expense** model stores individual expenses with details like amount, category, date, etc.

### Frontend

- **src/**: Contains React components such as:
  - **Login.js**, **Register.js** for user authentication.
  - **ExpenseList.js**, **AddExpense.js** for displaying and adding expenses.
  - **ExpenseSummary.js** for viewing the total expense summary.
  - **context/** for managing global state using React Context API.
  
- **public/**: Static files, including the HTML template and icons.

### Technologies Used

#### Backend:
- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store user and expense data securely.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB to interact with the database.
- **Bcrypt.js**: Used to hash user passwords before saving them to the database.
- **JWT (JSON Web Tokens)**: For securely authenticating users.

#### Frontend:
- **React**: JavaScript library for building dynamic UIs.
- **Tailwind CSS**: Utility-first CSS framework for styling the app in a responsive and easy way.

### Database

All data in the app is stored in **MongoDB**, a NoSQL database, including:

- **Users**: Each user has a unique record containing their email, hashed password, and associated expenses.
- **Expenses**: Each expense record includes the amount, category, date, and a reference to the user who created the expense.

The database is set up with collections for **Users** and **Expenses**. When a user registers, their details are stored in the **Users** collection. When they add an expense, that data is stored in the **Expenses** collection with a reference to the user.

Example of **expense** data:
```json
{
  "userId": "60c1b450e14d2b3ef8f46b32",
  "amount": 200,
  "category": "Food",
  "date": "2024-11-19T14:00:00Z"
}

