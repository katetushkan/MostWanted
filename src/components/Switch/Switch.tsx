import * as React from 'react';
import clsx from 'clsx';

import SwitchOption from "../SwitchOption/SwitchOption";
import { IconName } from "../Icon/Icon";
import './Switch.css';
import { useState } from "react";


interface ISwitchOption {
  value: string;
  label: string;
  img?: IconName;
}

interface IProps {
  className?: string;
  options: ISwitchOption[];
  checked?: string;
}

const Switch: React.FC<IProps> = ({
                                    className,
                                    options,
                                    checked = '1'
                                  }) => {

  const [radio, setRadio] = useState(checked);
  const handleSwitched = (checked: boolean, value: string) => {
    if (checked && value) {
      setRadio(value);
    }
  }
  
  return (
    <div className={clsx('switch', className)}>
      {options.map((option) =>
        <SwitchOption
          key={`${option.label}-${option.value}`}
          className='switch__option'
          name={clsx('switch', className)}
          id={`${option.label}-${option.value}`}
          value={option.value}
          label={option.label}
          img={option.img}
          checked={radio === option.value}
          onChange={handleSwitched}
        />
      )
      }
    </div>
  );
};

export default Switch;
