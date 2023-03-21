import EditorJS, { API, OutputData } from '@editorjs/editorjs';
import { useEffect, useRef } from 'react';

interface EditorProps {
  content?: OutputData;
  changeHandler: (api: API, event: Event) => void;
}

export function Editor({ content = { blocks: [] }, changeHandler }: EditorProps) {
  const ref = useRef<EditorJS | null>(null);

  const isMounted = useRef<boolean>(false);
  const isInitializing = useRef<boolean>(false);

  useEffect(() => {
    if (!isMounted.current && typeof window !== 'undefined') {
      isMounted.current = true;
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const initializeEditor = async () => {
      const EditorJS = (await import('@editorjs/editorjs')).default;
      const Header = (await import('@editorjs/header')).default;
      const Embed = (await import('@editorjs/embed')).default;
      const Table = (await import('@editorjs/table')).default;
      const List = (await import('@editorjs/list')).default;
      const Code = (await import('@editorjs/code')).default;
      const LinkTool = (await import('@editorjs/link')).default;
      const InlineCode = (await import('@editorjs/inline-code')).default;

      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor;
          isInitializing.current = false;
        },
        async onChange(api: API, event: Event) {
          await changeHandler(api, event);
        },
        placeholder: 'Type here to write your post...',
        inlineToolbar: true,
        data: content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    };
    if (isMounted.current && !ref.current && !isInitializing.current) {
      isInitializing.current = true;
      initializeEditor();
    }
    return () => {
      ref.current?.destroy();
    };
  }, [isMounted.current]);

  return <div id="editor" className="min-h-[500px] dark:text-base-200" />;
}
