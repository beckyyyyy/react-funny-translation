import styles from "styles/avatar.module.css"
import { useTranslate } from "contexts/TranslateContext"

export const Avatar = () => {
  const { language } = useTranslate()
  return (
    <div className={styles.avatarContainer}>
      {language ? (
        <img src={require(`images/${language}.png`)} alt={language} />
      ) : (
        <img
          className={styles.translatingImg}
          src={require(`images/translating.png`)}
          alt=""
        />
      )}
    </div>
  )
}
