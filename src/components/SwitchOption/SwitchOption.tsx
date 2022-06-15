import * as React from 'react';
import clsx from 'clsx';

import Icon, { IconName } from "../Icon/Icon";
import './SwitchOption.css';

interface IProps {
  className?: string;
  name: string;
  value: string;
  id: string;
  label: string;
  img?: IconName;
  checked: boolean;
  onChange?: (checked: boolean, value: string) => void;
}

const SwitchOption: React.FC<IProps> = ({
                                          className,
                                          name,
                                          value,
                                          id,
                                          img,
                                          label,
                                          checked,
                                          onChange
                                        }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.checked, event.currentTarget.value)
    }
  }
  return (
    <div className={clsx('switch-option',
      {
        'switch-option--checked': checked,
      }, className)}>
      <input
        className='switch-option__choice'
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className='switch-option__label'
      >{img ? <Icon type={img} className='switch-option__img'/> : label}</label>
    </div>
  );
};

export default SwitchOption;
