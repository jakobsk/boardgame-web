import Table from 'react-bootstrap/Table';
import { Columns } from '../constants/table';
import { RowData } from '../types/table';

function RankingTable({ rows }: { rows: RowData[] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{Columns.NAME}</th>
          <th>{Columns.RATING}</th>
          <th>{Columns.NUMB_MATCHES}</th>
          <th>{Columns.WON}</th>
          <th>{Columns.LOSSES}</th>
          <th>{Columns.LAST_FIVE}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.rating}</td>
            <td>{row.gamesPlayed}</td>
            <td>{row.gamesWon}</td>
            <td>{row.gamesLost}</td>
            <td>{row.lastFiveGames}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RankingTable;
