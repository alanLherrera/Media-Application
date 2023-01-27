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
    <nav class="navbar">
        <div class="app-title">Media App</div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="#">Movies</a></li>
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