import Typewriter from 'typewriter-effect'

function SavedMusic() {
  return (
    <div className="saved-music-typewriter-container">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Saved Music').start()
        }}
      />
    </div>
  )
}

export default SavedMusic
