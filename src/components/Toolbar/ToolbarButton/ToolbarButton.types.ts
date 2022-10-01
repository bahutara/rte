import React from 'react';
import type { CSS } from '@bahutara/design-system';

export interface ToolbarButtonProps {
  children: React.ReactNode;
  controls?: string;
  value?: string;
  title?: string;
  css?: CSS;
  className?: string;
}
  