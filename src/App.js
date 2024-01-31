import {Browser, BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from "./page/home/header.jsx";
import Footer from "./page/home/footer.jsx"
import Cart from './page/cart/cart.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';




function App() {
  const [tabs, setTabs] = useState([])
        useEffect(()=>{
            async function getTabs(){
                const authAxios = axios.create({
                    baseURL: 'https://rapidapi.com/apidojo/api/unofficial-shein',
                    params: {
                        language: 'en',
                        country: 'US',
                        currency: 'USD'
                      },
                      headers: {
                        'X-RapidAPI-Key': 'db7f709b59mshc2e8158b2956278p15b5dajsn303e3d77b204',
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
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/Cart' element={<Cart/>} tabs={tabs} />
          </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
