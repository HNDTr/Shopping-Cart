import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";
import CartPage from "./components/checkoutCart/CartPage";

const routes = [
    {
        path: '/',
        element: <App></App>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'game/:id', element: <GamePage/> },
            {path: '/checkout', element: <CartPage/>}
        ]
    }

];

export default routes;