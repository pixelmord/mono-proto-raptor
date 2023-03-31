import { DefaultElement } from 'slate-react';

import { EditorPlugin } from '../utils/compose-plugins';

export const typographyBlocksPlugin: EditorPlugin = (editableProps) => {
  return {
    editableProps: {
      ...editableProps,
      renderElement: (props) => {
        const { element, children, attributes } = props;
        const style = { textAlign: element.align || 'left' };
        switch (element.type) {
          case 'paragraph':
            return (
              <p style={style} {...attributes}>
                {children}
              </p>
            );
          case 'heading':
            switch (element.level) {
              case 1:
                return (
                  <h1 style={style} {...attributes}>
                    {children}
                  </h1>
                );
              case 2:
                return (
                  <h2 style={style} {...attributes}>
                    {children}
                  </h2>
                );
              case 3:
                return (
                  <h3 style={style} {...attributes}>
                    {children}
                  </h3>
                );
              case 4:
                return (
                  <h4 style={style} {...attributes}>
                    {children}
                  </h4>
                );
              case 5:
                return (
                  <h5 style={style} {...attributes}>
                    {children}
                  </h5>
                );
              case 6:
                return (
                  <h6 style={style} {...attributes}>
                    {children}
                  </h6>
                );
            }
          case 'block-quote':
            return (
              <blockquote style={style} {...attributes}>
                {children}
              </blockquote>
            );
          case 'bulleted-list':
            return (
              <ul style={style} {...attributes}>
                {children}
              </ul>
            );
          case 'list-item':
            return (
              <li style={style} {...attributes}>
                {children}
              </li>
            );
          case 'numbered-list':
            return (
              <ol style={style} {...attributes}>
                {children}
              </ol>
            );
          default:
            return editableProps.renderElement?.(props) || <DefaultElement {...props} />;
        }
      },
    },
  };
};
