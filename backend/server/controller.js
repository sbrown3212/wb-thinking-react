// Houses handler functions to de-clutter server file

// Set up global variable to mock a DB:
const TEST_DATA = [
  { id: 0, description: 'Content plan', rate: 30, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 40, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

let globalId = 4;

const handlerFunctions = {

  getInvoices: (request, response) => {
    response.send({
      message: "Here are all the invoices",
      invoices: TEST_DATA,
    })
  },

  addInvoice: (request, response) => {
    // Get values from req.body
    const { description, rate, hours} = request.body;

    // Create a new object with those values
    const newInvoice = {
      id: globalId,
      description: description,
      rate: rate,
      hours: hours,
    }

    // INcrement globalId fro the next invoice
    globalId++;

    // Add newInvoice object to TEST_DATA
    TEST_DATA.push(newInvoice)

    // Send response
    response.send({
      message: "New invoice created successfully",
      newInvoice: newInvoice,
    })
  }

}

export default handlerFunctions