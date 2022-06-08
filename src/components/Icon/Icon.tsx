import * as React from 'react';
import clsx from "clsx";

import './Icon.css';

import { ReactComponent as open } from "./icons/arrow-open.svg";


const icons = {
  open,
};

export type IconName = keyof typeof icons;

interface IProps {
  type: IconName;
  className?: string;
}

const Icon: React.FC<IProps> = ({ type, className }) => {
  const SVGIcon = icons[type];

  return (
    <i className={clsx('icon', className)}>
      <SVGIcon className="icon__svg"/>
    </i>
  );
};

export default Icon;
