import styles from "styles/card.module.css"
import { Avatar } from "components/Avatar"
import { SelectBox } from "components/SelectBox"
import { InputBox } from "components/InputBox"
import { useState, useEffect } from "react"
import { translationApi } from "api/translationAPI"
import { useTranslate } from "contexts/TranslateContext"

const Btn = ({ onClick, isDisable }) => {
  return (
    <button
      className={styles.translateBtn}
      onClick={onClick}
      disabled={isDisable}
    >
      Translate
    </button>
  )
}

export const Card = () => {
  const [inputValue, setInputValue] = useState("")
  const [isDisable, setDisable] = useState(true)
  const { setStep, setTranslatedText, language, setLanguage } = useTranslate()

  const handleChange = (language) => {
    setLanguage(language)
  }
  const handleInputChange = (value) => {
    setInputValue(value)
  }
  useEffect(() => {
    if (language && inputValue) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [language, inputValue])

  const handleClick = async () => {
    try {
      const translation = await translationApi({
        language: language,
        text: inputValue,
      })
      setTranslatedText(translation)
      setStep("2")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.cardContainer}>
      <Avatar />
      <SelectBox onChange={handleChange} />
      <InputBox value={inputValue} onChange={handleInputChange} />
      <Btn onClick={handleClick} isDisable={isDisable} />
    </div>
  )
}
