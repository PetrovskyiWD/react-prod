import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
  const { t } = useTranslation()

  return <div>{t('about_page')}</div>
}

export default AboutPage
