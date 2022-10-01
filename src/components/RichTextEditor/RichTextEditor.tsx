import React from 'react';
import Editor, { Quill } from 'react-quill';
import 'quill-mention';
import { Toolbar } from '../Toolbar/Toolbar';
import { createImageBlot, ImageUploader } from '../../modules/image-uploader';
import { replaceIcons } from '../../modules/icons';
import { StyledRichTextEditor } from './RichTextEditor.styles';
import { DEFAULT_LABELS } from './default-labels';
import { DEFAULT_CONTROLS } from './default-control';
import { attachShortcuts } from '../../modules/shortcuts';
import { mergeRefs } from '../../modules/useMergeRef';
import { RichTextEditorProps } from './RichTextEditor.types';

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

export const RichTextEditor = React.forwardRef<Editor, RichTextEditorProps>(
  (props: RichTextEditorProps, ref) => {
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

    const editorRef = React.useRef<Editor>();

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

    React.useEffect(() => {
      if (editorRef.current) {
        attachShortcuts(editorRef?.current?.editor?.keyboard);
      }
    }, []);

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
          ref={mergeRefs([editorRef, ref])}
          defaultValue={defaultValue}
          onChange={onChange}
          scrollingContainer="html"
          formats={formats}
        />
      </StyledRichTextEditor>
    );
  }
);
