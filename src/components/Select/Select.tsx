import * as React from 'react';
import { MouseEventHandler, useState } from "react";
import clsx from 'clsx';

import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import './Select.css';

interface IProps {
  className?: string;
  data?: any[];
  id: string;
}

const Select: React.FC<IProps> = ({ className, data, id }) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={clsx('select', className)}>
      <div className='search-panel'>
        <div className='search-panel__search-input'>
          <Input
            id='search-input'
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
        { data &&
          <VirtualizedList
            className='select__option-list'
            data={data}
            itemSize={20}
            margin={0}
          />
        }
      </div>
    </div>
  );
};

export default Select;
