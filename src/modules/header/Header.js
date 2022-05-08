import Contact from '../contact/Contact';
import './Header.css';

const Header = () => {

    return (
        <div className="headerContainer">
            <div className='header'>this is the header</div>
            <div className="contactPosition" >
                {/* <SearchBar /> */}
                <Contact />
            </div>
        </div>
    )
}

export default Header;