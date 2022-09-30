import React from 'react';
import Editor, { Quill } from 'react-quill';
import type { Delta, Sources } from 'quill';
import 'quill-mention';
import { Toolbar } from '../Toolbar/Toolbar';
import { createImageBlot, ImageUploader } from '../../modules/image-uploader';
import { replaceIcons } from '../../modules/icons';
import { StyledRichTextEditor } from './RichTextEditor.styles';
import { ToolbarControl } from '../Toolbar/controls';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
import { DEFAULT_CONTROLS } from './default-control';

const InlineBlot = Quill.import('blots/block');
const ImageBlot = createImageBlot(InlineBlot);
Quill.register({ 'formats/imageBlot': ImageBlot });
Quill.register('modules/imageUploader', ImageUploader);

const icons = Quill.import('ui/icons');
replaceIcons(icons);

function defaultImageUpload(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

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

export const RichTextEditor = (props: RichTextEditorProps) => {
  const {
    value,
    defaultValue,
    onChange,
    controls = DEFAULT_CONTROLS,
    labels = DEFAULT_LABELS,
    mentions,
    onImageUpload = defaultImageUpload,
    modules: externalModules,
    formats,
    readOnly = false,
    ...others
  } = props;

  const modules = React.useMemo(
    () => ({
      ...externalModules,
      ...{ toolbar: `#toolbar` },
      mention: mentions,
      imageUploader: {
        upload: (file: File) => onImageUpload(file),
      },
    }),
    [mentions, externalModules, onImageUpload]
  );

  return (
    <StyledRichTextEditor {...others}>
      <Toolbar
        readOnly={readOnly}
        controls={controls}
        labels={labels}
        id="toolbar"
      />

      <Editor
        theme="snow"
        modules={modules}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        scrollingContainer="html"
        formats={formats}
      />
    </StyledRichTextEditor>
  );
};
