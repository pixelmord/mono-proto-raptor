'use client';

import dynamic from 'next/dynamic';
import type { Descendant } from 'page-editor';
import { commentLeafPlugin, defaultPropsPlugin, typographyBlocksPlugin, typographyLeafsPlugin } from 'page-editor';
import { useCallback, useState } from 'react';

const PageEditor = dynamic(() => import('page-editor').then((mod) => mod.PageEditor), { ssr: false });
export const Editor = () => {
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'Bibendum est ultricies integer quis auctor elit sed.',
          italic: true,
        },
        { text: 'fooVariable', code: true },
        { text: 'Lectus mauris ultrices eros in cursus' },
        { text: ' turpis', underline: true },
        { text: ' massa.', bold: true },
      ],
    },
  ];
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const [commentMapValue, setCommentMapValue] = useState<Record<string, Descendant[]>>({});
  const changeHandler = useCallback((value) => {
    setValue(value);
  }, []);
  const commentChangeHandler = (commentDocument, commentId) => {
    setCommentMapValue({ ...commentMapValue, [commentId]: commentDocument });
  };

  return (
    <>
      <PageEditor
        onChange={changeHandler}
        onCommentChange={commentChangeHandler}
        comments={commentMapValue}
        className="prose min-w-full rounded border border-slate-300 p-5 shadow"
        document={initialValue}
        plugins={[defaultPropsPlugin, typographyLeafsPlugin, typographyBlocksPlugin, commentLeafPlugin]}
      />
      <div className="flex">
        <pre className="block bg-slate-100 p-5">
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
        <pre className="block bg-slate-300 p-5">
          <code>{JSON.stringify(commentMapValue, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};
