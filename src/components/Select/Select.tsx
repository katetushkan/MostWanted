import * as React from 'react';
import { useEffect, useRef, useState } from "react";
import clsx from 'clsx';

import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { VirtualizedOptionList } from "../VirtualizedList/VirtualizedList";

import './Select.css';
import SelectedOption from "../SelectedOption/SelectedOption";

interface IProps {
  className?: string;
  data?: any[];
  id: string;
}

const Select: React.FC<IProps> = ({ className, data, id }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const removeValue = (value: string) => {
    let filtered = selected.filter((elem) => {
      return elem !== value;
    })

    setSelected(filtered);
  }

  const handleChecked = (checked: boolean, value: string) => {

    if (checked) {
      setSelected([...selected, value]);
    }
    else {
      removeValue(value);
    }
  }

  const handleToggle = (event: any) => {
    setIsOpen(!isOpen);
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsOpen(true);
  }

  const handleClick = (value: string) => {
    removeValue(value);
  }

  return (
    <div className={clsx('select', className)}>
      <div className='select__select-panel'>
        {
         selected.map((item) =>
           <SelectedOption
             key={item}
             option={item}
             icon={<Icon type='cancel' className="select__select-panel__icon"/>}
             onClick={handleClick}
           />
         )
        }
      </div>
      <div className='search-panel'>
        <div className='search-panel__search-input'>
          <Input
            id='search-input'
            placeholder='Select values...'
            onFocus={handleFocus}
            // onBlur={handleBlur}
          />
        </div>
        <div className='search-panel__button'>
          <Button
            onClick={handleToggle}
          >
          <span className={clsx('select__icon', {
            'select__icon--open': isOpen,
            'select__icon--close': !isOpen,
          })}>
            <Icon type='open'/>
          </span>
          </Button>
        </div>
      </div>
      <div className={clsx('select__option-list-wrapper',
        {
          'option-list--open': isOpen,
          'option-list--close': !isOpen,
        })}>
        {data &&
        <VirtualizedOptionList
            className='select__option-list'
            data={data}
            itemSize={40}
            margin={5}
            onChecked={handleChecked}
            checked={selected}
        />
        }
      </div>
    </div>
  );
};

export default Select;
