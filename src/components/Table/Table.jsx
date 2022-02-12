import { DataGrid } from '@mui/x-data-grid';

// @styling
import './table.scss';

const Table = ({ columns, rows }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className='table'
        rows={rows}
        getRowId={() => rows.map(row => Math.random())} 
        columns={columns}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Table;
