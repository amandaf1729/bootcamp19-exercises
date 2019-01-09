First, we will separate the page into two columns, separated by the div tags. In the column on the right side, we will define and render two separate rows by a list. In the first row, we will have an input text bar and an add button as a line. In the second row, we will have a input search bar. 

In the second column, we will define a component with a constant title at the top and a list of text and buttons that is rendered from an array. The button will be a div with text and a delete by id function. We will render the list last before the user is able to interact with the interface. The add button and delete button re-render the list. 

A layout of our application will look like this:

- todo array (not displayed on website directly, but instead as text under the list of todos)
- left column: To Dos
    - title
    - list of todos
        - text, string from the todo array
        - button with delete functionality
- right column: Add & Search bars
    - add bar and button
    - search bar 

More informaton about the "button" component: we will create a render function that creates a list of text and buttons. We will render the string of the to do and id from the state of the component with the help of an array. 
