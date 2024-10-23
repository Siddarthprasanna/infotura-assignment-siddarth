# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
# User Management Dashboard

## Overview

The User Management Dashboard is a React application that allows users to manage a list of users. Users can view, create, update, and delete user information. The application fetches user data from an external API and provides a user-friendly interface for managing users.

## Features

- View a list of users with details including name, email, phone, and status.
- Add new users using a user-friendly form.
- Edit existing user details.
- Delete users with a confirmation prompt.
- Search and filter users based on name and status.
- Pagination to navigate through users easily.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: For client-side routing.
- **CSS**: For styling the application.

## Getting Started

To run this application locally, follow the steps below:

### Prerequisites

- Node.js (v12 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Siddarthprasanna/infotura-assignment-siddarth.git
   cd user-management-dashboard
Install the dependencies:
npm install

Start the application:
npm start

Open your browser and navigate to http://localhost:3000.

API Integration
The application fetches user data from the following API:

JSONPlaceholder Users API
Error Handling
The application includes error handling to manage potential issues with fetching data from the API. A loading state is displayed while the data is being fetched.

