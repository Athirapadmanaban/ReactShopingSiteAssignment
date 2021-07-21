import React from 'react'
import ProductCard from './ProductCard'
import './Home.css'
import skirt1 from '../assets/skirt1.jfif';
import skirt2 from '../assets/skirt2.jfif';
import skirt3 from '../assets/skirt3.jfif'
const prod1 = {
    prodId: 1,
    prodame: "Skirt1",
    price: 2999,
    totalPrice: 2999,
    image: skirt1,
    desc: "Women black Striped Straight Kurta"
};
const prod2 = {
    prodId: 2,
    prodame: "Skirt2",
    price: 2999,
    totalPrice: 2999,
    image: skirt2,
    desc: "Women black Striped Straight Kurta",
    details: "Brown and Navy Blue striped straight kurta, has a mandarin collar, three-quarter sleeves, straight hem, and side slits"
};

const prod3 = {
    prodId: 3,
    prodame: "Skirt2",
    price: 1200,
    totalPrice: 1200,
    image: skirt3,
    desc: "Women black Striped Straight Kurta",
    details: "Brown and Navy Blue striped straight kurta, has a mandarin collar, three-quarter sleeves, straight hem, and side slits"
};
class Home extends React.Component {
    prodArr = [prod1, prod2, prod3];
   constructor(props){
       super(props)
   }
  
   render(){
       return(
           <div>
               <h3>
                 Greetings of the day
               </h3>
               <div className="productCard">
               {this.prodArr.map((prod) => <ProductCard key={prod.prodId} prod={prod} />)}
                   </div>
                
               
           </div>
       )
   }
}


export default Home