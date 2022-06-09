import * as React from 'react';
import clsx from 'clsx';

import './SelectedOption.css';
import Button from "../Button/Button";

interface IProps {
  className?: string;
  option: string;
  icon?: React.ReactNode;
  onClick?: (value: string) => void;
}

const SelectedOption: React.FC<IProps> = ({
                                            className,
                                            option,
                                            icon,
                                            onClick
                                          }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, value?: string) => {
    if (onClick && value) {
      onClick(value)
    }
  }

  return (
    <div className={clsx('selected-option', className)}>
      <Button
        className='selected-option__button'
        value={option}
        onClick={handleClick}
      >
        {option}
        {icon}
      </Button>
    </div>
  );
};

export default SelectedOption;
