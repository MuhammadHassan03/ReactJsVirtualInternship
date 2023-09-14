import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../../Store/Slices/CartSlice';
import '../Style/Cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const dispatch = useDispatch();
    const Navigator = useNavigate();
    const cartProducts = useSelector(state => state.cart.cart);
    const [cart, setCart] = useState(null);
    const [payment, setPayment] = useState();
    const [quantity, setQuantity] = useState(1);


    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const perfromRemoveFunctionality = (product) => {
        dispatch(removeFromCart(product));
    }

    const handleAddProducts = () =>{
        Navigator('/homepage');
        }

    useEffect(() => {
        (cartProducts.length>=1) ? (
            setCart(() => {
                return cartProducts.map((product, key) => {
                    return (
                        <>
                            <div key={key} className="container mt-5 mb-5 p-2 bg-light d=flex align=items=center rounded">
                                <div className="row">
                                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                                        <img className="imagewidth" src={product.image} alt="" ></img>
                                    </div>
                                    <div className="col-12 col-lg-8 d-flex align-items-center">
                                        <div className="container-fluid ">
                                            <div className="row">
                                                <div className="col-lg-4 col-12 d-flex align-items-center ">
                                                    <button onClick={decreaseQuantity} className="btn btn-dark buttonsWidth"> - </button>
                                                    {quantity}
                                                    <button onClick={increaseQuantity} className="btn btn-dark buttonsWidth"> + </button>
                                                </div>
                                                <div className="col-12 col-lg-6 text-center d-flex flex-row-reverse align-items-center">
                                                    <h3 className="text-dark">${(product.price * quantity).toFixed(2)}</h3>
                                                </div>
                                                <div className='col-lg-2 d-flex align-items-center justify-content-start'>
                                                    <button onClick={() => perfromRemoveFunctionality(product)} className="btn btn-dark ">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    );
                })
            })
        ) : (
            setCart(() => {
                return (
                    <>
                        <div className='d-flex align-items-center justify-content-center errorCart flex-column'>
                        <h1 className='text-white h4'>No Products in Cart. Please Add Products to Show here</h1>
                        <button onClick={handleAddProducts} className='btn btn-dark'>Add Products </button>
                        </div>
                    </>
                )
            })
        )
    }, [cartProducts, quantity])

    return (
        <>
            {cart}
            {payment}
        </>
    );

}
