export default function WantCook({wantToCook, handleCooking}) {

    return (
        <div className="card-body">
            <h2 className="text-center font-bold text-xl">Want to cook: {wantToCook.length}</h2>
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
                    {wantToCook.map((recipe, index) => {
                        return (
                            <tr key={recipe.recipeID}>
                                <td>{index+1}</td>
                                <td>{recipe.recipeName}</td>
                                <td>{recipe.preparingTime} minutes</td>
                                <td>{recipe.calories} Calories</td>
                                <td><button onClick={()=>handleCooking(recipe)}
                                    className="py-1 px-3 bg-green-500 font-medium rounded-full hover:bg-green-400">Preparing</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}