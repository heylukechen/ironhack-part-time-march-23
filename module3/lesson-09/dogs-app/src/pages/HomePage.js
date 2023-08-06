import { useState, useEffect } from 'react';
import axios from 'axios';
import Dog from '../components/Dog';
import RGBColorPicker from '../components/RGBColorPicker';

const dogsList = [{id:'1' ,name: 'Lucy', breed: 'Bulldog', age: 4}, {id:'2' ,name: 'Gerrard', breed: 'Doberman', age: 5}, {id:'3' ,name: 'Michael', breed: 'Chihuahua', age: 8}]

function HomePage(){
    const [quoteOfTheDay, setQuoteOfTheDay] = useState("")
    const [dogs, setDogs] = useState([]);

    useEffect(()=>{
        setTimeout(()=> setDogs(dogsList), 3000)
    }, [])

    useEffect(() => {
        axios.get('https://api.kanye.rest')
            .then(response => {
                console.log('data', response.data)
                setQuoteOfTheDay(response.data.quote)
            })
    }, [])


    return (
        <div>
            <h1>"{quoteOfTheDay}" - Kanye West</h1>

            <RGBColorPicker />
            {/* {dogs.length === 0 ? <p>No dog found</p> : 
            dogs.map(dog => {
                return <Dog key={dog.id} name={dog.name} breed={dog.breed} age={dog.age}/>
            })} */}
        </div>
    )
}

export default HomePage