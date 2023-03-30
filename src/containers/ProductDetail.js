import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/ProductActions';
import './product.scss';

const ProductDetail = () => {

    const dispatch = useDispatch();
    const { productId } = useParams();
    const protDetail = useSelector(state => state?.productDetail);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log('Error', err));
        dispatch(selectedProduct(response?.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div>
            {protDetail?.state === undefined ? (
                <p className='text-white'>Loading.....</p>
            ) : (
                <>
                    {protDetail?.state?.map(product => {
                        return (
                            <>
                                <div key={product?.id} className="card mb-3 p-4 rounded-0 c-product-detail">
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-md-4">
                                            <img src={product?.image} className="img-fluid rounded-start h-75 d-block m-auto m-md-0 c-product-detail__img" alt="prduct-detail-img" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title">{product?.title}</h5>
                                                <p className="card-text col-12 col-md-6"> {product?.description} </p>
                                                <p className="card-text"><small className="text-muted">{product?.rating?.rate}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </>
            )
            }
        </div >
    )
}

export default ProductDetail;
