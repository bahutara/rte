import React from "react";
import Editor, { Quill } from "react-quill";
import type { Delta, Sources } from "quill";
import "quill-mention";
import { useId } from "@mantine/hooks";
import { Toolbar } from "../Toolbar/Toolbar";
import { createImageBlot, ImageUploader } from "../../modules/image-uploader";
import { replaceIcons } from "../../modules/icons";
import { StyledRichTextEditor } from "./RichTextEditor.styles";
import { ToolbarControl } from "../Toolbar/controls";
import { RichTextEditorLabels } from "./default-labels";

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
  controls?: ToolbarControl[][];
  labels?: RichTextEditorLabels;
  mentions?: Record<string, any>;
  modules?: Record<string, any>;
  formats?: string[];
}

export const RichTextEditor = (props: RichTextEditorProps) => {
  const {
    id,
    value,
    defaultValue,
    onChange,
    controls,
    labels,
    mentions,
    modules: externalModules,
    formats,
    ...others
  } = props;

  const uuid = useId(id);

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

  return (
    <StyledRichTextEditor {...others}>
      <Toolbar controls={controls} labels={labels} id={uuid} />

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
}
