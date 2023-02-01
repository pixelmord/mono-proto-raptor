import { H1 } from 'ui';

import LoginForm from './LoginForm';

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <H1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl xl:text-8xl">
          <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent ">
            Login
          </span>
        </H1>
        <div className="mx-auto mt-5 max-w-3xl sm:flex sm:flex-col sm:justify-center md:mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}