import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
 
function QueryStringExample(props) {
  const [searchParams, setSearchParams] = useSearchParams();
 
  // Get the values from the URL query strings 
  // Example: http://localhost:3000/example?place=Miami&destType=Hotel
  const place = searchParams.get("place");
  const destType = searchParams.get("destType");
  const checkInDate = searchParams.get("checkInDate")
  const checkOutDate = searchParams.get("checkOutDate")
  
  useEffect(() => {
    console.log('place', place)
    console.log('destType', destType);
    console.log('checkInDate', checkInDate)
    console.log('checkOutDate', checkOutDate)
  }, []);
 
  return (
    <div>
      <h2>Query String Example</h2>
      <p>
        Open the console to see the logged query string values
      </p>
    </div>
  )
}
 
export default QueryStringExample;