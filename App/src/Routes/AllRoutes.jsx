import {Routes,Route} from "react-router-dom";
import Adduser from "../components/Adduser";
import Allusers from "../components/allusers";
import Editusers from "../components/Edituser";
import Navbar from "../components/Navbar";
export default function AllRoutes(){
    return (
        <div>
             <Navbar/>

            <Routes>   
                <Route path="/" element={<Adduser/>}/>
                <Route path="/dashboard" element={<Allusers/>}/>
                <Route path="/edit/:id" element={<Editusers/>}/>

                </Routes>
        </div>
    )
}