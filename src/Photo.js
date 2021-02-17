import React, {useEffect, useState} from "react";
import axios from "axios"
import "./styles/photos.sass"
import Typography from "@material-ui/core/Typography";


function Photos(props) {
    const [photos, setPhotos] = useState()
    const {rover, camera} = props;
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&api_key=wB0a6PhSYUkwqpVAJ0aJ2l6iiaqgvHfwnr12jg5c`).then(response=>{
            setPhotos(response.data.photos)
        })

    }, [rover, camera]);

    return(
        <div>
            <Typography align= "center" variant="h3" color="textPrimary"
                        gutterBottom >
                Photos from Mars
            </Typography>
            <br/>
            { photos &&
                <div className= "photos">
                    {
                        photos.map(photo => (
                            <div className= "photos" key={photo.id} className="user">
                                <img className = "img" width="100" height="111" src={photo.img_src} alt="photo"/>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Photos;