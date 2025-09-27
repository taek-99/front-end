import useFoodList from "../Hooks/useFoodListQuery";
import { useEffect, useState, useTransition } from "react";


function FoodListRender ({foodList}) {

    return (
        <ul>
            {foodList.map(food => (
                <li>
                    <h2>{food.title}</h2>
                    <h3>{food.description}</h3>
                </li>
            ))}
        </ul>
    );
}


export default FoodListRender