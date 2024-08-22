import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import { useState } from 'react';
import axios from 'axios';
import formatCurrency from '../utils/formatCurrency.js'

const TableRow = ({ initialIsEditing, initialInvoiceData, deleteFunc }) => {

  const [editMode, setEditMode] = useState(initialIsEditing);
  const [description, setDescription] = useState(initialInvoiceData.description);
  const [rate, setRate] = useState(initialInvoiceData.rate);
  const [hours, setHours] = useState(initialInvoiceData.hours);

  // Define functions to set editMode back and forth
  const changeEditMode = () => setEditMode(true);
  const changeNormalMode = () => {
    const bodyObj = {
      id: initialInvoiceData.id,
      description: description,
      rate: rate,
      hours: hours
    }

    axios.put('/api/editInvoice', bodyObj)
    .then((response) => {
      alert(response.data.message);
      setDescription(response.data.updatedInvoice.description);
      setRate(response.data.updatedInvoice.rate);
      setHours(response.data.updatedInvoice.hours);

      setEditMode(false)
    })
    .catch((err) => console.log(err)); // not necessary right now but will be used to catch errors

  };

  return (
    <tr>
      <ModeButtons 
        isEditing={editMode}
        editClick={changeEditMode}
        saveClick={changeNormalMode}
        deleteFunc={deleteFunc}
      />
      <DescriptionCell
        isEditing={editMode}
        value={description} 
        onValueChange={setDescription} 
      />
      <RateCell
        isEditing={editMode}
        value={rate}
        onValueChange={setRate} 
      />
      <HoursCell 
        isEditing={editMode}
        value={hours}
        onValueChange={setHours}
      />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
};

export default TableRow;
