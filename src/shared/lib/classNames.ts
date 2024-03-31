type Mods = Record<string, boolean | string>

export function cn(classes: string, additional: string[] = [], mods: Mods = {}): string {
  return [
    classes,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([ className, value ]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}
