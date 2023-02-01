import DefaultHeadTags from './DefaultHeadTags';

export default function Head() {
  return (
    <>
      <DefaultHeadTags />
      <title>Proto Raptor Kitchensink</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Project tools for the future" />
    </>
  );
}
