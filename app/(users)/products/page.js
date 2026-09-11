import React from 'react'
import ProductList from './ProductList';

export const Product = async (props) => {
    const searchParams = await props.searchParams;

    console.log(searchParams);

    return (<>
        <div>Search Params</div>
        <ProductList /></>
    )
}
export default Product;