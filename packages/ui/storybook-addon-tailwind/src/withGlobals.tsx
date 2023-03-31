/* eslint-disable react-hooks/rules-of-hooks */
import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
import { useEffect, useGlobals } from '@storybook/preview-api';
import { PARAM_KEY } from './constants';

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
  const isActive = [true, 'true'].includes(globals[PARAM_KEY]);
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === 'docs';
  // const { theme } = context.globals;

  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selector = isInDocs ? `#anchor--${context.id} .sb-story` : '#storybook-root';

    displayToolState(selector, isActive);
  }, [context.id, isActive, isInDocs]);

  return StoryFn();
};

function displayToolState(selector, darkMode: boolean) {
  const rootElements = document.querySelectorAll(selector);
  rootElements.forEach((rootElement) => {
    if (darkMode) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  });
}
