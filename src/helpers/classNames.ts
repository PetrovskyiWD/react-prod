type Mods1 = { [key: string]: boolean }
type Mods = Record<string, boolean | string>

export function classNames(classes: string, mods: Mods, additional?: string[]): string {
  return [
    classes,
    ...Object.entries(mods)
      .filter(([ className, value ]) => Boolean(value))
      .map(([className, value]) => className),
    ...additional,
  ].join(' ')
}
