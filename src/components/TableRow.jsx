import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import { useState } from 'react';

const TableRow = ({ initialIsEditing, initialInvoiceData, deleteFunc }) => {

  const [editMode, setEditMode] = useState(initialIsEditing);
  const [description, setDescription] = useState(initialInvoiceData.description);
  const [rate, setRate] = useState(initialInvoiceData.rate);
  const [hours, setHours] = useState(initialInvoiceData.hours);

  // Define functions to set editMode back and forth
  const changeEditMode = () => setEditMode(true);
  const changeNormalMode = () => setEditMode(false);

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
    </tr>
  );
};

export default TableRow;
