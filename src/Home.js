import './CSS/Home.css';
import ContentField from './ContentField.js'
import Sidenav from './Sidenav.js';

function Home() {
    console.log(Sidenav);
    return (
        <div className='Home'>
            <Sidenav />
            <ContentField />
        </div>
    );
}

export default Home;
