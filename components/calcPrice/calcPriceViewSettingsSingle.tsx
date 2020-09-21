import { ChangeEvent, MouseEvent } from 'react';
import { formatNumber } from '../util';
import {} from '../../types';

const view = (props: {
  name: string;
  isEditting: boolean;
  value: number;
  unit: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { name, isEditting, value, unit, onChange } = props;

  return (
    <div className="calcPrice__settings--single">
      <p className="calcPrice__settings--name">{name}</p>
      {isEditting ? (
        <input
          type="number"
          className="calcPrice__settings--input"
          value={value}
          onChange={onChange}
        />
      ) : (
        <p className="calcPrice__settings--value">
          <strong>{unit === '%' ? value.toFixed(2) : formatNumber(value)}</strong>
        </p>
      )}
      <p className="calcPrice__settings--unit">{unit}</p>
    </div>
  );
};

export default view;
