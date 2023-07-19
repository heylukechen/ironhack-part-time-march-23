import './NavigationBar.css'

function NavigationBar(){
    const navContent = ["Home", "About","Contact", "Team"];

  return (
    <nav>
        <ul>
            {navContent.map(navLink => {
                return <li>{navLink}</li>
            })}
        </ul>
    </nav>
 )
}

export default NavigationBar;