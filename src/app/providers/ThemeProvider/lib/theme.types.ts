export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export interface IUseThemeResult {
  theme: Theme
  toggleTheme: () => void
}
