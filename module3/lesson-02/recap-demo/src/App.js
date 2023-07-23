import ReactPlayer from 'react-player';
import { v4 as uuidv4 } from 'uuid';
import NavigationBar from './components/NavigationBar';
// import Greetings from './components/Greetings';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  // const mockUsers = [{firstName: 'Lloyd', lastName: 'Chambrier'}, {firstName: 'Luke', lastName: 'Chen'}];
  const exampleStudents = [
    {
      name: 'John',
      week: 5,
      info: {
        city: 'Madrid',
        course: 'Design'
      }
    },
    {
      name: 'Jennifer',
      week: 5,
      info: {
        city: 'Barcelona',
        course: 'Architecture'
      }
    }
  ]
  return (
    <div className="App">
       {/* {mockUsers.map(user => {
          return <Greetings key={uuidv4()} firstName={user.firstName} lastName={user.lastName} />
        })} */}
      <NavigationBar />
        {exampleStudents.map(student => {
            return <StudentCard key={uuidv4()} name={student.name} week={student.week} info={student.info} />
          })
        }
         <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume={0.5}
        />
      <Footer />
    </div>
  );
}

export default App;
