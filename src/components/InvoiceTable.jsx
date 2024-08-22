import './InvoiceTable.css';
import TableHeader from './TableHeader';
import AddRowButton from './AddRowButton';
import TableRow from './TableRow';
import { useState, useEffect } from 'react';

let globalId = 4;

const InvoiceTable = ({ initialData }) => {

  console.log('INITIAL DATA:', initialData);

  // Creates a new array of data to edit
  const [currentData, setCurrentData] = useState(initialData);

  const rows = currentData.map((invoiceItem) => {
    return (
      <TableRow
        key={invoiceItem.id}
        initialInvoiceData={invoiceItem}
        initialIsEditing={false}
        deleteFunc={() => deleteRow(invoiceItem.id)}
      />
    )
  });

  useEffect(() => {
    setCurrentData(initialData)
  }, [initialData]);

  // In order to give our AddRowButton the ability to add a value to 'currentData', we'll need a function:
  const addRow = () => {
    // create a new object to represent a new 'row' or entry in the currentData array
    const newRow = {
      id: globalId,
      description: 'Description',
      rate: '',
      hours: '',
    }

    // add 'newRow' to 'currentData'
    setCurrentData([...currentData, newRow]);

    globalId++;
  };

  const deleteRow = (id) => {
    const filteredData = currentData.filter((el) => el.id !== id);

    setCurrentData(filteredData);
  };

  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          {rows}
        </tbody>

        <tfoot>
          <AddRowButton addClick={addRow} />
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceTable