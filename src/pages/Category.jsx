import React from 'react'
import Item from '../components/item/Item'
import data_product from '../components/assets/data';


const Category = () => {
  return (
    <div className="category">
      <div className="popular-item">
            {data_product.map((item, i) => {
                return <Item Key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Category