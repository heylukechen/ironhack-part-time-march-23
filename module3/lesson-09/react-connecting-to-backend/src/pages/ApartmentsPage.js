import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios' 

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    async function fetchApartments(){
        try {
            // const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');
            const response = await axios.get('http://localhost:5005/api/apartments');
            setApartments(response.data)
            setIsLoading(true);
        } catch (error) {
            console.log(error)
        }
    }

    fetchApartments()
    // axios.get('https://ironbnb-m3.herokuapp.com/apartments')
    //     .then(response => {
    //         console.log('data', response.data)
    //         setApartments(response.data)
    //     })
    //     .catch(err => console.log(err))
  }, [])
  if(apartments.length === 0 && isLoading === false){
    return <p>Loading apartments...</p>
  }

  return (
    <>
        {apartments.length === 0 ? 
        <p>No apartment found</p>:
        (<div>
            <h3>List of apartments</h3>
            {apartments.map(apartment => {
                return <div key={apartment._id}>
                    <Link to={`/apartments/${apartment._id}`}><h2>{apartment.title}</h2></Link>
                    <img src={apartment.img} alt="apartment_image"/>
                    <p>{apartment.pricePerDay} $</p>
                </div>
            })}
            </div>)
            }
    </>
  );
}
 
export default ApartmentsPage;