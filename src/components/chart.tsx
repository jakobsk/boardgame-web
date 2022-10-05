import { VictoryChart } from 'victory-chart';
import { VictoryTheme } from 'victory-core';
import { VictoryLine } from 'victory-line';

export default function Chart() {
  return (
    <VictoryChart theme={VictoryTheme.material} width={600} height={300}>
      <VictoryLine
        style={{
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' },
        }}
        data={[
          { x: 1, y: 1400 },
          { x: 2, y: 1470 },
          { x: 3, y: 1450 },
          { x: 4, y: 1700 },
          { x: 5, y: 1800 },
        ]}
      />

      <VictoryLine
        style={{
          data: { stroke: '#3151c4' },
          parent: { border: '1px solid #ccc' },
        }}
        data={[
          { x: 1, y: 1500 },
          { x: 2, y: 1420 },
          { x: 3, y: 1450 },
          { x: 4, y: 1300 },
          { x: 5, y: 1350 },
        ]}
      />
    </VictoryChart>
  );
}
