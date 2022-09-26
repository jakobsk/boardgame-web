import Table from 'react-bootstrap/Table';
import { ColumnPoker } from '../../constants/table';
import { RowDataPoker } from '../../types/table';

function RankingTable({ rows }: { rows: RowDataPoker[] }) {
  return (
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>{ColumnPoker.NAME}</th>
          <th>{ColumnPoker.NET_PROFIT}</th>
          <th>{ColumnPoker.NUMB_MATCHES}</th>
          <th>{ColumnPoker.LAST_FIVE}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.netProfit}</td>
            <td>{row.gamesPlayed}</td>
            <td>{row.lastFiveGames}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RankingTable;
