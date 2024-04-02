declare module '*.module.scss';

declare module '*.svg' {
  import type * as React from 'react'

  const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >

  export default ReactComponent
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
