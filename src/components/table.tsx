import Table from 'react-bootstrap/Table';
import { Columns_Terraforming, Columns_Poker } from '../constants/table';
import { RowData } from '../types/table';

function RankingTable({ game, rows }: { game: string; rows: RowData[] }) {
  const Columns = getGameColumns(game);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{Columns.NAME}</th>
          <th>{Columns.TOATAL_SCORE}</th>
          <th>{Columns.NUMB_MATCHES}</th>
          <th>{Columns.WON}</th>
          <th>{Columns.LOSSES}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.totalScore}</td>
            <td>{row.gamesPlayed}</td>
            <td>{row.gamesWon}</td>
            <td>{row.gamesLost}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const getGameColumns = (game: string) => {
  switch (game) {
    case 'terraforming':
      return Columns_Terraforming;
    case 'poker':
      return Columns_Poker;
    default:
      return Columns_Terraforming;
  }
};
export default RankingTable;
