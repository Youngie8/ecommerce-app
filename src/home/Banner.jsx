import React, { useState } from 'react'
import productData from "../products.json"
const title = (
    <h2>Get your Product without Worrying About <span>Financal</span> Mess!</h2>
);
const desc = "We have the largest collection of product";
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

  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <input type="text" name="search" id="search" placeholder='search your product'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Banner