import '../../css/home.css'
import { Link } from 'react-router-dom';
import CategoriesSlider from "../category/CategoriesSlider"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Profile from "../../img/header/Profile.svg"
import search from '../../img/header/search-interface-symbol.png';
import Bag from "../../img/header/Bag 2.svg"
import Calling from "../../img/header/Calling.svg"
import Heart from "../../img/header/Heart.svg"
import Paper from "../../img/header/Paper.svg"
const Header =() => {
    const [tabs, setTabs] = useState([])
        useEffect(()=>{
            async function getTabs(){
                const authAxios = axios.create({
                    baseURL: 'https://unofficial-shein.p.rapidapi.com',
                    params: {
                        language: 'en',
                        country: 'US',
                        currency: 'USD'
                      },
                      headers: {
                        'X-RapidAPI-Key': '31823104c0mshc77c5283b621682p163aa9jsn1ad1cd59de88',
                        'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
                      }
                })
                try {
                    const response = await authAxios.get('https://unofficial-shein.p.rapidapi.com/navigations/get-tabs')
                    const result = response.data
                    console.log(response.data)
                    setTabs(response.data)
                    return result
                } catch (err){
                    console.log(err)
                }
            }
            getTabs()
        },[])
    return(
    <div>
    <main className="wrapper">
        <header>
            <div className="header">
                <div className="header_logotip">
                    SHEIN
                </div>
                <div className="header_search_signRegister">
                    <div className="header_seacrch">
                        <input type="text" />
                        <button><img src={search} alt=""/></button>
                    </div>
                    <div className="header_signRegister">
                        <Link to = "#"><img src={Profile} alt=""/></Link>
                        <Link to = "#"><img src={Bag} alt=""/></Link>
                        <Link to = "#"><img src={Calling} alt=""/></Link>
                        <Link to = "#"><img src={Heart} alt=""/></Link>
                    </div>
                </div>
            </div>
            <CategoriesSlider tabs={tabs} />
        </header>
    </main>
    <section className="wrapper header_container display-none ">
        <div className="header_container_categories">
            {tabs?.info?.tabs?.map((tap)=>(
                 <div className="header_categori"><Link to = '/cart'>{tap?.name} </Link> <span> > </span></div>
            ))}
        </div>
        <div className="header_container_categories  display-none">
            <div className="shop_category">
                <img src= {Paper} alt="" className="paper"/>
                <h1>
                    Shop by category
                </h1>
            </div>
            <div className="shop_cart">
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
            </div>
        </div>
        <div className="shop_category_cart  display-none">
            <div className="shop_category_list">
                <h1>
                    DRESSES
                </h1>
            </div>
            <div className="shop_carts">
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                 
            </div>
            <div className="shop_category_list">
                <h1>
                    DRESSES
                </h1>
            </div>
            <div className="shop_carts">
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div>
                <div>
                    <img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/5c/170055277457b95f2a3bf934ddcc05ab89faa81c39.png" alt=""/>
                    <p>Women activewear</p>
                </div> 
            </div>
        </div>
    </section>
    </div>
        
    )
}



export default Header;

