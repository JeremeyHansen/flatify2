import Typewriter from 'typewriter-effect';

function About() {
  return (
    <>
      <div className="saved-music-typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('About').start()
          }}
        />
      </div>
    <div className="about-container">
      <div className="column">
        <img
          className="about-image1"
          src="http://25.media.tumblr.com/7fe9098cae355cef72e99f1484ee8d4c/tumblr_mkji5pPYqk1r4mh0bo1_r1_500.gif"
          alt="Welcome to Flatify"
        />
      </div>
      <p className="about-text">
        The dance floor is in trouble once <span>Tim, Jeremey, and Andy</span> join the
        party. Who are Tim, Jeremey, and Andy you may ask? They are previous
        senior devs at Apple and care the brilliant minds behind Flatify. Taking
        advantage of Spotify's API, they have built an all-in-one music
        streaming platform to search and save all of your favorite songs for
        when you are ready to boogie.
      </p>
      <div className="column">
        <img
          className="about-image2"
          src="http://25.media.tumblr.com/7fe9098cae355cef72e99f1484ee8d4c/tumblr_mkji5pPYqk1r4mh0bo1_r1_500.gif"
          alt="Welcome to Flatify"
        />
      </div>
    </div>
    </>
  )
}

export default About
