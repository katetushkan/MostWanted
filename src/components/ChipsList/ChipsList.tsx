import * as React from 'react';
import clsx from 'clsx';

import './ChipsList.css';
import SelectedOption from "../SelectedOption/SelectedOption";
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  selected: any[];
  handleClick: (value: string) => void;
}

const ChipsList: React.FC<IProps> = ({
                                       className,
                                       selected,
                                       handleClick }) => {

  const handleScroll = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;

    if (element.scrollLeft > 0 && !element.classList.contains("before")) {
      element.classList.add("before");
    }

    if (element.scrollLeft === 0) {
      element.classList.remove("before");
      element.classList.add("after");
    }

    if (element.scrollLeft < element.clientWidth && !element.classList.contains("after")) {
      element.classList.add("after");
    }

    if (Math.floor(element.scrollLeft + element.clientWidth) === element.scrollWidth) {
      element.classList.remove("after");
    }
  }

  return (
    <div className={clsx('chips-list after', className, )} onScroll={handleScroll}>
      {
        selected.map((item) =>
          <SelectedOption
            key={item}
            option={item}
            icon={<Icon type='cancel' className="selected-option__icon"/>}
            onClick={handleClick}
          />
        )
      }
    </div>
  );
};

export default ChipsList;
