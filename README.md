# MyReads

This is the repository that contains the code for The MyReads app. This app is built as the out of class project for Udacity's React nanodegree program part 1: React Fundamentals.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing and executing](#installing-and-executing)
- [Project](#project)
  - [Overview](#overview)
  - [App Functionality](#app-functionality)
  - [Backend Server](#backend-server)
  - [Search Terms](#search-terms)
- [Acknowledgments](#acknowledgments)
  - [Author](#author)
  - [Built With](#built-with)

## Getting Started

### Prerequisites

* [npm](https://www.npmjs.com/)

If you have Node installed, you have NPM, if not install node:

* [Node](https://nodejs.org/en/)

Optionally you can also use Yarn

* [yarn](https://yarnpkg.com/en/)

### Installing and executing

Run:
```
npm install
```
or
```
yarn install
```

Once that finishes:
```
npm start
```
Or
```
yarn start
```

Which will open a new browser window pointed to [localhost:3000](http://localhost:3000/) where you can start interacting with the app.

## Project

### Overview

The MyReads project consists of an app that allows the user to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that is used to persist information as the user interacts with the application.

### App Functionality

The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets the user select the shelf for that book. When the user selects a different shelf, the book moves there.

The main page also has a link to /search, a search page that allows the user to find books to add to their library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to their library.

The search page also has a link to / (the root URL), which leads back to the main page.

### Backend Server

A backend server has been provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

#### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

#### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only.

### Search Terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Acknowledgments

This project was generated using files from the repository [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter)

* [Udacity](https://www.udacity.com/)
* [Tyler McGinnis](https://twitter.com/tylermcginnis33)
* [Ryan Florence](https://twitter.com/ryanflorence)
* [Michael Jackson](https://twitter.com/mjackson)

### Author

Edgar Hernandez
* [https://github.com/edhzsz](https://github.com/edhzsz)
* [https://twitter.com/edhzsz](https://twitter.com/edhzsz)

### Built With

* [npm](https://www.npmjs.com/)
* [Node](https://nodejs.org/en/)
* [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
