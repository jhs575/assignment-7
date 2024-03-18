import WantCook from "./order/WantCook"
import CurrentCook from "./order/CurrentCook"
export default function Order({wantToCook, handleCooking, currentCook}) {
    return (
        <div className="card bg-base-100 border-[1px]">
            <WantCook wantToCook={wantToCook} handleCooking={handleCooking}/>
            <CurrentCook currentCook={currentCook}/>
            <div className="flex flex-row justify-end card-body">
                <div>Total Time = {currentCook.reduce((old , current) => {
                    return old + +current.preparingTime
                },0)} minutes</div>
                <div>Total Calories = {currentCook.reduce((old , current) => {
                    return old + +current.calories
                },0)} calories</div>
            </div>
        </div>
    )
}