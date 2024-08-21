

const TableHeader = () => {
  return (
    <tr>
      <th></th> {/* leave this blank because this 'header' will be above the buttons, which need no header */}
      <th>Description</th>
      <th>Rate</th>
      <th>Hours</th>
      <th>Amount</th>
    </tr>
  );
};

export default TableHeader;
