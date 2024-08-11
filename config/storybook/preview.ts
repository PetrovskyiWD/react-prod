import type { Preview } from '@storybook/react'

import 'app/styles/index.scss'
import GlobalDecorator from 'shared/config/storybook/GlobalDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark']
      },
      control: {
        type: 'boolean'

      }
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        title: 'Lang',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ua', title: 'Ukraine' }
        ],
        showName: true
      }
    }
  },
  decorators: [GlobalDecorator]
}

export default preview
