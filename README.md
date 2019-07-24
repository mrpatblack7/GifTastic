# HW6-GifTastic
Giphy API and JavaScript/jQuery

## Live Link
 - https://mrpatblack7.github.io/GifTastic/
 <img width="530" alt="thumbnail_pic3" src="https://user-images.githubusercontent.com/45779399/61763628-a4ec5a80-ad9b-11e9-9f37-2b2b6a1fed7f.png">
 
## Requirements
- Generate a set of buttons based on an array of related strings
- Allow user to create new button based on text input
- Generate a set of gif images based on which button is being clicked
- Initialize gif's as stills but allow for animation once clicked

## Technologies Used
- Giphy API
- AJAX
- JavaScript
- jQuery for DOM manipulation
- HTML
- CSS

## Code Explanation
- Buttons are dynamically generated using jQuery, an array, and a for-loop
- Depending on the button clicked, that will send out an AJAX call using the appropriate query to Giphy (certain parameters must be passed in such as the search term, number of responses, and an API key)
- Given the JSON response object, we must then parse through it to display in the HTML using jQuery and the general principle of DOM manipulation
- HTML and CSS were used to style and give the page its basic structure
