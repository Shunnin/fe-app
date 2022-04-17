declare module '*.svg' {
  import React from 'react';

  // eslint-disable-next-line init-declarations
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  // eslint-disable-next-line init-declarations
  const src: string;
  export default src;
}
