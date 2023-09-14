import { useEffect, useState } from "react"
import "../Style/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const Header = () => {
    const cart = useSelector(state => state.cart.cart);
    const [cartItems, setCartItems] = useState(cart);
    const [search, setSearch] = useState(null);
    const user = localStorage.getItem('userInfo');
    const Navigater = useNavigate();

    useEffect(()=>{
        setCartItems(()=>{
            return (cart.length);
        })
    })
    
    const toggleMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const NavMenu = document.querySelector(".NavMenu");
        hamburger.classList.toggle("active");
        NavMenu.classList.toggle("active");
    }

    const handleLogoClick = () => {
        if(user){
            Navigater('/homepage');
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="container-fluid navBar ">
                <div className="row HeaderDiv">
                    <div onClick={handleLogoClick} className=" LogoDiv  col-4 col-lg-2">
                        <h1  className="Logo">Echoplex</h1>
                    </div>
                    <div className=" col-6 col-lg-7 searchBox">
                        <input onChange={handleSearch} value={search} type="text" placeholder="search" />
                    </div>

                    <div onClick={toggleMenu} className=" hamburger col-2">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <div className=" NavMenu col-lg-3 AuthDiv ">
                        <li className="nav-item"><Link to='/cart'><button className="btn btn-dark">Cart</button></Link></li>
                        <li className="nav-item text-dark">{cartItems}</li>
                    </div>


                </div>
            </div>

        </>
    )
}
