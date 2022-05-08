import { Outlet, Link } from "react-router-dom";
import Header from '../modules/header/Header';
import Footer from "./footer/Footer";
import ContentComponent from './contentComponent/ContentComponent'
import Contact from "./contact/Contact";

const HomeLayout = () => {



    return (
        <>
            <Header>
                <Contact />
            </Header>
            <ContentComponent>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </ContentComponent>

            <Footer />
        </>
    )
};

export default HomeLayout;