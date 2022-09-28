import React from 'react';
import type { RichTextEditorLabels } from '../RichTextEditor/default-labels';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';
import { CONTROLS, ToolbarControl } from './controls';
import { StyledToolbar } from './Toolbar.styles';

export interface ToolbarProps {
  controls: ToolbarControl[][];
  labels: RichTextEditorLabels;

  /** Make toolbar sticky */
  sticky?: boolean;

  /** Top toolbar position in any valid css value */
  stickyOffset?: number | string;

  /** Id that is used to connect toolbar to editor */
  id?: string;
}

export function Toolbar({
  controls,
  labels,
  stickyOffset = 0,
  sticky = true,
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
          css={{
                    '& + &': {
          borderLeftWidth: 0,
        },

        '&:first-of-type': {
          blr: '$2',
        },

        '&:last-of-type': {
          brr: '$2',
        },

          }}
            controls={CONTROLS[item].controls}
            value={(CONTROLS[item] as any).value}
            key={item}
            title={labels[item]}
            noActive={(CONTROLS[item] as any).noActive}
          >
            <Icon size={18} stroke={1.5} />
          </ToolbarButton>
        );
      });

    return (
      <StyledToolbar toolbarGroup key={index}>        {items}
      </StyledToolbar>
    );
  });

  return (
    <StyledToolbar id={id} toolbar {...others}>
      <StyledToolbar toolbarInner>{groups}</StyledToolbar>
    </StyledToolbar>
  );
}