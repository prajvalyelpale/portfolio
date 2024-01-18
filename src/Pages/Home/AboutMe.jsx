export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img className="hero--section--img" src="./img/about_me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Passionate full-stack developer specializing in the MERN stack, with a strong foundation in software engineering. Committed to continuous learning and staying abreast of cutting-edge technologies. Adept at translating innovative ideas <img width="20" src="https://img.icons8.com/parakeet/48/idea.png" alt="idea" /> into robust, scalable solutions.
          </p>
          <p className="hero--section-description">
            Experienced in competitive programming, showcasing analytical and problem-solving skills. Eager to contribute my expertise to dynamic projects and collaborate with like-minded professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
