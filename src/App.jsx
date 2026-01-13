import NavBar from "./components/Navigation/NavBar";
import { Outlet } from "react-router";

function App(){
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App