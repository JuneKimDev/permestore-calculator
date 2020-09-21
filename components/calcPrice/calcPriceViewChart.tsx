import { ChangeEvent, MouseEvent } from 'react';
import { Chart } from 'react-google-charts';
import {} from '../../types';

const view = (props: { costOfGoods: number; marginEarningDiff: number; earning: number }) => {
  const { costOfGoods, marginEarningDiff, earning } = props;

  const chartData = [
    ['항목', '가격'],
    ['순이익', earning],
    ['기타비용', marginEarningDiff],
    ['매입원가', costOfGoods],
  ];
  const chartOption = {
    title: '매출 구조 차트',
    titleTextStyle: { color: '#ffffff' },
    backgroundColor: '#303030',
    legend: 'none',
    pieSliceText: 'percentage',
    pieSliceTextStyle: { color: '#ffffff' },
    pieStartAngle: 0,
    slices: {
      0: { offset: 0.2, color: '#c70039' },
      1: { color: '#f37121' },
      2: { color: '#111d5e' },
    },
  };

  return (
    <Chart
      height="100%"
      width="100%"
      chartType="PieChart"
      loader={<div className="calcPrice__loading">Loading Chart</div>}
      data={chartData}
      options={chartOption}
    />
  );
};

export default view;
