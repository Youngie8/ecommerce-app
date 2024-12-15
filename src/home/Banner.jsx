import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
const title = (
    <h2>Get your Product without Worrying About <span>Financal</span> Mess!</h2>
);
const desc = "We have the largest collection of products!";
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
const Banner = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filterProducts, setFilterProducts] = useState(productData);

    // Filtering func
    const handleSearch = e => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)
        // Filtering products based on search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilterProducts(filtered)
    }

  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <input type="text" name="search" id="search" placeholder='search your product' value={searchInput} onChange={handleSearch}/>
                </form>
                <p>{desc}</p>
                <ul className="lab-ul">
                    {
                        searchInput && filterProducts.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner