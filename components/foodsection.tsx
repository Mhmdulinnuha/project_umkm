'use client'

import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
export default function FoodSection() {
   const [products, setProducts] = useState<any[]>([])
   const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  async function getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')

    if (error) {
      console.log(error)
    } else {
      setProducts(data)
    }
  }
  async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')

  if (error) {
    console.log(error)
  } else {
    setCategories(data)
  }
}
  return (
    <section className="food_section layout_padding-bottom">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Our Menu
      </h2>
    </div>

    <ul className="filters_menu">

  <li className="active" data-filter="*">
    All
  </li>

  {categories.map((category) => (
    <li
      key={category.id}
      data-filter={`.${category.name.toLowerCase()}`}
    >
      {category.name}
    </li>
  ))}

</ul>
    <div className="filters-content">
      <div className="row grid">
        {products.map((item) => (
        <div className="col-sm-6 col-lg-4 ">
          <div className="box">
            <div>
              <div className="img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="detail-box">
                <h5>{item.name}</h5>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                </p>
                <div className="options">
                  <h6>
                    {item.cost_price}
                  </h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
))}
        {/* lanjutkan card lainnya tanpa perubahan */}

      </div>
    </div>
    

    <div className="btn-box">
      <a href="">
        View More
      </a>
    </div>
  </div>
</section>
  );
}