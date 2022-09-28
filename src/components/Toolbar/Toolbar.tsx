import React from 'react';
import type { RichTextEditorLabels } from '../RichTextEditor/default-labels';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';
import { CONTROLS, ToolbarControl } from './controls';
import { StyledToolbar } from './Toolbar.styles';

export interface ToolbarProps {
  controls: ToolbarControl[][];
  labels: RichTextEditorLabels;
  id?: string;
}

export function Toolbar({
  controls,
  labels,
  id,
  ...others
}: ToolbarProps) {

  const groups = controls?.map((group, index) => {
    const items = group
      .filter((item) => CONTROLS[item])
      .map((item) => {
        const Icon = CONTROLS[item].icon;

        return (
          <ToolbarButton
            /*css={{
              '&:first-of-type': {
borderTopLeftRadius: '$1',
      borderBottomLeftRadius:'$1'              },

              '&:last-of-type': {
borderTopRightRadius: '$1',
      borderBottomRightRadius: '$1'              },
            }}*/
            controls={CONTROLS[item].controls}
            value={(CONTROLS[item] as any).value}
            key={item}
            title={labels[item]}
          >
            <Icon size={18} stroke={1.5} />
          </ToolbarButton>
        );
      });

    return (
      <StyledToolbar toolbarGroup key={index}>
        {items}
      </StyledToolbar>
    );
  });

  return (
    <StyledToolbar id={id} toolbar {...others}>
      <StyledToolbar toolbarInner>{groups}</StyledToolbar>
    </StyledToolbar>
  );
}