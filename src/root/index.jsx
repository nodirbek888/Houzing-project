import React from "react";
import Navbar from '../components/Navbar/index'
import {navbar} from '../utils/navbar'
import { Routes,Route,Navigate } from "react-router-dom";
const Root = () => {
    return(
        <div>
            <Routes>
            <Route element={<Navbar/>}>
                    {
                        navbar.map(({id, element, path,hidden})=>{
                            return !hidden &&(
                                <Route key={id} path={path} element={element}/>
                            )
                        })
                    }
            </Route>
            <Route path="/" element={<Navigate to={'/home'}/>}/>
                <Route element={<Navbar/>}>
                    {
                        navbar.map(({id, element, path,hidden})=>{
                            return hidden &&(
                                <Route key={id} path={path} element={element}/>
                            )
                        })
                    }
                </Route>
            </Routes>
        </div>
    )
}
export default Root