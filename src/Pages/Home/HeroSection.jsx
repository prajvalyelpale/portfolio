export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Prajval</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a Full stack web developer with 
            <br /> an emphasis on responsive web design.
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1NESY7b74ZxD8ckXF6MqdBzQ6W3VxKovY/view?usp=drive_link" target="_blank"><button className="btn btn-primary">Get My Resume</button></a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
