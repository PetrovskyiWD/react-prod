import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTests'

import { createReduxStore } from 'app/providers/StoreProvider'
import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { Provider } from 'react-redux'

export interface IComponentRouterOptions {
  route?: string
  preloadedState?: IStateSchema
}

export default function ComponentRouter(
  component: ReactNode,
  options: IComponentRouterOptions = {}
): ReturnType<typeof render> {
  const { route = '/', preloadedState } = options
  const store = createReduxStore(preloadedState)

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>{component}</Provider>
      </I18nextProvider>
    </MemoryRouter>
  )
}
