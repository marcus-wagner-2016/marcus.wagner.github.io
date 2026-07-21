import Header from './components/Header'
import Footer from './components/Footer'

function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="hero" className="content-width">
          <h1>Hello, my name is Marcus Wagner and I am a web developer based out of Nebraska.</h1>
        </section>


        <section id="about" className="content-width">
          <h2>About Me</h2>
          <p>I have 7 years of web development experience, ranging from front-end to back-end technologies. I enjoy creating efficient and scalable web applications. Most of my experience is within WordPress, but I also have experience working in HubSpot, Salesforce and have been dabbling in React.</p>

          <a href={`${import.meta.env.BASE_URL}marcus-wagner-resume.pdf`} className="portfolio-button" target="_blank" rel="noopener noreferrer">View My Resume</a>
        </section>


        <section id="projects" className="content-width">
          <h2>Projects</h2>
          <p>Over the past 7 years, I have worked on a handful of projects, most while I have been employed at <a href="https://www.scorrmarketing.com/" target="_blank" rel="noopener noreferrer">SCORR Marketing</a>. Click on the link below to view the projects.</p>

          <a href={`${import.meta.env.BASE_URL}marcus-wagner-resume.pdf`} className="portfolio-button" target="_blank" rel="noopener noreferrer">View Projects</a>
        </section>


        <section id="contact" className="content-width">
          <h2>Contact</h2>
          <p>If you would like to get in touch, please click the link below to fill out the form.</p>
          <a href={`${import.meta.env.BASE_URL}contact-form.html`} className="portfolio-button" target="_blank" rel="noopener noreferrer">Contact Me</a>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Home
