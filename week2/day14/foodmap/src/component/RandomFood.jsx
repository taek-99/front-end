import useFoodList from "../Hooks/useFoodListQuery";

function RandomFood(){
    const {isPending, data: foodListData} = useFoodList()
    const foodrandomnum = Math.floor(Math.random() * foodListData.length) 
    const foodData = foodListData[foodrandomnum]
    
    return(
        isPending ? "고르는중":
        <div>
            {foodData?.title}
            <br />
            {foodData?.description}
        </div>
    );
}

export default RandomFood