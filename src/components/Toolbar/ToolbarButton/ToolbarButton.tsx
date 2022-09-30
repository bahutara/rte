import { CSS } from '@bahutara/design-system';
import React from 'react';
import { StyledToolbarButton } from './TollbarButton.styles';

interface ToolbarButtonProps {
  children: React.ReactNode;
  controls?: string;
  value?: string;
  title?: string;
  css?: CSS;
  className?: string;
}

export function ToolbarButton({
  children,
  controls,
  value,
  className,
  ...others
}: ToolbarButtonProps) {
  return (
    <StyledToolbarButton className={`ql-${controls} ${className}`} value={value} {...others}>
      {children}
    </StyledToolbarButton>
  );
}
