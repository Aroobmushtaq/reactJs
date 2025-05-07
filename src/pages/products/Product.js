import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProduct,setLoadMoreCount } from '../../reduxToolKIt/store/slices/product.slice'
import { useEffect } from 'react'
import ProductCard from '../../componenets/productCard/ProductCard'
function Product() {
    const dispatch=useDispatch()
    const products = useSelector((store) => store.productSlice.products);
    const loading = useSelector((store) => store.productSlice.loading);
    const loadMore = useSelector((store) => store.productSlice.loadMore);
    const error = useSelector((store) => store.productSlice.error);
    const handleLoadMore=()=>{
        dispatch(setLoadMoreCount())
    }
    useEffect(() => {
        dispatch(getProduct());
    }, []);
  return (
    <div>
      <h1>products</h1>
      <div>
      {loading && <h1>Loading...</h1>}
      {
        products.slice(0,loadMore).map((product)=>{
            return <ProductCard key={product.id} product={product} />
        })
      }
      </div>
      <button onClick={handleLoadMore}>loadMore</button>
      
    </div>
  )
}

export default Product
