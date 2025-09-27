import { useEffect, useState, useTransition } from "react";


function useFoodList() {
    const [isPending, startTransition] = useTransition();
    const [foodListData, setFoodListData] = useState([]);

    const fetch_food = async () => {
        const response = await fetch('/foodlist.json');
        const data = await response.json()
        return data
    }

    useEffect(() => {
        startTransition(async () => {
        const data = await fetch_food();
        if (data) {
            setFoodListData(data);
            return;
        } 
        })
    }, [])

    return {
        isPending, data: foodListData
    };
}


export default useFoodList