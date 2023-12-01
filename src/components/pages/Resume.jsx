export default function Resume() {
const pdfUrl = '/public/resume.pdf';
    return (
      <div>
        <section className="resume">
        <a href={pdfUrl} download="your_resume.pdf">Download Resume</a>
        </section>
      </div>
    );
  }
  