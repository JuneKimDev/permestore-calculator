import { ChangeEvent, MouseEvent } from 'react';
import {} from '../../types';

const view = (props: {
  id: string;
  label: string;
  value: number;
  unit: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { id, label, value, unit, onChange } = props;

  return (
    <div className="calcPrice__input">
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} name={id} value={value} onChange={onChange} />
      <span>{unit}</span>
    </div>
  );
};

export default view;
