
import { combineReducers } from "redux"

const songReducer =() => {
  return [
    {
      title: "woman",
      duration: "4:05"
    },
    {
      title: "Westlife",
      duration: "4:05"
    },
    {
      title: "culture",
      duration: "4:05"
    }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
})