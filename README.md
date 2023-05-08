# Getting Started Github Frontend Case Study

This project demos how to use the [Github](https://docs.github.com/en/rest/reference/search.) API.

#### HOW TO SET UP PROJECT

Clone the `bwa-github-search`  repo and run `npm install`

This will start the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `App Overview`
- Users type is selected by default
- There is a Search Form and radio buttons for selecting between users and organization search types 
- On a successful search a list of cards that contains information for users or organizations is displayed
- Otherwise a message of `No users or No organizations found` is displayed
- - The app also supports Dark and light mode which can be activated by clicking the button on the top right of the screen.
- When the user clicks search button or presses enter an animation of the spinning github icon is displayed showing that a search is taking place.
- On the details page a user  can click to go back to the previous search page.

### `What I am most pleased or proud of with my presentation`
- I have been able to take advantage of React hooks API which was introduced in React 16.8 to complete this exercise, I also leveraged the power of styled components to create reusable styles and create a beautiful response UI.
- I was able to add code to support multiple languages taking advantage of react-i18next
- I wrote custom hooks to handle support of Light and Dark theme and also get the queryParameter

### `Decisions made during the development of the app, Improvements or Next Features that I would like to add to my Project`
- I used redux for stage management and choose redux-toolkit to implement it, this was to avoid prop-drilling
- For the search input i decided to use the useRef hook instead of the useState so as to avoid unnecessary renders everytime a user types in the search input.
- Since this is a small app I only wrote unit tests for components.
- To make the app performant I decided to use pagination so as to avoid loading too much data in the dom.