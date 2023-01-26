const react = ('react')

function frame  (html)  {
  return(
    <html>
          <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
              <link rel="stylesheet" href="/css/style.css"/>
          </head>
          <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Movie's</a>
                    </li>
                    <li>
                        <a href="/">Show's</a>
                    </li>
                    <li>
                        <a href="/">Music</a> 
                    </li>
                </ul>
            </nav>
              {html.children}
          </body>
      </html>
  )
}

export default frame