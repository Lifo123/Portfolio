import './ErrorRoute.css'
import { useNavigate } from 'react-router-dom';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PButton from '../../Components/Buttons/PButton';



export default function ErrorRoute() {
    const navigate = useNavigate();

    return (
        <>
            <Header type="error" />
            <main className="err-main f-col f-align-center g-20">
                <h2>Page does’t exist</h2>
                <h3>Please enter a valid <span>URL</span> for navigation in this dominion</h3>
                <PButton text='Back' funct={() => navigate(-1)} />
            </main>
            <Footer />
        </>
    )
}