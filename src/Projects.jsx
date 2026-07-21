import Header from './components/Header'
import Footer from './components/Footer'

function Projects() {
  return (
    <>
      <Header />

      <main>
        <section id="hero-projects" className="content-width">
          <h1>Projects</h1>
          <p>Below are some of the projects I have worked on as an independent web developer and as a part of SCORR Marketing.</p>
        </section>



        <section id="projects-section" className="content-width-wide">
          <div className="project-grid">
            <div className="project-item">
              <h2>Clinilabs</h2>
              <img src={`${import.meta.env.BASE_URL}clinilabs.webp`} alt="Clinilabs homepage reading 'Your Pathway to CNS Approval' beside a smiling woman working at a laptop." className="project-image" />
              <p><strong>Company:</strong> SCORR Marketing</p>
              <p><strong>CMS:</strong> WordPress</p>
              <p><strong>Role:</strong> Main Developer</p>
              <a href="https://clinilabs.com/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                View Clinilabs Website
              </a>
            </div>

            <div className="project-item">
              <h2>Empathx</h2>
              <img src={`${import.meta.env.BASE_URL}empathx.webp`} alt="Empathx Clinical Research homepage titled Clinical Site Operations Reimagined with two healthcare professionals reviewing a tablet." className="project-image" />
              <p><strong>Company:</strong> SCORR Marketing</p>
              <p><strong>CMS:</strong> WordPress</p>
              <p><strong>Role:</strong> Main Developer</p>
              <a href="https://www.empathxresearch.com/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                View Empathx Website
              </a>
            </div>

            <div className="project-item">
              <h2>Ephicacy</h2>
              <img src={`${import.meta.env.BASE_URL}ephicacy.webp`} alt="Ephicacy homepage titled The Ephicacy Effect with three circular photos and links for Leading Experts, Flexible Service, and Actionable Data." className="project-image" />
              <p><strong>Company:</strong> SCORR Marketing</p>
              <p><strong>CMS:</strong> WordPress</p>
              <p><strong>Role:</strong> Main Developer</p>
              <a href="https://ephicacy.com/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                View Ephicacy Website
              </a>
            </div>


            <div className="project-item">
              <h2>IDDI</h2>
              <img src={`${import.meta.env.BASE_URL}iddi.webp`} alt="IDDI homepage reading Every Data Point Represents a Patient, That's Why It's IDDI with a silhouetted figure against a warm gradient." className="project-image" />
              <p><strong>Company:</strong> SCORR Marketing</p>
              <p><strong>CMS:</strong> WordPress</p>
              <p><strong>Role:</strong> Main Developer</p>
              <a href="https://iddi.com/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                View IDDI Website
              </a>
            </div>

            <div className="project-item">
              <h2>Kearney Catholic Foundation</h2>
              <img src={`${import.meta.env.BASE_URL}kearney-catholic-foundation.webp`} alt="Kearney Catholic High School Foundation homepage with mission statement over an aerial view of the football field." className="project-image" />
              <p><strong>Company:</strong> Independent Contract</p>
              <p><strong>CMS:</strong> DotNetNuke</p>
              <p><strong>Role:</strong> Assisting Developer. Brought in to update/fix items</p>
              <a href="https://kchsfoundation.org/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                View KCHS Foundation Website
              </a>
            </div>

            <div className="project-item">
              <h2>SCORR Marketing</h2>
              <img src={`${import.meta.env.BASE_URL}scorr-marketing.webp`} alt="SCORR Marketing homepage promoting Your WOW Factor with life science marketing samples and a smiling woman in a blue blazer." className="project-image" />
              <p><strong>Company:</strong> SCORR Marketing</p>
              <p><strong>CMS:</strong> WordPresse</p>
              <p><strong>Role:</strong> Main Developer</p>
              <a href="https://www.scorrmarketing.com/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                View SCORR Marketing Website
              </a>
            </div>

          </div>


          
            
        


          
        </section>

      
       
      </main>

      <Footer />
    </>
  )
}

export default Projects
