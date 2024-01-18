import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div class="main-container">
        <div class="cards">
          <div class="card card-2">
            <div class="card__icon"><h2>Proficient :</h2></div>

            <div className="card-container">
              {data?.prof?.map((item, index) => (
                <div className="icon-box">
                  <img src={item.src} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div class="card card-1">
            <div class="card__icon"><h2>Good knowledge :</h2></div>
            <div className="card-container">
              {data?.gk?.map((item, index) => (
                <div className="icon-box">
                  <img className="glow-on-hover"src={item.src} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div class="card card-3">
            <div class="card__icon"><h2>Familiar :</h2></div>
            <div className="card-container">
              {data?.fam.map((item, index) => (
                <div className="icon-box">
                  <img src={item.src} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profiles">
          {/* {data?.profiles.map((item, index) => (
            <div className="icon-profile">
              <div className="icon-profile-logo">
              <img src={item.src} alt="" />
              </div>
            </div>
          ))} */}
          {data?.profiles.map((item, index) => (
            <a href="https://www.codechef.com/users/prajvalyelpale">
            <div className="icon-profile icon-profile-logo">
            <figure class="icon-profile snip0016">
                <img src={item.src} alt="sample41" />
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank"></a>
              </figcaption>
            </figure>
            </div>
            </a>
          ))}
        </div>
      </div>

      {/* <div className="skills--section--container1">
        <div className="skills--section--card1">
        </div>
      </div>
      <div className="skills--section--container2">
        <div className="skills--section--card2" >
        </div>
      </div> */}
      {/* <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
