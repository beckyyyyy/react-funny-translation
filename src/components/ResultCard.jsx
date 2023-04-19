import styles from "styles/resultCard.module.css"
import { Avatar } from "components/Avatar"
import { useTranslate } from "contexts/TranslateContext"
import { voiceAPI } from "api/translationAPI"
import { useState } from "react"

const Btn = ({ text, onClick }) => {
  return (
    <button className={styles.toolBtn} onClick={onClick}>
      {text}
    </button>
  )
}

export const ResultCard = () => {
  const { language, setLanguage, setStep, translatedText } = useTranslate()
  const [audioUrl, setAudioUrl] = useState("")

  const handlePlayAudio = async () => {
    try {
      const audio = await voiceAPI(translatedText)
      const blob = new Blob([audio], { type: "audio/mpeg" })
      const url = URL.createObjectURL(blob)
      setAudioUrl(url)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(translatedText)
    alert("copy success!")
  }

  const handleBackClick = () => {
    setStep("1")
    setLanguage("")
  }

  return (
    <div className={styles.resultCardContainer}>
      <div className={styles.resultContainer}>
        <Avatar language={language} />
        <div className={styles.resultBox}>
          <p className={styles.resultText}>{translatedText}</p>
          <div className={styles.toolBox}>
            <audio src={audioUrl}>123</audio>
            <Btn text="play" onClick={handlePlayAudio} />
            <audio src={audioUrl} autoPlay />
            <Btn text="copy" onClick={handleCopyClick} />
          </div>
        </div>
      </div>
      <p className={styles.backBtn} onClick={handleBackClick}>
        Back ➜
      </p>
    </div>
  )
}
