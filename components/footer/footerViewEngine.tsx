import { ChangeEvent, MouseEvent } from 'react';
import {} from '../../types';

const view = (props: {}) => {
  const {} = props;

  return (
    <small className="footer__engine">
      <span>Powered by</span>
      <picture>
        <source srcSet="/assets/images/junekim_192x192.webp" type="image/webp" />
        <img
          src="/assets/images/junekim_192x192.png"
          alt="Developer logo"
          className="footer__engine--logo"
        />
      </picture>
      <span>
        <a href="https://github.com/JuneKimDev" rel="noopener">
          June Kim
        </a>
      </span>
    </small>
  );
};

export default view;
