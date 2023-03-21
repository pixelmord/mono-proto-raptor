'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'prestyled-elements';

import { FormElementText } from '@/components/Form';
import fetchJson from '@/lib/fetchJson';
import { LoginData, LoginDataSchema } from '@/types';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginDataSchema),
  });
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    await fetchJson('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormElementText id="username" label="Username" {...register('username')} error={errors.username} />
      <FormElementText
        id="password"
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password}
      />
      <div className="mt-8">
        <Button type="submit" intent="primary">
          Login
        </Button>
      </div>
    </form>
  );
}
