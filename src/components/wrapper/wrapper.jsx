import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, RigthMenu, LeftMenu } from "../navbar";
import Home from "../../pages/home/home";
import './wrapper.css'

function Wrapper(params) {
    return (
        <div className="main-container">
            <Navbar />
            <div className='wrapper'>
                <LeftMenu />
                <div className="page">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </div>
                <RigthMenu />
            </div>
        </div>
    );
}

export default Wrapper;