import React from 'react';
import { StyledToolbarButton } from './TollbarButton.styles';

interface ToolbarButtonProps {
  /** Control icon */
  children: React.ReactNode;

  /** Quill specific control */
  controls?: string;

  /** Value for quill control */
  value?: string;

  /** Disable active styles */
  noActive?: boolean;

  title?: string;
}

export function ToolbarButton({ children, ...others }: ToolbarButtonProps) {
  return <StyledToolbarButton {...others}>{children}</StyledToolbarButton>;
}
