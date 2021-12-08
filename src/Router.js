import { BrowserRouter, Route, Routes } from "react-router-dom";

import IdCard from "./components/IdCard"
import data from "./profiles.json"


const Router = () => {
    return (
        <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IdCard allCharacters={data}/>}/>


                

            </Routes>

        </BrowserRouter>
            
        </>
    )
}



export default Router
