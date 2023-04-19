import styles from "styles/selectBox.module.css"
import { languages } from "components/data"

export const SelectBox = ({ onChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.selectBox}
        onChange={(e) => {
          onChange?.(e.target.value)
        }}
      >
        <option value="">Choose a language</option>
        {languages.map((l) => {
          return (
            <option key={l.value} value={l.value}>
              {l.valueName}
            </option>
          )
        })}
      </select>
    </div>
  )
}
