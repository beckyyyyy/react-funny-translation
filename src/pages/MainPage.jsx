import styles from "styles/mainPage.module.css"
import { Card } from "components/Card"
import { ResultCard } from "components/ResultCard"
import { useTranslate } from "contexts/TranslateContext"

export const MainPage = () => {
  const { step } = useTranslate()
  if (step === "1") {
    return (
      <div className={`${styles.mainContainer} ${styles.stepOne}`}>
        <Card />
      </div>
    )
  } else if (step === "2") {
    return (
      <div className={`${styles.mainContainer} ${styles.stepTwo}`}>
        <ResultCard />
      </div>
    )
  }
}
