import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await import('./About.page'))
