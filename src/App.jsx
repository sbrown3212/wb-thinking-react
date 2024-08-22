import './App.css';
import InvoiceTable from './components/InvoiceTable.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [invoiceData, setInvoiceData] = useState([]);
  
  // Get TEST_DATA from server
  useEffect(() => {
    axios.get('/api/invoices')
    .then((response) => {
      setInvoiceData(response.data.invoices)
    })
  }, []);

  return <InvoiceTable initialData={invoiceData} />
}

export default App;
