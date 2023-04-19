import styles from "styles/inputBox.module.css"
import { useTranslate } from "contexts/TranslateContext"

export const InputBox = ({ inputValue, onChange }) => {
  const { language } = useTranslate()
  let placeholderText = `Translate English to ${language} ...`

  return (
    <div className={styles.inputBoxContainer}>
      <textarea
        className={styles.inputText}
        maxLength="200"
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => {
          onChange?.(e.target.value)
        }}
      ></textarea>
    </div>
  )
}
