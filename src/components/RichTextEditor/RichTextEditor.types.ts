import type { Delta, Sources } from 'quill';
import type Editor from 'react-quill';
import type { ToolbarControl } from '../Toolbar/controls';
import { RichTextEditorLabels } from './default-labels';

export interface RichTextEditorProps {
  value?: string | Delta;
  defaultValue?: string | Delta;
  onChange?(
    value: string,
    delta: Delta,
    sources: Sources,
    editor: Editor.UnprivilegedEditor
  ): void;
  onImageUpload?(image: File): Promise<string>;
  controls?: ToolbarControl[][];
  labels?: RichTextEditorLabels;
  mentions?: Record<string, any>;
  modules?: Record<string, any>;
  formats?: string[];
  readOnly?: boolean;
}
