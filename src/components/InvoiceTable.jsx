import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';

const InvoiceTable = () => {
  return (
    <div>
      InvoiceTable goes here
      <HoursCell isEditing={false} value={'my hours'}/>
    </div>
  )
}

export default InvoiceTable