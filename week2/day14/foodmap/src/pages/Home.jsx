import { useEffect, useState, useTransition } from "react";
import Foodlist from "../component/foodlist";
import Button from "../component/Button";
import RandomFood from "../component/RandomFood";
import Navbar from "../sections/common/Navbar";
import Main from "../sections/home/Main";


function Home() {
    return (
        <div>
            <Navbar/>
            <Main/>
        </div>
    );
}


export default Home