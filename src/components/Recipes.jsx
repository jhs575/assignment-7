import SingleRecipe from "./recipes/SingleRecipe"
import recipes from "../data/recipes"
import Order from "./recipes/Order"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Recipes() {
    const [wantToCook, setWantToCook] = useState([])
    const [currentCook, setCurrentCook] = useState([])
    const handleCook = (recipe) => {
        if (wantToCook.includes(recipe)) {
            toast("Already exist")
            return
        }
        setWantToCook((oldValue) => [...oldValue, recipe])
    }
    const handleCooking = (recipe) => {
        // remove from want to cook

        if (!wantToCook.includes(recipe)){
            toast("Not Ready to Cook")
            return 
        }
        const index = wantToCook.indexOf(recipe);
        const newWantToCook = wantToCook.toSpliced(index, 1);
        setWantToCook(newWantToCook)
        
        // add to current cook
        setCurrentCook((oldValue) => [...oldValue, recipe])
    }
    useEffect(() => {
        console.log("wantToCook", wantToCook)
    }, [wantToCook])
    // console.log("recipes here", recipes)
    return (
        <section className="mb-10">
            <div>
                <h1 className="text-center mt-20 mb-5 text-4xl font-medium">Our Recipes</h1>
                <p className="w-3/5 mx-auto text-center text-[#736D80]">Introducing our food land, a mobile culinary adventure bringing delicious flavors to your doorstep. From savory street snacks to mouthwatering meals, experience convenience and satisfaction on wheels with our diverse menu served fresh and with a smile.</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-6 mt-10">
                <div className="lg:col-span-7">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {recipes.map((recipe) => {
                            return <SingleRecipe key={recipe.recipeID} recipe={recipe} handleCook={handleCook} />
                        })}
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <Order wantToCook={wantToCook} handleCooking={handleCooking} currentCook={currentCook}/>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}