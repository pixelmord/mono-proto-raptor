'use client';

import dynamic from 'next/dynamic';
import { useCallback } from 'react';

const PostEditor = dynamic(() => import('post-editor').then((mod) => mod.Editor), { ssr: false });
export const Editor = () => {
  const changeHandler = useCallback(async (api) => {
    const content = await api.saver.save();
    console.log(content);
  }, []);

  return <PostEditor changeHandler={changeHandler} />;
};
