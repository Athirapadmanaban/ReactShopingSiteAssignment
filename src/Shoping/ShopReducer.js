
var initialState = { products: []}

export default function updateProductName(state = initialState, action) {

    function updateProductQty(products, action) {
         products.forEach(product => {
            if(product.prodId === action.data.Id) {
                product.qty = action.data.qty;
                product.totalPrice = action.data.totalPrice
            }
            
        });
        return products
        
    }
    switch (action.type) {
        case 'ADD_TO_CART':
            var updatedState = { ...state, products: state.products.concat(action.data) }          
            return updatedState;
            
        case 'UPDATE_QTY':
             var updatedQtyState = {...state, products:updateProductQty(state.products, action) }         
             return updatedQtyState;
        //  case 'UPDATE_LOGGEDIN':
        //      var loginStatus = action.data.loggedin;
        //      console.log('----loggedin--')
        //      console.log(loginStatus)
        //      return loginStatus
        default:
            return state;
    }
    
    
    
}