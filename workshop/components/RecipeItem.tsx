import { Recipe } from "@/interfaces/Recipe"
import style from "@/styles/Home.module.css"

export default function RecipeItem({recipe}: {recipe: Recipe}) {
    return (
      // padding: 20px;
      // margin: 20px;
      // border: 1px solid gray;
        <button type="button" className="p-8 m-8 flex flex-col justify-items-start align-items-center border-2 border-gray-500 hover:shadow-2xl focus:ring-blue-500 ring-5">
            <h2 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">{recipe.title}</h2>
            <div className="text-sm mt-4">
            <p>Servings: {recipe.servings}</p>
            <div>
            Ingredients: 
              <ul>
              {recipe.ingredients.split("|").map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                </li>
                ))}
              </ul>
            </div>
            <p>Instructions: {recipe.instructions}</p>
            </div>
        </button>
    )
}