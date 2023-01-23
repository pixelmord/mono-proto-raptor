'use client';

import dynamic from 'next/dynamic';
import type { Descendant } from 'page-editor';
import { useCallback, useState } from 'react';

const PageEditor = dynamic(() => import('page-editor').then((mod) => mod.PageEditor), { ssr: false });
export const Editor = () => {
  const [value, setValue] = useState<Descendant[]>([{ children: [{ text: 'default text' }] }]);
  const changeHandler = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <>
      <PageEditor
        onChange={changeHandler}
        className="min-w-full border rounded border-slate-300 p-5 shadow"
        document={value}
      />
      <pre className="block p-5 bg-slate-100">
        <code>{JSON.stringify(value, null, 2)}</code>
      </pre>
    </>
  );
};
