import React from "react";
import Editor, { Quill } from "react-quill";
import type { Delta, Sources } from "quill";
import "quill-mention";
import { useId } from "@mantine/hooks";
import { Toolbar } from "../Toolbar/Toolbar";
import { DEFAULT_CONTROLS } from "./default-control";
import { DEFAULT_LABELS, RichTextEditorLabels } from "./default-labels";
import { ToolbarControl } from "../Toolbar/controls";
import { createImageBlot, ImageUploader } from "../../modules/image-uploader";
import { replaceIcons } from "../../modules/icons";
import { attachShortcuts } from "../../modules/shortcuts";
import { StyledRichTextEditor } from "./RichTextEditor.styles";

export { DEFAULT_LABELS, DEFAULT_CONTROLS };

const InlineBlot = Quill.import("blots/block");
const ImageBlot = createImageBlot(InlineBlot);
Quill.register({ "formats/imageBlot": ImageBlot });
Quill.register("modules/imageUploader", ImageUploader);

const icons = Quill.import("ui/icons");
replaceIcons(icons);

function defaultImageUpload(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export interface RichTextEditorProps {
  id?: any;
  value?: string | Delta;
  defaultValue?: string | Delta;
  onChange?(
    value: string,
    delta: Delta,
    sources: Sources,
    editor: Editor.UnprivilegedEditor
  ): void;
  labels?: RichTextEditorLabels;
  controls?: ToolbarControl[][];
  mentions?: Record<string, any>;
  modules?: Record<string, any>;
  formats?: string[];
}

export const RichTextEditor = React.forwardRef<Editor, RichTextEditorProps>(
  (props: RichTextEditorProps, ref) => {
    const {
      id,
      value,
      defaultValue,
      onChange,
      labels,
      controls,
      mentions,
      modules: externalModules,
      formats,
      ...others
    } = props;

    const uuid = useId(id);
    const editorRef = React.useRef<Editor>();

    const modules = React.useMemo(
      () => ({
        ...externalModules,
        ...(uuid ? { toolbar: { container: `#${uuid}` } } : undefined),
        mention: mentions,
        imageUploader: {
          upload: (file: File) => defaultImageUpload(file),
        },
      }),
      [uuid, mentions, externalModules]
    );

    React.useEffect(() => {
      if (editorRef.current) {
        attachShortcuts(editorRef?.current?.editor?.keyboard);
      }
    }, []);

    return (
      <StyledRichTextEditor {...others}>
        <Toolbar controls={controls} labels={labels} id={uuid} />

        <Editor
          theme="snow"
          modules={modules}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
          scrollingContainer="html"
          formats={formats}
        />
      </StyledRichTextEditor>
    );
  }
);

RichTextEditor.displayName = "RichTextEditor";
