import './InvoiceTable.css';
import TableHeader from './TableHeader';
import AddRowButton from './AddRowButton';
import TableRow from './TableRow';

const InvoiceTable = ({ initialData }) => {
  console.log(`INITIAL DATA:`, initialData)
  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          <TableRow 
            initialIsEditing={true}
            initialInvoiceData={initialData[0]}
          />
          <TableRow 
            initialIsEditing={true}
            initialInvoiceData={initialData[1]}
          />
          <TableRow 
            initialIsEditing={true}
            initialInvoiceData={initialData[2]}
          />
          <TableRow 
            initialIsEditing={true}
            initialInvoiceData={initialData[3]}
          />
          {/* <TableRow 
            initialIsEditing={true}
            description={"test description 2"}
            rate={100}
            hours={25}
          /> */}
        </tbody>

        <tfoot>
          <AddRowButton />
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceTable