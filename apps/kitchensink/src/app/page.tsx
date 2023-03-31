import { Button, H1, Container } from '@prestyled/elements';

export default function Home() {
  return (
    <Container>
      <H1>
        Kitchensink ⏲ <br className="hidden lg:block" />
        <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent ">
          Example
        </span>
      </H1>
      <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
        <Button>{'hello'}</Button>
      </div>
    </Container>
  );
}
