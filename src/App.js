import './App.css';
import imgArrow from './images/arrow.svg';
import imgBash from './images/bash.svg';
import imgCss from './images/css.svg';
import imgDocker from './images/docker.svg';
import imgGithub from './images/github.svg';
import imgHtml from './images/html.svg';
import imgJest from './images/jest.svg';
import imgJs from './images/js.svg';
import imgMysql from './images/mySQL.svg';
import imgReact from './images/react.svg';
import imgScrum from './images/scrum.svg';

function App() {
  return (
      <body>
        <header>
          <a id="#top" href="#top">
            <h1 id='nameOnHeader'> Igor Marinho</h1>
          </a>
          <ul id="menu">
            <a href="#about">
              <li>
                About Me
              </li>
            </a>
            <a href="#education">
              <li>
                Education
              </li>
            </a>
            <a href="#projects">
              <li>
                Projects
              </li>
            </a>
            <a href="#contact">
              <li>
                Contact
              </li>
            </a>
          </ul>
        </header>
        <main>
          <section id="welcome">
            <h1 id="welcomeText"> Hi, I'm </h1>
            <h1 id="myName">Igor Marinho</h1>
            <h2 id="subText">Curios by nature, web developer for passion.</h2>
            <div id="welcomeBtnsDiv">
              <a href="#top" class="btnsAnchor">
                <p class="welcomeBtns">Resume</p>
              </a>
              <a href="#contact" class="btnsAnchor">
                <p class="welcomeBtns">Contact</p>
              </a>
            </div>
            <div id="arrowDiv">
              <a id="arrow" href="#about">
              <img src={imgArrow} alt="arrow down" id="arrowImg"/>
              </a>
            </div>
          </section>
          <section id="about">
            <h1 class="sectionTitle">About</h1>
            <div id="aboutTextDiv">
              <p class="aboutText">I'm a former civil engineer who was missing the thrill of programming, then decided to change careers.</p>
              <p class="aboutText">Today I am a <span>full-stack web developer</span> formed by Trybe.</p>
            </div>
            <h2 id="sectionSubTitle">Tool's Box</h2>
            <div id="boxsDivs">
              <article class="tools">
                <h2 class="titleTools">FrontEnd</h2>
                <div class="iconDiv" id="html">
                  <img src={imgHtml} class="icons" alt="HTML Icon"/>
                </div>
                <div class="iconDiv" id="css">
                  <img src={imgCss} class="icons" alt="CSS Icon"/>
                </div>
                <div class="iconDiv" id="js">
                  <img src={imgJs} class="icons" alt="JavaScript Icon"/>
                </div>
                <div class="iconDiv" id="react">
                  <img src={imgReact} class="icons" alt="React Icon"/>
                </div>
              </article>
              <article class="tools">
                <h2 class="titleTools">BackEnd</h2>
                <div class="iconDiv" id="docker">
                  <img src={imgDocker} class="icons" alt="Docker Icon"/>
                </div>
                <div class="iconDiv" id="mysql">
                  <img src={imgMysql} class="icons" alt="mySQL Icon"/>
                </div>
              </article>
              <article class="tools">
                <h2 class="titleTools">Other Tools</h2>
                <div class="iconDiv" id="bash">
                  <img src={imgBash} class="icons" alt="Bash Icon"/>
                </div>
                <div class="iconDiv" id="github">
                  <img src={imgGithub} class="icons" alt="GitHub Icon"/>
                </div>
                <div class="iconDiv" id="scrum">
                  <img src={imgScrum} class="icons" alt="SCRUM Icon"/>
                </div>
                <div class="iconDiv" id="jest">
                  <img src={imgJest} class="icons" alt="Jest Icon"/>
                </div>
              </article>
            </div>
          </section>
          <section id="education">
            <div id="timelineDiv">
              <h1 id="educationTitle">Education</h1>
              <div class="educationExperience">
                <div class="leftEducation">
                  <h1 class="school">Federal University of Bahia - UFBA</h1>
                  <h2 class="educationYear">2026</h2>
                </div>
                <div class="rightEducation">
                  <h1 class="graduation">Bachelor in Computer Science</h1>
                </div>
              </div>
              <div class="educationExperience">
                <div class="leftEducation">
                  <h1 class="school">TRYBE</h1>
                  <h2 class="educationYear">2022</h2>
                </div>
                <div class="rightEducation">
                  <h1 class="graduation">Ful Stack Web Development</h1>
                  <p class="educationDescription">HTML - CSS - JavaScript - React - Redux - React Testing Library - Docker - MySQL - Bash - GitHub - SCRUM - JEST</p>
                </div>
              </div>
              <div class="educationExperience">
                <div class="leftEducation">
                  <h1 class="school">University Salvador - UNIFACS</h1>
                  <h2 class="educationYear">2016</h2>
                </div>
                <div class="rightEducation">
                <h1 class="graduation">Bachelor in Civil Engineering</h1>
                <p class="educationDescription">Leadership - Project Management</p>
                </div>
              </div>
            </div>
          </section>
          <section id="projects">
            <h1 class="projectTitle">Projects</h1>
            <div id="cardsDiv">
              <div class="sectorDiv">
                <h1>Front End Projects</h1>
                <div class="cardLimits">
                  <div class="card">
                    <div class="cardContent">
                      <h2 class="cardTitle">Título</h2>
                      <p class="cardText"> texto do cartão asdasdasda asda asda sda sda sda sda sda sdas dasda sda da sda sda sda sda da sda sda dasdasda sda sdas dasda sd</p>
                      <a href="#top" class="cardButton">Live</a>
                      <a href="#top" class="cardButton">Code</a>
                    </div>
                    <div class="tagsDiv">
                      <img src={imgHtml} alt="HTML Icon" class="tag" title="HTML 5" id="tag1"/>
                      <img src={imgCss} alt="HTML Icon" class="tag" title="CSS 3"/>
                    </div>
                  </div>
                </div>
                <div class="cardLimits">
                  <div class="card">
                    <div class="cardContent">
                      <h2 class="cardTitle">Título</h2>
                      <p class="cardText"> texto do cartão asdasdasda asda asda sda sda sda sda sda sdas dasda sda da sda sda sda sda da sda sda dasdasda sda sdas dasda sd</p>
                      <a href="#top" class="cardButton">Live</a>
                      <a href="#top" class="cardButton">Code</a>
                    </div>
                    <div class="tagsDiv">
                      <img src={imgHtml} alt="HTML Icon" class="tag" title="HTML 5"/>
                      <img src={imgCss} alt="HTML Icon" class="tag" title="CSS 3"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sectorDiv">
                <h1>Back End Projects</h1>
                <div class="cardLimits">
                  <div class="card">
                    <div class="cardContent">
                      <h2 class="cardTitle">Título</h2>
                      <p class="cardText"> texto do cartão asdasdasda asda asda sda sda sda sda sda sdas dasda sda da sda sda sda sda da sda sda dasdasda sda sdas dasda sd</p>
                      <a href="#top" class="cardButton">Live</a>
                      <a href="#top" class="cardButton">Code</a>
                    </div>
                    <div class="tagsDiv">
                      <img src={imgHtml} alt="HTML Icon" class="tag" title="HTML 5"/>
                      <img src={imgCss} alt="HTML Icon" class="tag" title="CSS 3"/>
                    </div>
                  </div>
                </div>
                <div class="cardLimits">
                  <div class="card">
                    <div class="cardContent">
                      <h2 class="cardTitle">Título</h2>
                      <p class="cardText"> texto do cartão asdasdasda asda asda sda sda sda sda sda sdas dasda sda da sda sda sda sda da sda sda dasdasda sda sdas dasda sd</p>
                      <a href="#top" class="cardButton">Live</a>
                      <a href="#top" class="cardButton">Code</a>
                    </div>
                    <div class="tagsDiv">
                      <img src={imgHtml} alt="HTML Icon" class="tag" title="HTML 5"/>
                      <img src={imgCss} alt="HTML Icon" class="tag" title="CSS 3"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sectorDiv">
                <h1>Tests Projects</h1>
                <div class="cardLimits">
                  <div class="card">
                    <div class="cardContent">
                      <h2 class="cardTitle">Título</h2>
                      <p class="cardText"> texto do cartão asdasdasda asda asda sda sda sda sda sda sdas dasda sda da sda sda sda sda da sda sda dasdasda sda sdas dasda sd</p>
                      <a href="#top" class="cardButton">Live</a>
                      <a href="#top" class="cardButton">Code</a>
                    </div>
                    <div class="tagsDiv">
                      <img src={imgHtml} alt="HTML Icon" class="tag" title="HTML 5"/>
                      <img src={imgCss} alt="HTML Icon" class="tag" title="CSS 3"/>
                    </div>
                  </div>
                </div>
                <div class="cardLimits">
                  <div class="card">
                    <div class="cardContent">
                      <h2 class="cardTitle">Título</h2>
                      <p class="cardText"> texto do cartão asdasdasda asda asda sda sda sda sda sda sdas dasda sda da sda sda sda sda da sda sda dasdasda sda sdas dasda sd</p>
                      <a href="#top" class="cardButton">Live</a>
                      <a href="#top" class="cardButton">Code</a>
                    </div>
                    <div class="tagsDiv">
                      <img src={imgHtml} alt="HTML Icon" class="tag" title="HTML 5"/>
                      <img src={imgCss} alt="HTML Icon" class="tag" title="CSS 3"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <h1 id="contactTitle">Contact Me</h1>
          </section>
        </main>
      </body>
  );
}

export default App;
