import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="about">
          <h2>About</h2>
          <p>A short introduction goes here.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul className="projects-list">
            <li>
              <h3>Project Name</h3>
              <p>A short description of the project.</p>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            <a href="mailto:you@example.com">you@example.com</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
