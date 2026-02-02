import { useOutletContext } from 'react-router-dom';
import styles from '../checkoutCart/CartPage.module.css'

function CartPage(){
    const { cart, removeFromCart } = useOutletContext();

    return (
        <div>
            <div className="itemsListContainer">
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className={styles.gameContainer}>
                            <img src={item.thumb} alt={item.title} className={styles.gameImage} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <p className={styles.retailPrice}>${item.retailPrice}</p>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <div className="chargesContainer">
                <h2>Total: ${cart.reduce((sum, item) => sum + parseFloat(item.price || 0), 0).toFixed(2)}</h2>
                <button disabled={cart.length === 0}>Checkout</button>
            </div>
        </div>
    )
}

export default CartPage