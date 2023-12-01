export default function Resume() {
const pdfUrl = '/public/resume.pdf';
    return (
      <div>
        <section className="resume">
        <a href={pdfUrl} download="your_resume.pdf">Download Resume</a>   
        <br />
        <br />
<h3>Front-end Proficiencies</h3>
<ul>
    <li>Bulma (CSS Framework)</li>
    <li>JSON</li>
    <li>Fetch</li>
    <li>AJAX</li>
    <li>Day.js</li>
    <li>Third Party API</li>
    <li>SDKs</li>
    <li>Server-Side API</li>
    <li>Web API</li>
    <li>jQuery</li>
    <li>Bootstrap (Framework)</li>
    <li>Developer Tools (Elements, Console, Network, Sources, Application, etc)</li>
    <li>JavaScript</li>
    <li>Cascading Style Sheets</li>
    <li>HTML5</li>
</ul>

<h3>Back-end Proficiencies</h3>
<ul>
    <li>REST APIs</li>
    <li>Node</li>
    <li>Express</li>
    <li>MySQL, Sequalize</li>
    <li>MongoDB, Mongoose</li>
</ul>

<h3>Other Proficiencies</h3>
<ul>
    <li>GitHub</li>
    <li>Git</li>
    <li>Command Line</li>
    <li>Pseudocode</li>
    <li>Problem Solving</li>
</ul>
        </section>
      </div>
    );
  }
  