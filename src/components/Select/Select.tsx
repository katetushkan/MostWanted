import * as React from 'react';
import { useLayoutEffect, useState } from "react";
import clsx from 'clsx';

import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { VirtualizedOptionList } from "../VirtualizedList/VirtualizedList";
import SelectedOption from "../SelectedOption/SelectedOption";

import { useFocus } from "./focusFunctionality";
import './Select.css';
import ChipsList from "../ChipsList/ChipsList";

interface IProps {
  className?: string;
  data: any[];
  id: string;
  onSearch?: (value: string) => void;
}

const Select: React.FC<IProps> = ({ className, data, id, onSearch }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [dataList, setDataList] = useState(data);
  const scrollPanel = React.createRef<HTMLDivElement>();

  const handleFocusChanged = (focused?: boolean) => {
    if (!focused) {
      setIsOpen(false);
    }
  }

  let input = useFocus(handleFocusChanged);

  const removeValue = (value: string) => {
    let filtered = selected.filter((elem) => {
      return elem !== value;
    })

    setSelected(filtered);
  }

  const handleChecked = (checked: boolean, value: string) => {
    if (checked) {
      setSelected([...selected, value]);
    } else {
      removeValue(value);
    }
  }

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsOpen(!isOpen);
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsOpen(true);
  }

  const handleRemove = (value: string) => {
    removeValue(value);
  }

  const handleSearch = (value: string) => {
    const searchedValues = data.filter((element) => element.includes(value))
    setDataList(searchedValues);
  }

  return (
    <div className={clsx('select', className)} ref={input as React.Ref<HTMLDivElement>}>
      <div className="select__select-panel__window">
        <ChipsList
          className='select__select-panel'
          selected={selected}
          handleClick={handleRemove}
        />
      </div>
      <div className='search-panel'>
        <div className='search-panel__search-input'>
          <Input
            id='search-input'
            placeholder='Select values...'
            onFocus={handleFocus}
            onChange={handleSearch}
          />
        </div>
        <div className='search-panel__button'>
          <Button
            onClick={handleToggle}
            tabIndex={-1}
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
        {dataList.length > 0 &&
        <VirtualizedOptionList
            className='select__option-list'
            data={dataList}
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
