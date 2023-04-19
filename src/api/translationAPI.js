import axios from "axios"

const transURL = "https://api.funtranslations.com/translate"
const voiceURL =
  "https://api.voicerss.org/?key=97af9550af7b4d008c0db47006f9b67c&hl=en-us&c=MP3&src="

export const translationApi = async (payload) => {
  const { language, text } = payload
  const url = `${transURL}/${language}.json?text=${text}`

  try {
    const res = await axios.get(url)
    return res.data.contents.translated
  } catch (error) {
    if (error.response.status === 429) {
      alert(
        "Sorry, The number of reaching translation API has reached the upper limit. Please try again in another hour"
      )
    }
    console.error(`get translation api failed : ${error}`)
  }
}

export const voiceAPI = async (text) => {
  const url = `${voiceURL}${text}`
  console.log(text)
  try {
    const res = await axios.get(url, {
      responseType: "arraybuffer",
    })
    return res.data
  } catch (error) {
    console.error(`get voice api failed : ${error}`)
  }
}
