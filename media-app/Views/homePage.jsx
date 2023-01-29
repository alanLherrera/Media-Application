const React = require ('react')
import  Frame  from './Frame'
import New from './mediaPage/new'

const homePage = () => {
return(
   
      <html>
        <Frame>
    <head>
       
        <title>Your Favorites</title>
        
        
    </head>
    </Frame> 
    <New></New>
    <body>
      <div className="row">
        <div className="column">
            <div className="card">
                <img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider-Man: No Way Home" className="d-md-flex mx-auto"/>
                <div className="container">
                    <h2>Spider-Man:No Way Home</h2>
                    <p className="title">December 15, 2021</p>
                    <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
                    <p><button className="button">Learn more</button></p>
                </div>
            </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
            <img src="https://amc-theatres-res.cloudinary.com/v1672403850/amc-cdn/production/2/movies/66200/66246/Poster/Primary_BoxCover_HD_800_1200.jpg" alt="Puss in Boots: The Last Wish" />
            <div className="container">
                <h2>Puss in Boots: The Last Wish</h2>
                <p className="title">December 7, 2022</p>
                <p>Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.</p>
                <p><button className="button">Learn more</button></p>
            </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
            <img src="https://movieguide.b-cdn.net/wp-content/uploads/2012/08/Iron-Giant-Poster-768x1137.jpg" alt="The Iron Giant" />
            <div className="container">
                <h2>The Iron Giant</h2>
                <p className="title">August 6, 1999</p>
                <p>In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.
                    <p><button className="button">Learn more</button></p>
                </p>
            </div>
        </div>
      </div>

        
      
    </body>
</html>
 
   
)
}

module.exports = homePage