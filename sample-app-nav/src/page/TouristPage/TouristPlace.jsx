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
            {areaList.map((item,index) => {
               return(
                <li key ={index}>
                <div>
                  <img src={item.imageUrl} alt={item.title}></img>
                  <div>{item.title}</div>
                </div>
              </li>
               )
                })} 
        </ul> 
        </div> 
        </header>
        </div>

    )
}

export default TouristAttractions