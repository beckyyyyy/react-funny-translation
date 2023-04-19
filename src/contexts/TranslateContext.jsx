import { createContext, useContext, useState } from "react"

const TranslateContext = createContext()
export const useTranslate = () => useContext(TranslateContext)

export const CountryProvider = ({ children }) => {
  const [step, setStep] = useState("1")
  const [translatedText, setTranslatedText] = useState("")
  const [language, setLanguage] = useState("")
  return (
    <TranslateContext.Provider
      value={{
        step: step,
        setStep: setStep,
        translatedText: translatedText,
        setTranslatedText: setTranslatedText,
        language: language,
        setLanguage: setLanguage,
      }}
    >
      {children}
    </TranslateContext.Provider>
  )
}
