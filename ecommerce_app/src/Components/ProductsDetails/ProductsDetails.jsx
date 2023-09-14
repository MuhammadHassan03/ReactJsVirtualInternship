import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart } from '../../Store/Slices/CartSlice';
import '../Style/ProductDetails.css';

export const ProductsDetails = () => {
    const dispatch = useDispatch();
    const pro = useSelector(state => state.products.selectedProduct);
    const [product, setProduct] = useState(null);

    const performAddToCart = ()=>{
        dispatch(addToCart(pro));
    }


    useEffect(() => {
        (pro) ? (
            setProduct(() => {
                return (
                    <>
                        <div className='container bg-light rounded mt-3 p-5'>
                            <div className='row'>
                                <div className='col-12 col-lg-4 d-flex align-items-center justify-content-center'>
                                    <img className='imageProductDetails' src={pro.image} alt="" />
                                </div>
                                <div className='col-12 col-lg-8'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <h1 className='text-dark text-left h1 mt-3 mb-3'>{pro.title}</h1>
                                                <h3 className='text-dark h2'>Description:</h3>
                                                <p className='text-dark lead'>{pro.description}</p>
                                            </div>
                                            <div className='col-12 d-flex flex-column flex-lg-row justify-content-lg-start align-items-lg-start align-items-center justify-content-center'>
                                                <h3 className='text-dark m-1'>Price : ${pro.price}</h3>
                                                <button onClick={performAddToCart} className="btn btn-dark ml-auto">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })
        ) : (
            setProduct(()=>{
                <>
                    <h1>No Product is Selected Please Select One First</h1>
                </>
            })
        )
    }, [pro])
    return (
        <div className='text-light'>
            {product}
        </div>
    )
}
