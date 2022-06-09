import * as React from 'react';
import clsx from 'clsx';

import './Input.css';
import { ChangeEvent, ChangeEventHandler, FocusEventHandler } from "react";

interface IProps {
  className?: string;
  id: string;
  checked?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'checkbox';
  children?: React.ReactNode;
  placeholder?: string;
  onFocus?: (event: any) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
                                   className,
                                   id,
                                   checked,
                                   label,
                                   placeholder,
                                   onChange,
                                   onFocus,
                                   onBlur,
                                   children,
                                   type = 'text'
                                 }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.value);
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
        placeholder={placeholder}
        checked={checked && checked}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

    </div>
  );
};

export default Input;
