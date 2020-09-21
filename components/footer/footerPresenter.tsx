import { useEffect, ChangeEvent, MouseEvent } from 'react';
import './footer.scss';
import Engine from './footerViewEngine';
import {} from '../../types';

const presenter = (props: {}) => {
  const {} = props;

  return (
    <section className="footer">
      <div className="footer__container">
        <Engine />
      </div>
    </section>
  );
};

export default presenter;
