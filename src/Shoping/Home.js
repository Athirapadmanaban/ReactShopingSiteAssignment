import React from 'react'
import ProductCard from './ProductCard'
import './Home.css'

import productArray from '../assets/Data/products.json'

class Home extends React.Component {
 
   constructor(props){
       super(props)
       this.state = {
           products: []
       }
       
   }
  componentDidMount() {
    this.setState({products: productArray })
   
  }
   render(){
       return(
           <div>
               <h3>
                 Greetings of the day
               </h3>
               <div className="productCard">
               {this.state.products.map((prod) => <ProductCard key={prod.prodId} prod={prod} />)}
                   </div>
                
               
           </div>
       )
   }
}


export default Home