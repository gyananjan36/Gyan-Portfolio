const navItems = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact']

function Header() {
  return (
    <header className="topbar">
      <div className="container navbar">
        <a href="#home" className="nav-logo" aria-label="Gyananjan Bhattacharjee home">
          GB · AI PM
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const href = item === 'Home' ? '#home' : `#${item.toLowerCase()}`
            return (
              <a key={item} href={href} className="nav-link">
                {item}
              </a>
            )
          })}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="nav-button secondary">
            Get in Touch
          </a>
          <a href="#projects" className="nav-button primary">
            View Work
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
