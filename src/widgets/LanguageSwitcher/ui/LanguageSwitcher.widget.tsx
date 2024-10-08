import { type FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui'

import styles from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

export enum Languages {
  EN = 'en',
  UA = 'ua'
}

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const changeLang = (langCode: Languages): void => {
    i18n.changeLanguage(langCode).catch((err) => {
      throw err
    })
  }

  return (
    <div className={styles.group}>
      {Object.values(Languages).map((l) => (
        <Button
          key={l}
          className={cn(styles.lang, [], { [styles['lang-active']]: l === i18n.language })}
          variant={ButtonVariant.CLEAR}
          onClick={() => {
            changeLang(l)
          }}
        >
          {l.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
