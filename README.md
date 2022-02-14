# OpenLibrary API project

This application allows user to search books utalising OpenLibrary API.

![Alt Text](openlibraryapi.gif)


# Technologies Used:
    * React Js
        * Functional components

# Implementation :
The project is divided in three major parts:

    * App.js, - all states are updated and 'fetchBooks' function is being executed
    * BookList.jsx - received books are being mapped and passed further as props
    * Book.jsx - each book info(as stated above received from props) is being displayed. 

Errors are being handled in three cases:

    * Unsuccessful api call
    * User submitting empty input field
    * No books found from the given search term

Project has very minimal styling. Books are being displayed using CSS grid layout. 


# How to run the project?

Download the repository, open in the editor and in terminal enter

    - npm install
    
 to install all the necessery node modules

After that enter 

    - npm start

to run the application