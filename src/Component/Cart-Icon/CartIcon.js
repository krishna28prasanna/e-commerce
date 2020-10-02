import React from "react"
import { connect } from "react-redux"

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { showCartDropdown } from "../Redux/Actions/Cart/CartAction"
import "./CartIcon.css"
const CartIcon = ({showCartDropdown}) =>{
    return(
        <div className="cart-icon" onClick={showCartDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        showCartDropdown : () => {
            console.log("called cart")
            dispatch(showCartDropdown())}
    }
}
export default connect(null,mapDispatchToProps)(CartIcon)