const React = require ('react')

function Frame ()  {
  return(
    <main>
    <html>
<head>
    <title>Navbar</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
              <link rel="stylesheet" href="/css/styles.css"/>
              
</head>
<body>
    <nav className="navbar">
        <div className="app-title">Media App</div>
        <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <div className="navbar-links">
            <ul>
                <li><a href="/">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Music</a></li>
            </ul>
        </div>
    </nav>
</body>
</html>
</main>
  )
}

module.exports = Frame