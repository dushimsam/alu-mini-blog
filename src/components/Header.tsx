import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo-mark" aria-hidden="true">
          {'</>'}
        </span>
        <span className="header__logo-text">Dev Insights</span>
      </div>

      <nav className="header__nav">
        <a
          className="header__nav-link"
          href="#"
          style={{ fontWeight: 600 }}
          onClick={(e) => e.preventDefault()}
        >
          + New Post
        </a>
      </nav>
    </header>
  )
}

export default Header
