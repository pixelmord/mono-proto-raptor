'use client';

import dynamic from 'next/dynamic';
import type { Descendant } from 'page-editor';
import { commentLeafPlugin, defaultPropsPlugin, typographyBlocksPlugin, typographyLeafsPlugin } from 'page-editor';
import { useCallback, useState } from 'react';

const PageEditor = dynamic(() => import('page-editor').then((mod) => mod.PageEditor), { ssr: false });
export const Editor = () => {
  const [value, setValue] = useState<Descendant[]>([
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
  ]);
  const [commentValue, setCommentValue] = useState<{ commentId: string; commentDocument: Descendant[] }>({
    commentId: '',
    commentDocument: [
      {
        type: 'paragraph',
        children: [
          {
            text: '',
          },
        ],
      },
    ],
  });
  const [commentMapValue, setCommentMapValue] = useState<Record<string, Descendant[]>>({});
  const changeHandler = useCallback((value) => {
    setValue(value);
  }, []);
  const commentChangeHandler = useCallback((commentDocument, commentId) => {
    setCommentValue({ commentId, commentDocument });
    setCommentMapValue({ ...commentMapValue, [commentId]: commentDocument });
  }, []);
  console.log(commentMapValue);

  return (
    <>
      <PageEditor
        onChange={changeHandler}
        onCommentChange={commentChangeHandler}
        comments={commentMapValue}
        className="min-w-full border rounded border-slate-300 p-5 shadow prose"
        document={value}
        plugins={[defaultPropsPlugin, typographyLeafsPlugin, typographyBlocksPlugin, commentLeafPlugin]}
      />
      <div className="flex">
        <pre className="block p-5 bg-slate-100">
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
        <pre className="block p-5 bg-slate-300">
          <code>{JSON.stringify(commentValue, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};
