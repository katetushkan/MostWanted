import * as React from 'react';
import clsx from 'clsx';

import './Button.css';

interface IProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, value?: string) => void;
  autoFocus?: boolean;
  value?: string;
  disabled?: boolean;
  type?: 'normal' | 'accent';
  to?: string;
  children?: React.ReactNode;
  tabIndex?: number;
}

const Button: React.FC<IProps> = ({
                                    className,
                                    onClick,
                                    autoFocus,
                                    value,
                                    disabled,
                                    type,
                                    to,
                                    children,
                                    tabIndex
                                  }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event, value);
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
        tabIndex={tabIndex}
      >
        {children}
      </button>
      {/*}*/}
    </>
  );
};

export default Button;
