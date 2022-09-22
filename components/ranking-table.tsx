import Table from 'react-bootstrap/Table';
import { Column } from '../constants/table';
import { RowData } from '../types/table';


function RankingTable({rows} : {rows: RowData[]}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{Column.NAME}</th>
          <th>{Column.RATING}</th>
          <th>{Column.NUMB_MATCHES}</th>
          <th>{Column.WON}</th>
          <th>{Column.LOSSES}</th>
          <th>{Column.LAST_FIVE}</th>
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
