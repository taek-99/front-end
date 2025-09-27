import { useEffect, useState, useTransition } from "react";
import useFoodList from "../Hooks/useFoodListQuery";
import FoodListRender from "./FoodListRender";



function Foodlist() {
    const {isPending, data: foodListData} = useFoodList()

    return(
        <div>
        {isPending ? "음식 로딩중...." : <FoodListRender foodList={foodListData}/>}
        
    </div>
    );
}


export default Foodlist