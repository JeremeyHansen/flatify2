import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="image-typewriter-container">
          <Typewriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(1000)
                .typeString("$ console.log('helloworld');")
                .pauseFor(1000)
                .deleteAll()
                .typeString('welcome to flatify.')
                .pauseFor(2500)
                .deleteAll()
                .typeString('time to dance')
                .pauseFor(500)
                .typeString(' and sing')
                .pauseFor(500)
                .typeString(' and vibe.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Enjoy.')
                .start()
            }}
          />
            <img
              className="earth"
              src="https://i.gifer.com/5x4Z.gif"
              alt="Welcome to Flatify"
            />
        </div>
      </div>
    </>
  )
}

export default Home
