import React from "react";
import type { RichTextEditorLabels } from "../RichTextEditor/default-labels";
import { CONTROLS, ToolbarControl } from "./controls";
import * as Styled from "./Toolbar.styles";

export interface ToolbarProps {
  controls?: ToolbarControl[][];
  labels?: RichTextEditorLabels;
  id?: string;
}

export function Toolbar({ controls, labels, id, ...others }: ToolbarProps) {
  if(!labels) return
  
  const groups = controls?.map((group, index) => {
    const items = group
      .filter((item) => CONTROLS[item])
      .map((item) => {
        const Icon = CONTROLS[item].icon;

        return (
          <Styled.ToolbarControl
            controls={CONTROLS[item].controls}
            value={(CONTROLS[item] as any).value}
            key={item}
            title={labels[item]}
          >
            <Icon size={18} stroke={1.5} />
          </Styled.ToolbarControl>
        );
      });

    return <Styled.ToolbarGroup key={index}>{items}</Styled.ToolbarGroup>;
  });

  return (
    <Styled.Toolbar id={id} {...others}>
      <Styled.ToolbarInner>{groups}</Styled.ToolbarInner>
    </Styled.Toolbar>
  );
}
