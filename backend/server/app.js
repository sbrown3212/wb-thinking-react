import express from 'express';
import morgan from 'morgan'; // Helps with logging for debugging; not necessary
import ViteExpress from 'vite-express';

// Set up express instance as 'app';
const app = express();

// Set up middleware
app.use(morgan('dev')) // while in dev environment, use morgan for additional logging, etc.
app.use(express.urlencoded({ extended: false })); // Allows express to interpret body objects from POST requests
app.use(express.static('public')) // for certain imports, check the 'public' directory first; good to include 
app.use(express.json()) // lets server and front-end know that they'll be communication with JSON

// Set up global variable to mock a DB:
const TEST_DATA = [
  { id: 0, description: 'Content plan', rate: 30, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 40, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

// Routes:



// Open up  door to server
ViteExpress.listen(app, 2319, () => console.log(`We've got a 23-19! Report to http://localhost:2319`));