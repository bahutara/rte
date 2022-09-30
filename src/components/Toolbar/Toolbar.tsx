import { CSS } from '@laodeaksarr/design-system';
import React from 'react';
import type { RichTextEditorLabels } from '../RichTextEditor/default-labels';
import { CONTROLS, ToolbarControl } from './controls';
import * as Styled from './Toolbar.styles';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';

export interface ToolbarProps {
  controls?: ToolbarControl[][];
  labels?: RichTextEditorLabels;
  id?: string;
  css?: CSS;
  readOnly?: boolean;
}

export function Toolbar({
  controls,
  labels,
  readOnly,
  ...others
}: ToolbarProps) {
  const groups = controls?.map((group, index) => {
    const items = group
      .filter((item) => CONTROLS[item])
      .map((item) => {
        const Icon = CONTROLS[item].icon;

        return (
          <ToolbarButton
            className={Styled.toolbar}
            controls={CONTROLS[item].controls}
            value={(CONTROLS[item] as any).value}
            key={item}
            title={(labels as any)[item]}
          >
            <Icon size={18} stroke={1.5} />
          </ToolbarButton>
        );
      });

    return <Styled.ToolbarGroup key={index}>{items}</Styled.ToolbarGroup>;
  });

  return (
    <Styled.Toolbar readOnly={readOnly} {...others}>
      <Styled.ToolbarInner>{groups}</Styled.ToolbarInner>
    </Styled.Toolbar>
  );
}
