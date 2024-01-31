import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../../css/cart.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Стили Slick
import "slick-carousel/slick/slick-theme.css";


const Cart = () =>{
    const [products, setproducts] = useState([])
        useEffect(()=>{
            async function getTabs(){
                const authAxios = axios.create({
                    baseURL: 'https://unofficial-shein.p.rapidapi.com',
                    params: {
                        cat_id: "1980",
                        adp: '10170797',
                        language: 'en',
                        country: 'US',
                        currency: 'USD',
                        sort: '7',
                        limit: '20',
                        page: '1'
                      },
                      headers: {
                        'X-RapidAPI-Key': '31823104c0mshc77c5283b621682p163aa9jsn1ad1cd59de88',
                        'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
                      }
                })
                try {
                    const response = await authAxios.get('https://unofficial-shein.p.rapidapi.com/products/list')
                    const result = response.data
                    console.log(response.data)
                    setproducts(response.data.info.products)
                    return result
                } catch (err){
                    console.log(err)
                }
            }
            getTabs()
        },[])
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3
        };
   
        return (
            <section className='products'>
                {products.map((product) => (
                    <div className='product_list' key={product.goods_id}>
                        <p>{product.goods_name}</p>
                        {product.detail_image && (
                            <Slider {...settings}>
                                {product.detail_image.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Product ${product.goods_id} Detail ${index}`} />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                ))}
            </section>
        );
    };
    
    export default Cart;