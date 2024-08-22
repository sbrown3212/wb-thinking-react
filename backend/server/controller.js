// Houses handler functions to de-clutter server file

// Set up global variable to mock a DB:
let TEST_DATA = [
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

    // Increment globalId fro the next invoice
    globalId++;

    // Add newInvoice object to TEST_DATA
    TEST_DATA.push(newInvoice)

    // Send response
    response.send({
      message: "New invoice created successfully",
      newInvoice: newInvoice,
    })
  },

  deleteInvoice: (request, response) => {
    // Extract the value of 'id' from params
    const { id } = request.params;

    // Filter out the invoice with the id from TEST_DATA
    TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id)

    // Send response
    response.send({
      message: "Invoice deleted",
      invoices: TEST_DATA
    });
  },

  editInvoice: (request, response) => {
    // Grab invoice data from request.body
    const { id, description, rate, hours } = request.body;

    // Find index of this invoice by its id
    const idx = TEST_DATA.findIndex((invoice) => invoice.id === +id)

    // Grab that invoice[index]
    const invoice = TEST_DATA[idx]

    // Update its values
    invoice.description = description ?? invoice.description; // error handling: update to description if description exists, otherwise revert back to what it was
    invoice.rate = +rate;
    invoice.hours = +hours;

    // Send it back
    response.send({
      message: "Invoice updated successfully",
      updatedInvoice: invoice
    })
  }

}

export default handlerFunctions