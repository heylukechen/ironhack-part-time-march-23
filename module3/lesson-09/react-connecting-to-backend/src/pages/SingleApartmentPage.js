import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleApartmentPage(){
    const [apartment, setApartment] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { apartmentId } = useParams();

    useEffect(()=>{
        async function fetchSingleApartment(){
            try {
                const response = await axios.get(`http://localhost:5005/api/apartments/${apartmentId}`);
                setApartment(response.data)
                setIsLoading(true);
            } catch (error) {
                console.log(error)
            }
        }
    
        fetchSingleApartment()
    }, [apartmentId])


    if(apartment === null && isLoading === false){
        return <p>Loading apartment...</p>
    }

    return (
        <>
        {apartment === null ? 
                            <p>No apartment found</p> :
                            (<div>
                                <h2>{apartment.title}</h2>
                                <img src={apartment.img} alt="apartment_image"/>
                                <p>{apartment.pricePerDay} $</p>
                            </div>)
    }
    </> 
    )
}

export default SingleApartmentPage;