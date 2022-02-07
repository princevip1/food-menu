import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';
import SearchBox from '../../shared/SearchBox/SearchBox';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
    const {id} = useParams()
    const [products,setProducts] = useState([]);


    useEffect(() => {
        fetch(`/categories/pos/${id}`)
          .then((response) => response.json())
          .then((data) => setProducts(data.products))
          .catch((err) => console.error(err));
      }, []);

      console.log(products);

    return (
        <div>
            <SearchBox/>
            <div className="grid grid-cols-2 gap-4 mt-3 mx-4 ">
                {
                    products.map(product => <CategoryProduct product={product} key={product.id} />)
                }
            </div>

            <Navigation/>
        </div>
    );
};

export default CategoryProducts;