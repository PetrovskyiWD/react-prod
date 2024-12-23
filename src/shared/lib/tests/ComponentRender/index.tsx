import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTests'

export interface IComponentRouterOptions {
  route?: string
}

export default function ComponentRouter(
  component: ReactNode,
  options: IComponentRouterOptions = {}
): ReturnType<typeof render> {
  const { route = '/' } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </MemoryRouter>
  )
}
