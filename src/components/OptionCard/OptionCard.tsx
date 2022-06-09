import * as React from 'react';
import clsx from 'clsx';

import './OptionCard.css';

interface IProps {
  className?: string;
  id: string;
  option: string;
  onSelect?: (checked: boolean, value: string) => void;
  value: string;
  checked: boolean;
  icon: React.ReactNode;
  height?: number;
  top?: number;
}

const OptionCard: React.FC<IProps> = ({
                                        className,
                                        id,
                                        option,
                                        onSelect,
                                        value,
                                        checked,
                                        icon,
                                        height,
                                        top
                                      }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelect) {
      onSelect(event.currentTarget.checked, event.currentTarget.value);
    }
  };

  return (
    <div
      className={clsx('option-card', className)}
      style={{ height, top }}
    >
      <input
        className='option-card__input'
        type='checkbox'
        id={id}
        onChange={handleChange}
        value={value}
        name={id}
        checked={checked}
      />
      <label
        className='option-card__label'
        htmlFor={id}
      >
        <p className='option-card__option'>{option}</p>
        <div className='option-card__icon'>
          {checked && icon}
        </div>
      </label>
    </div>
  );
};

export default OptionCard;
