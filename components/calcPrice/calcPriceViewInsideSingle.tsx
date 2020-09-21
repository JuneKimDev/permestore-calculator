import { ChangeEvent, MouseEvent } from 'react';
import { formatNumber } from '../util';
import {} from '../../types';

const view = (props: { name: string; value: number; unit: string }) => {
  const { name, value, unit } = props;

  return (
    <div className="calcPrice__inside--single">
      <p className="calcPrice__inside--name">{name}</p>
      <p className="calcPrice__inside--value">
        <strong>{unit === '%' ? value.toFixed(2) : formatNumber(value)}</strong>
      </p>
      <p className="calcPrice__inside--unit">{unit}</p>
    </div>
  );
};

export default view;
