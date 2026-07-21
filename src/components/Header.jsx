import './header.css';
import Navigation from './Navigation';


function Header() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header-inner">
        <a href="/"><img src={`${import.meta.env.BASE_URL}mw-color-logo.svg`} alt="Marcus Wagner Logo" className="portfolio-logo" /></a>

        <Navigation />
        
      </div>
    </header>
  )
}

export default Header
