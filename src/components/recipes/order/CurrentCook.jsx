import recipes from "../../../data/recipes";

export default function CurrentCook({currentCook}) {
    return (
        <div className="card-body">
            <h2 className="text-center font-bold text-xl">Currently Cooking: {currentCook.length}</h2>
            <table>
                <thead>
                    <tr className="text-left">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCook.map((recipe, index) => {
                        return (
                            <tr key={recipe.recipeID+index}>
                                <td>{index+1}</td>
                                <td>{recipe.recipeName}</td>
                                <td>{recipe.preparingTime} minutes</td>
                                <td>{recipe.calories} Calories</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}