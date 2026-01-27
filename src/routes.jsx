import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";

const routes = [
    {
        path: '/',
        element: <App></App>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'game/:id', element: <GamePage/> }
        ]
    }

];

export default routes;