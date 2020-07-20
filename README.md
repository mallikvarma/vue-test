## Installation

// To setup the project 
npm install

// To run the app locally
npm run serve

// To generate the build
npm run build

// To run unit tests with coverage
npm run test:unit

// To run sonarqube (assuming sonarqube and sonar scanner are installed)
npm run sonar



## Architectural Decisions

•	Vue.js:  Vue.js is progressive javascript framework, which is lightweight, modular and provide flexible development environment.
•	VueX:  Redux based state management for VueJS
•	axios:  Promise based HTTP client library for javascript development


## Supported Browsers
• Chrome

## Supported Devices
• Desktop
• Tablet
• Mobile

## Using the application
• After starting the local web server by running the command "npm run serve", application can be accessed from localhost:8080
• On the landing page is the list of high rated TV shows (currently showing shows with > 8.9 rating)
• Details of the show can be viewed by clicking on the show thumbnail
• You can also search for a show from the search in the app header.
