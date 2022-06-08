import * as React from 'react';
import clsx from 'clsx';

import './Input.css';
import { ChangeEvent, ChangeEventHandler } from "react";

interface IProps {
  className?: string;
  id: string;
  checked?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'checkbox';
  children?: React.ReactNode;
}

const Input: React.FC<IProps> = ({
                                   className,
                                   id,
                                   checked,
                                   label,
                                   onChange,
                                   children,
                                   type = 'text'
                                 }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.value)
    }
  }
  return (
    <div className={clsx('input', className)}>
      <label
        htmlFor={id}
        className="input__label"
      >
        {children}
      </label>
      <input
        className="input__input"
        type={type}
        id={id}
        name={label}
        placeholder={label}
        checked={checked && checked}
        onChange={handleChange}
      />

    </div>
  );
};

export default Input;
