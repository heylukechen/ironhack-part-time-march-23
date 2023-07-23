import NavigationLink from './NavigationLink';
import { v4 as uuidv4 } from 'uuid';

const navigationLinks = ["Home", "About", "Contact"];

function NavigationBar(){
    return (
        <nav>
            <ul>
                {navigationLinks.map(navigationLink => {
                    return <NavigationLink key={uuidv4()} linkName={navigationLink} underlined={true}/>
                })}
            </ul>
        </nav>
    )
}

export default NavigationBar;