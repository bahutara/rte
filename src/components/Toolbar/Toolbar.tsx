import React from 'react';
import { CONTROLS } from './controls';
import * as Styled from './Toolbar.styles';
import type { ToolbarProps } from './Toolbar.types';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';

export function Toolbar(props: ToolbarProps) {
  const { controls, labels, readOnly, ...rest } = props
  
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
    <Styled.Toolbar readOnly={readOnly} {...rest}>
      <Styled.ToolbarInner>{groups}</Styled.ToolbarInner>
    </Styled.Toolbar>
  );
}
