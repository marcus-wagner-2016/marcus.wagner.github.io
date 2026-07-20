function App() {
  return (
    <>
      <header>
        <h1>Marcus Wagner</h1>
        <p className="subtitle">Portfolio</p>
      </header>

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

      <footer>
        <p>&copy; {new Date().getFullYear()} Marcus Wagner</p>
      </footer>
    </>
  )
}

export default App
