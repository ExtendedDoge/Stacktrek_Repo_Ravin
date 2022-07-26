import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=movies'

function MoviesListPage() {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                console.log(response)

                const jsonObject = response.data.photos
                const photoList = jsonObject.photo


                const movieList = photoList.map((item) => {
                    return item.title

                }
                )
                console.log(movieList)
                setMovieList(movieList)
            })
    }, [] // note: this array means it will change whenever the this array's content changes. 
        // in our case it is empty meaning nothing will change therefore it will execute once only
    )

    return (
        <div className="App" >
            <header className="App-header">
                <div>
                    <h1>Movies</h1>
                    <p>Welcome to the Movies Search Page  </p>
                    <ul> {
                        movieList.map((item) => {

                            return <li key={item} > {item} </li>
                        }
                        )
                    }
                    </ul>
                </div>
            </header>
        </div>

    )
}

export default MoviesListPage