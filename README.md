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
