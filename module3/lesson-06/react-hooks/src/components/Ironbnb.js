// const url = "https://ironbnb-m3.herokuapp.com/apartments"
import axios from 'axios';
import { useState, useEffect } from "react";

function Ironbnb(){
    const [apartments, setApartments] = useState([]) // defining the state variable 'apartments'

    useEffect(()=>{
        // fetch("https://ironbnb-m3.herokuapp.com/apartments")
        //     .then((response) => response.json())
        axios.get("https://ironbnb-m3.herokuapp.com/apartments")
            .then(response => {
                console.log(response.data)
                setApartments(response.data)})
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {apartments.length === 0 ? <span>Loading apartments...</span> 
                                    : apartments.map(apartment => {
                                            return <div key={apartment._id}>
                                                <img src={apartment.img} alt="studio_image"/>
                                                <h2>{apartment.title}</h2>
                                                <p>{apartment.pricePerDay} euros</p>
                                            </div>
                                        })
            }
        </div>
    );
}

export default Ironbnb;