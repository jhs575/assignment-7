export default function SingleRecipe({recipe, handleCook}) {
    return (
        <div className="card border-[1px]">
            <figure className="px-10 pt-10">
                <img src={recipe.recipeImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{recipe.recipeName}</h2>
                <p>{recipe.description}</p>
                <hr />
                <p>ingredients: {recipe.ingredients.length}</p>
                <ul className="list-disc pl-8">
                    {recipe.ingredients.map((ingredient,index)=>{
                        if(index > 2){
                            return
                        }
                        return <li key={ingredient}>{ingredient}</li>
                    })}
                </ul>
                <hr />
                <div className="flex flex-row gap-5">
                    <div className="flex flex-row gap-3 items-center">
                        <i className='bx bx-time'></i>
                        <p>{recipe.preparingTime} minute</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <i className='bx bxs-hot'></i>
                        <p>{recipe.calories} calories</p>
                    </div>
                </div>
                <button onClick={()=>handleCook(recipe)}
                    className="hover:bg-[#0be58a85] bg-[#0BE58A] px-5 py-3 font-semibold rounded-full w-fit">Want
                    to cook</button>
            </div>
        </div>
    )
}