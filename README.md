# SBA 308A: JavaScript Web Application: Pokédex Search

## Project Overview
For this skill-based assessment, I built **Pokédex Search**, a web application that allows users to search for Pokémon by name and build a custom team. My goal was to create a simple but interactive application that demonstrates the use of asynchronous JavaScript and use of external APIs. The application allows users to search for any Pokémon using data from the PokéAPI, view information such as its image, Pokédex number, and type(s), and add Pokémon to a team. To simulate user data manipulation, I also implemented a POST request using JSONPlaceholder when Pokémon are added to the team.

## Technical Breakdown

### JavaScript Functionality
I used modern JavaScript features to create a responsive and interactive user experience.
* **External APIs:** The application retrieves Pokémon data from the PokéAPI using the Fetch API and asynchronous requests.
* **GET Requests:** Users can search for Pokémon by name, which sends a GET request to the PokéAPI and displays the returned data.
* **POST Requests:** When a Pokémon is added to the team, a POST request is sent to JSONPlaceholder to demonstrate user data manipulation through an API.
* **Async/Await:** I used async and await throughout the application to handle asynchronous API requests in a clean and readable way.
* **Error Handling:** Try/catch blocks are used to handle invalid searches and API errors without crashing the application.

### Modular File Structure
To keep the code organized and maintainable, I separated functionality into multiple JavaScript modules.
* **api.js:** Handles all API requests and communication with external services.
* **ui.js:** Updates the DOM and displays Pokémon information to the user.
* **app.js:** Controls user interactions, event listeners, and overall application logic.

### Styling & Design
I used CSS to create a clean and simple interface that resembles a basic Pokédex.
* A centered card layout keeps the content organized and easy to read.
* Red accents were used throughout the application to match the traditional Pokédex color scheme.
* Hover effects on buttons provide visual feedback to users.
* Team members are displayed in a dedicated team section with a live counter that tracks the current team size.

## Features
* Search Pokémon by name
* Display Pokémon image, ID number, and type(s)
* Build a team of up to five Pokémon
* Prevent duplicate Pokémon from being added
* Track team size with a live counter
* Handle invalid searches 
* Use both GET and POST requests

## Deployment & Source Code
**My GitHub Repository:** https://github.com/cherryjiang1227/SBA-308A

---

## My Reflection

**What could I have done differently during the planning stages?**
I could have spent more time planning the user interface before writing the JavaScript. While the application functions correctly, I made several adjustments to the layout and team section during development that could have been avoided. 

**Were there any difficult requirements?**
Working with APIs and asynchronous JavaScript was the most challenging part of the project. Understanding how async/await, fetch requests, and module imports worked together took some trial and error. I also spent time debugging file paths and ensuring that my JavaScript modules loaded correctly.

**What would I add with more time?**
With more time, I would add additional Pokémon information such as abilities, stats, and evolutions. I would also like to allow users to remove Pokémon from their team and save teams using local storage. Finally, I would improve the overall design to make it feel even more like a modern Pokédex application. I can implement easier search with suggestions/autofill as the user is typing. And I would like to see the Pokemon's image when saved in teams.
