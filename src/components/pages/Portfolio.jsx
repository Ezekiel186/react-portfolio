import pic1 from '../../../public/images/pick4me.png'
import pic2 from '../../../public/images/github.png'
import pic3 from '../../../public/images/majority-matters.png'
import pic4 from '../../../public/images/weather-api.png'
import pic5 from '../../../public/images/portfolio.png'
import pic6 from '../../../public/images/code-quiz.png'
import pic6 from '../../../public/images/cipher-synergy.png'


export default function Portfolio() {
    return (
      <div>
         <section class="project-container">
            <div class="card0">
            <article id="Project">
                <a href="https://jacastro619.github.io/Pick4Me/?"> <img src={pic1} alt="pick4me-home-page"/></a>
            </article>
            <a href="https://github.com/Jacastro619/Pick4Me"><img id="logo" src={pic2} alt="github-logo" /></a>
            <p>Pick4Me</p>
            </div>
            <div class="card0">
            <article id="Project">
                <a href="https://majority-matters-080972dae02f.herokuapp.com/"><img src={pic3} alt="majority-matters-home-page"/></a>
            </article>
            <a href="https://github.com/jamessahunter/majority-matters"><img id="logo" src={pic2} alt="github-logo" /></a>
            <p>Majority Matters</p>
        </div>
        <div class="card0">
            <article id="Project">
                <a href="https://ezekiel186.github.io/Cipher-Synergy/"><img src={pic7} alt="cipher-synergy-room-1"/></a>
            </article>
            <a href="https://github.com/Ezekiel186/Cipher-Synergy"><img id="logo" src={pic2} alt="github-logo" /></a>
            <p>Project 3</p>
        </div>
        <div class="card0">
            <article id="Project">
                <a href="https://ezekiel186.github.io/challenge-6-serverside-apis/"><img src={pic4} alt="weather-api-website-image"/></a>
            </article>
            <a href="https://github.com/Ezekiel186/challenge-6-serverside-apis"><img id="logo" src={pic2} alt="github-logo" /></a>
            <p>Weather Dashboard</p>
        </div>
        <div class="card0">
            <article id="Project">
                <a href="https://ezekiel186.github.io/portfolio/"><img src={pic5} alt="portfolio-website"/></a>
            </article>
            <a href="https://github.com/Ezekiel186/portfolio"><img id="logo" src={pic2} alt="github-logo" /></a>
            <p>Portfolio</p>
        </div>
        <div class="card0">
            <article id="Project">
                <a href="https://ezekiel186.github.io/challenge-4-code-quiz/"><img src={pic6} alt="code-quiz-website"/></a>
            </article>
            <a href="https://github.com/Ezekiel186/challenge-4-code-quiz"><img id="logo" src={pic2} alt="github-logo" /></a>
            <p>Code Quiz</p>
        </div>
        </section>
      </div>
    );
  } 