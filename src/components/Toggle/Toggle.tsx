import * as React from 'react';
import clsx from 'clsx';

import './Toggle.css';

interface IProps {
  className?: string;
  onToggle?: (value: boolean) => void;
  value: string;
  name: string;
  label?: string;
  checked?: boolean;
}

const Toggle: React.FC<IProps> = ({
                                    className,
                                    value,
                                    name,
                                    checked,
                                    label,
                                    onToggle
                                  }) => {

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggle) {
      onToggle(event.currentTarget.checked);
    }
  }
  return (
    <div className={clsx('toggle', {
      'toggle--checked': checked
    },className)}>
      <input
        className='toggle__input'
        type='checkbox'
        value={value}
        name={name}
        id={`${value}-${name}`}
        onChange={handleToggle}
      />
      <label
        className='toggle__label'
        htmlFor={`${value}-${name}`}
      >
        {label && <p className='toggle__label__text'>{label}</p>}
        <div className='toggle__switch'>
          <div className='toggle__switch__slider'/>
        </div>
      </label>
    </div>
  )
    ;
};

export default Toggle;
