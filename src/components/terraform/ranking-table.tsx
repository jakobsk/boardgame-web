import Table from 'react-bootstrap/Table';
import { ColumnTerraform } from '../../constants/table';
import { RowDataTerraform } from '../../types/table';

function RankingTable({ rows }: { rows: RowDataTerraform[] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{ColumnTerraform.NAME}</th>
          <th>{ColumnTerraform.RATING}</th>
          <th>{ColumnTerraform.NUMB_MATCHES}</th>
          <th>{ColumnTerraform.WON}</th>
          <th>{ColumnTerraform.LOSSES}</th>
          <th>{ColumnTerraform.LAST_FIVE}</th>
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
