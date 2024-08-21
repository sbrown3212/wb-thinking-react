import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';

const TableRow = ({ initialIsEditing, initialInvoiceData }) => {

  const { description, rate, hours} = initialInvoiceData;

  return (
    <tr>
      <ModeButtons isEditing={initialIsEditing} />
      <DescriptionCell isEditing={initialIsEditing} value={description} />
      <RateCell isEditing={initialIsEditing} value={rate} />
      <HoursCell isEditing={initialIsEditing} value={hours} />
    </tr>
  );
};

export default TableRow;
