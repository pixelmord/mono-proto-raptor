'use client';

import dynamic from 'next/dynamic';
import type { Descendant } from 'page-editor';
import { defaultPropsPlugin, typographyBlocksPlugin, typographyLeafsPlugin } from 'page-editor';
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
  const changeHandler = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <>
      <PageEditor
        onChange={changeHandler}
        className="min-w-full border rounded border-slate-300 p-5 shadow prose"
        document={value}
        plugins={[defaultPropsPlugin, typographyLeafsPlugin, typographyBlocksPlugin]}
      />
      <pre className="block p-5 bg-slate-100">
        <code>{JSON.stringify(value, null, 2)}</code>
      </pre>
    </>
  );
};
