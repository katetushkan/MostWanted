import * as React from 'react';
import clsx from "clsx";

import './Icon.css';

import { ReactComponent as open } from "./icons/arrow-open.svg";
import { ReactComponent as check } from "./icons/icon-check.svg";
import { ReactComponent as cancel} from "./icons/icon-cancel.svg";

const icons = {
  open,
  check,
  cancel
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
