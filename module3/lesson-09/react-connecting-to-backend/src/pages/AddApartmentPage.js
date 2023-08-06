import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddApartmentPage() {
    const [title, setTitle] = useState("");     // <== ADD
    const [pricePerDay, setPricePerDay] = useState(1);  
    const [img, setImg] = useState("");  

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        // 1. Prevent the default submission of the form
        e.preventDefault();
        //2. Collect the data of our new apartment
        const newApartment = {
            title: title,
            pricePerDay: pricePerDay,
            img: img
        }
        console.log('newApartment', newApartment);
        //3. Send an axios Post request which carries the data of our new apartment
        axios.post('http://localhost:5005/api/apartments', newApartment)
            .then(({ data }) => {
                console.log('post response data', data)
                navigate("/");
            //4. Navigate our user to the apartment list page to confirm that the new apartment was added

            })
        
    }

    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>

        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
    
            <label>Price per Day</label>
            <input
            type="number"
            name="pricePerDay"
            onChange={(e) => setPricePerDay(e.target.value)}
            value={pricePerDay}
            />

            <label>Image</label>
            <input
            type="text"
            name="img"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            />
            
            <button type="submit">Create Apartment</button>
      </form>
      </div>
    );
  }
   
  export default AddApartmentPage;