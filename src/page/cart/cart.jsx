import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../../css/cart.css"



const Cart = () =>{
    const [products, setproducts] = useState([])
        useEffect(()=>{
            async function getTabs(){
                const authAxios = axios.create({
                    baseURL: 'https://unofficial-shein.p.rapidapi.com',
                    params: {
                        cat_id: "4328",
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
                    setproducts(response.data)
                    return result
                } catch (err){
                    console.log(err)
                }
            }
            getTabs()
        },[])
    return(
        <section className='products'>
            {products.info?.products.map((list) => (
                <div className='product_list'>
                    <p>{list.cate_name}</p>
                    <img src={list.goods_img} alt={list.goods_name} />
                </div>
            ))} 
        </section>
        
    )
}

export default Cart;