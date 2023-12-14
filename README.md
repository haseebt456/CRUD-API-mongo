# Express App with MongoDB CRUD API

## Overview

This repository contains a simple Express.js application that serves as a backend server API for a product management system. The application uses MongoDB as its database, and the main database model is named "products." The "products" schema consists of three fields: name, price, and stock.

## Deployment

The application is currently deployed on Vercel, and you can access the API using the following link: [https://crud-api-mongo-xvln.vercel.app/Products](https://crud-api-mongo-xvln.vercel.app/Products)

## CRUD Operations

The API supports all basic CRUD (Create, Read, Update, Delete) operations for managing products.

### 1. Create a Product

To add a new product, send a POST request to the following endpoint:

```bash
POST /Products

### 2. Read Products

To retrieve a list of all products, send a GET request to the following endpoint:

```bash
GET /Products

To retrieve information about a specific product, send a GET request to:

```bash
GET /Products/:productsId

### 3. Update a Products

To update the details of a product, send a PUT request to the following endpoint:

```bash
PUT /Products/:productId

### 4. Delete a Products

To delete a product, send a DELETE request to the following endpoint:

```bash
DELETE /Products/:productId

## Installation

To install the API, you need to have Node.js installed on your computer. Then, you need to clone the repository and install the dependencies.

After cloning the repository, you need to create a file called ".env" in the root directory of the project and add the following line:

```bash
CONNURL=mongodb://localhost:27017
```bash
PORT=3000


#### Install dependencies:

```bash
npm install


## Usage
To use the API, you need to have MongoDB installed on your computer. Finally, you need to create a file called ".env" in the root directory of the project and add the following line:

```bash
MONGODB_URI=mongodb://localhost:27017

#### Start the server:
To start the API, you need to run the following command:

```bash
npm run dev

Now, the API should be running locally on http://localhost:3000.

Feel free to explore and interact with the API using tools like Postman or curl.

### Contributing
If you find any issues or have suggestions for improvement, please open an issue or create a pull request. Contributions are welcome!

### License
This project is licensed under the MIT License - see the LICENSE file for details.

