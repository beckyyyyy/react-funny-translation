import styles from "app.module.css"
import { MainPage } from "pages/MainPage"
import { CountryProvider } from "contexts/TranslateContext"

function App() {
  return (
    <div className={styles.appContainer}>
      <CountryProvider>
        <MainPage />
      </CountryProvider>
    </div>
  )
}

export default App
