import { useEffect, useState, useTransition } from "react";
import Button from "../../component/Button";
import Foodlist from "../../component/foodlist";
import RandomFood from "../../component/RandomFood";


function Main() {
    const [foodlistshow, setFoodListShow] = useState(false);
    const [randomfoodchoice, setRandomFoodChoice] = useState(false);
    return(
        <div>
            <h1>음식사이트다.</h1>
             <Button onClick = {() => {
                setRandomFoodChoice((prev) => !prev);
            }}>
                <strong>랜덤추천 버튼</strong>
            </Button>
                {!!randomfoodchoice && <RandomFood/>}

            <Button onClick = {() => {
                setFoodListShow((prev) => !prev)
            }}>
                <strong>음식랭킹버튼</strong>
            </Button>
            {!!foodlistshow && <Foodlist/>}
        </div>
    );
}

export default Main