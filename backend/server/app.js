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

// import handler functions object from controller file
import handlerFunctions from './controller.js';

// Routes:
// Before creating endpoints, address the following:
// - What is the purpose of this endpoint?
// - Will I need any query/param/body objects?
// - What will the endpoint string look like? (url)
// - What should the response look like? (keep consistent)

// First endpoint (GET):
// - To serve up an array of our invoice objects (TEST_DATA)
// - No additional client info needed
// - '/api/invoices' (--> full URL when hosted locally: http://localhost:2319/api/invoices)
// - { message: "", invoices: [] } --> res.send({ message: "", invoices: [] })
app.get('/api/invoices', handlerFunctions.getInvoices)

// Second endpoint (POST):
// - Add a new row to our invoice data array
// - Body object:
//    - description, rate, horus
// - '/api/addInvoice'
// - Send back new object with a message:
//    - { message: "", newInvoice: {} }
app.post('/api/addInvoice', handlerFunctions.addInvoice)

// Third endpoint (DELETE):
// - Delete a specific invoice from TEST_DATA
// - Need 'id' from request.prams
// - '/api/deleteInvoice/:id'
// - { message: "", invoices: [] }
app.delete('/api/deleteInvoice/:id', handlerFunctions.deleteInvoice) // params for a delete request is probably not a good idea in an actual application (not very secure)

// Fourth endpoint (PUT):
// - Update rate/description/hours on a specific invoice object
// - Body - { id, description, rate, hours } 
// - '/api/editInvoice'
// - { message: "", updatedInvoice: {} }
app.put('/api/editInvoice', handlerFunctions.editInvoice)

// Open up  door to server
ViteExpress.listen(app, 2319, () => console.log(`We've got a 23-19! Report to http://localhost:2319`));