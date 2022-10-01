import React from "react";
import { styles } from './TollbarButton.styles';
import type { ToolbarButtonProps } from './ToolbarButton.types';

export function ToolbarButton(props: ToolbarButtonProps) {
  const { children, controls, value, className, ...rest} = props
  
  return (
    <button className={`${styles} ql-${controls} ${className}`} value={value} {...rest}>
      {children}
    </button>
  );
}
