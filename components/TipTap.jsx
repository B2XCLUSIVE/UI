"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "w-full p-8",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
