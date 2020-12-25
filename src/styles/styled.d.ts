import 'styled-components';

import darkTheme from './themes/dark';

export type Theme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
