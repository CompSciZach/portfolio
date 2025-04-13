export default function Header() {
    return (
      <header className="header">
        <h1 className="title">Zach Dube</h1>
        <h2 className="subtitle">Software Developer</h2>
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>
    );
  }