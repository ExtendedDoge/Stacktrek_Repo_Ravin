import { useEffect, useState } from 'react';
import Tourist from './Tourist';
import axios from 'axios';


const url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=touristspots"

function TouristAttractions() {

    const [areaList, setAreaList] = useState([])

    useEffect(() => {
            axios.get(url)
                .then(function(response) {
                    console.log(response)

                    const areaObject = response.data.photos
                    const photoList = areaObject.photo
                    
                    const areaList = photoList.map((item) => {
                        const imageUrl = "https://live.staticflickr.com";
                        const imageFormat = "jpg";

                        return new Tourist({
                            title: item.title,
                            imageUrl: `${imageUrl}/${item.server}/${item.id}_${item.secret}.${imageFormat}`
                        })
    
                        }
                    )
                    setAreaList(areaList)
                })
                .catch((error) => {
                    console.log(error);
                  })
        }
    )
    return ( 
        <div className="App" >
        <header className = "App-header">
        <div>
        <h1>Tourist Places to Wander</h1> 
        <p>Top 100 Places to Go on a Vacation!</p> 
        <ul>
        <div className="card-group">
                        {areaList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="container mb-3">
                                        <div className="card bg-secondary border-info" style={{width: '18rem'}}>
                                            <img className="card-img-top" style={{width: "100%"}} src={item.imageUrl} alt={item.title} />
                                            <h5 className="card-title">{item.title}</h5>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </div>
        </ul> 
        </div> 
        </header>
        </div>

    )
}

export default TouristAttractions