import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from "clsx";

function Button({ to, variant, inverse, className, override, children, type, onClickFunc, ...rest }) {
  const [effect, setEffect] = useState(false);
  const styles = (variant, inverse, className, override, effect) => clsx(
    className,
    
    ['text-center text-xs'], 
    // Products/Marketplace
    variant === 'product'
      ? !override && [ inverse && 'rounded-full flex items-center gap-0.5 py-2 md:px-10 font-bold text-orange',
          !inverse && 'bg-orange text-white'
        ]
      
    // Jobs
      : variant === 'job'
        ? !override && [ inverse && 'rounded-full flex items-center md:gap-0.5 p-0 py-2 md:px-10 font-semibold text-blue',
            !inverse && 'bg-blue text-white'
          ]

      : variant === 'job-inverted'
        ? !override && [ inverse && 'rounded-full flex items-center md:gap-0.5 p-0 py-2 md:px-10 font-semibold text-blue',
            !inverse && 'bg-white text-blue'
          ]

    // Businesses
      : !override && [ inverse && 'rounded-full flex items-center gap-0.5 py-2 md:px-10 font-medium text-green',
          !inverse && 'bg-green text-white'
        ],

    // Default
    effect && 'animate-button_click'

    
  )

  return to.length > 0 ? (
    <Link {...rest} onClick={() => { setEffect(true) }} onAnimationEnd={() => { setEffect(false) }} className={styles(variant, inverse, className, override, effect)} to={`/${to}`}>
      {children}
    </Link>
  ) : (
    <button {...rest} onClick={() => { setEffect(true); onClickFunc() }} onAnimationEnd={() => { setEffect(false) }} type={type} className={styles(variant, inverse, className, override, effect)}>
      {children}
    </button>
  );
}
               

Button.defaultProps = {
  to: '',
  variant: 'business',
  inverse: false,
  className: '',
  override: false,
  type: 'button',
  onClickFunc: () => { console.log('Button clicked')}
  };

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  variant: PropTypes.string,
  inverse: PropTypes.bool,
  className: PropTypes.string,
  override: PropTypes.bool,
  type: PropTypes.string,
  onClickFunc: PropTypes.func
};

export default Button;

