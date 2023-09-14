import axios, { Axios } from "axios";
import { useEffect, useState } from "react"
import { fetchProducts, filterProducts, setSelectedProduct } from "../../Store/Slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Slices/CartSlice";
import '../Style/HomePage.css';
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();
  const Navigator = useNavigate();
  const [HomePage, setHomePage] = useState();
  const [categories, setCategories] = useState([]);
  const [categoryTab, setCategoryTab] = useState();
  const [apiCalled, setApiCalled] = useState(false);
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const selectedProduct = useSelector(state => state.products.selectedProduct);

  const handleSelectedProduct = (index) => {
    dispatch(setSelectedProduct(index));
    (selectedProduct) ? (Navigator('/product')) : (null)
  }

  const handleCategory = (e) => {
    dispatch(filterProducts(e))
    setIsCategorySelected(true)
  }

  const handleClearFilter = () => {
    (isCategorySelected) ? ( dispatch(fetchProducts()) ) : (null)
  }

  useEffect(() => {
    dispatch(fetchProducts());
    setApiCalled(true);
  }, [dispatch])
  useEffect(() => {
    {
      (!loading && products.length > 0) ? (
        setHomePage(() => {
          return products.map((index) => {
            const performAddToCart = () => {
              dispatch(addToCart(index));
            }
            return (
              <>
                <div className="container mt-5 mb-5 p-2 divHomePage d=flex align=items=center rounded">
                  <div className="row">
                    <div onClick={() => { handleSelectedProduct(index) }} className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                      <img className="imagewidth" src={index.image} alt="" />
                    </div>
                    <div className="col-12 col-lg-8 d-flex align-items-center">
                      <div className="container-fluid">
                        <div className="row">
                          <div onClick={() => { handleSelectedProduct(index) }} className="col-lg-8 col-12 d-flex align-items-center">
                            <h1 className="text-dark text-left font-weight-normal h4">{index.title}</h1>
                          </div>
                          <div className="col-12 col-lg-4 text-center d-flex flex-column justify-content-center align-items-center">
                            <h3 className="text-dark">${index.price}</h3>
                            <button onClick={performAddToCart} className="btn btn-dark ">Add to Cart</button>
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
        setHomePage(() => {
          return (
            <h1>Loading....</h1>
          )
        })
      )
    }
  }, [loading, products])


  const extractCategories = () => {
    const categories = [...new Set(products.map((product) => product.category))];
    return categories;
  }
  useEffect(() => {
    if (apiCalled) {
      const uniqueCategories = extractCategories(products);
      setCategories(uniqueCategories);
    }
    (!apiCalled && products) ? (setCategoryTab(() => { return <><h1>Loading</h1></> })) :
      (setCategoryTab(() => {
        return (
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="h4">Categories</h1>

            <div className="d-flex align-items-start justify-content-center flex-column">
              {categories.map((category, index) => {
                return (
                  <div key={index} className="d-flex align-items-center justify-content-center">
                    <li onClick={() => handleCategory(category)} className="text-black">{category}</li>
                  </div>
                )
              })}
            </div>
            <button onClick={handleClearFilter} className="btn btn-dark ">Clear</button>
          </div>
        )
      }))
  }, [apiCalled, products, fetchProducts]);



  return (
    <>
      <div className="d-flex align-items-start justify-content-around">
        <div className="d-flex align-items-center justify-content-center flex-column mt-5 categoriesTab">
          <div className="d-flex align-items-start flex-column justify-content-start p-1">
            {categoryTab}
          </div>
        </div>
        <div className="">
          {HomePage}
        </div>
      </div>
    </>
  )
}
