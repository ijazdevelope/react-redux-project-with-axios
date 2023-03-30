import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/ProductActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    const state = useSelector(state => state.allProducts?.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log('Error', err));
        dispatch(setProducts(response?.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
