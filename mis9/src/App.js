import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/BlackpinkStore';
import Social from './pages/Social';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import Register from './pages/Register';
import SecondHandBuy from './pages/SecondHandBuy';
import SecondHandSell from './pages/SecondHandSell';
import TicketPage from './pages/TicketPage';
import Member from './pages/Member';
import LoginHome from './pages/LoginHome';
import LesserafimStore from './pages/LesserafimStore';
import WestlifeStore from './pages/WestlifeStore';
import OnerepublicStore from './pages/OnerepublicStore';
import JojiStore from './pages/JojiStore';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/store/blackpink" element={<Store />} />
                    <Route exact path="/social" element={<Social />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/help" element={<Help />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/shoppingcart" element={<ShoppingCart />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/secondhandbuy" element={<SecondHandBuy />} />
                    <Route exact path="/secondhandsell" element={<SecondHandSell />} />
                    <Route exact path="/ticketpage" element={<TicketPage />} />
                    <Route exact path="/member" element={<Member />} />
                    <Route exact path="/login/home" element={<LoginHome />} />
                    <Route exact path="/store/lesserafim" element={<LesserafimStore />} />
                    <Route exact path="/store/westlife" element={<WestlifeStore />} />
                    <Route
                        exact
                        path="/store/onerepublic"
                        element={<OnerepublicStore />}
                    />
                    <Route exact path="/store/joji" element={<JojiStore />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
