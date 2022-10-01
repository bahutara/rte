import { CSS } from '@bahutara/design-system';
import type { ToolbarControl } from './controls';
import type { RichTextEditorLabels } from '../RichTextEditor/default-labels';

export interface ToolbarProps {
    controls?: ToolbarControl[][];
    labels?: RichTextEditorLabels;
    id?: string;
    css?: CSS;
    readOnly?: boolean;
  }
  