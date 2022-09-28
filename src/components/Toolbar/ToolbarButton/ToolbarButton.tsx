import { CSS } from '@laodeaksarr/design-system';
import React from 'react';
import { StyledToolbarButton } from './TollbarButton.styles';

interface ToolbarButtonProps {
  children: React.ReactNode;
  controls?: string;
  value?: string;
  title?: string;
  css?: CSS;
}

export function ToolbarButton({
  children,
  controls,
  value,
  ...others
}: ToolbarButtonProps) {
  return (
    <StyledToolbarButton className={`ql-${controls}`} value={value} {...others}>
      {children}
    </StyledToolbarButton>
  );
}
