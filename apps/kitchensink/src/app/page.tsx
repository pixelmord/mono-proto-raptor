import { Button, H1 } from 'prestyled-elements';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <H1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl xl:text-8xl">
          Kitchensink ⏲ <br className="hidden lg:block" />
          <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent ">
            Example
          </span>{' '}
        </H1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button>{'hello'}</Button>
        </div>
      </main>
    </div>
  );
}
