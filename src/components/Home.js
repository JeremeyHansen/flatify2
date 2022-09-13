import Typewriter from "typewriter-effect";

function Home () {
    return (
        <>
        <div className="home-container">
        </div>
        <img className="background-image" src="https://i.pinimg.com/originals/44/3c/71/443c71b7a6b1e3471c76c4ce02f273c2.gif" alt="Welcome to Flatify"/>
        <div className="image-typewriter-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .pauseFor(2000)
                    .typeString("Hello Flat Iron")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcome to Flatify...")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Enjoy.")
                    .pauseFor(3000)
                    .deleteAll()
                    .start();
                }}
            />
        </div>
        </>
    )
}

export default Home;