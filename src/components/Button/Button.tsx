import * as React from 'react';
import clsx from 'clsx';

import './Button.css';

interface IProps {
  className?: string;
  onClick?: (value: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  autoFocus?: boolean;
  value?: string;
  disabled?: boolean;
  type?: 'normal' | 'accent';
  to?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
                                    className,
                                    onClick,
                                    autoFocus,
                                    value,
                                    disabled,
                                    type,
                                    to,
                                    children
                                  }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <>
      {/*{to*/}
      {/*  ? <Link*/}
      {/*    to={to}*/}
      {/*    className={clsx('button', {*/}
      {/*      'button--normal': !type || type === 'normal',*/}
      {/*      'button--accent': type === 'accent',*/}
      {/*      'button--disabled': disabled,*/}
      {/*    }, className)}*/}
      {/*    onClick={onClick}*/}
      {/*  >*/}
      {/*    {children}*/}
      {/*  </Link> :*/}
      <button
        autoFocus={autoFocus}
        className={clsx('button', {
          'button--normal': !type || type === 'normal',
          'button--accent': type === 'accent',
          'button--disabled': disabled,
        }, className)}
        onClick={handleClick}
        value={value}
        disabled={disabled}
      >
        {children}
      </button>
      {/*}*/}
    </>
  );
};

export default Button;
