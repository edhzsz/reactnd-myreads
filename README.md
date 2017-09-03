# MyReads

This is the repository that contains the code for The MyReads app. This app is built as the out of class project for Udacity's React nanodegree program part 1: React Fundimentals.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing and executing](#installing-and-executing)
- [Project description](#project-description)
  - [Project Overview](#project-overview)
  - [App Functionality](#app-functionality)
  - [Backend Server](#backend-server)
  - [Search Terms](#search-terms)
- [Acknowledgments](#acknowledgments)
  - [Author](#author)
  - [Built With](#built-with)

This project was generated using files from the repository [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter)

## Getting Started

### Prerequisites

### Installing and executing

## Project description

### Project Overview

### App Functionality

### Backend Server

To simplify the development process a backend server has been provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

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

* [Udacity](https://www.udacity.com/)
* [Tyler McGinnis](https://twitter.com/tylermcginnis33)
* [Ryan Florence](https://twitter.com/ryanflorence)
* [Michael Jackson](https://twitter.com/mjackson)

### Author

Edgar Hernandez


### Built With

* [npm](https://www.npmjs.com/)
* [Node](https://nodejs.org/en/)
* [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
