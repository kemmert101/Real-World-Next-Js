import RecipeItem from "@/components/RecipeItem";
import SearchBar from "@/components/SearchBar";
import { Recipe } from "@/interfaces/Recipe";

export default function SearchResults(props: any) {
    const { recipes, searchTerm } = props;

    return <div className="ml-8 mt-2 text-lg">
        <SearchBar initialSearchTerm={props.searchTerm}/>
        <h1 className="text-3xl">Search Results for {searchTerm}</h1>
        <div className="grid lg:grid-cols-3 xs:grid-cols-1" >
        {recipes.map((recipe: Recipe, index: number) => (
        <RecipeItem key={index} recipe={recipe}/>
    ))}
        </div>
        </div>;
}

export async function getServerSideProps({ params }: { params: any }) {
    const baseUrl = "https://api.api-ninjas.com/v1/recipe?query=";
    const apiKey = process.env.API_KEY as string;
    const headers: HeadersInit = {
        "X-Api-Key": apiKey,
    }
    const options: RequestInit = {
        headers
    }
    const response = await fetch(`${baseUrl}${params.slug}`, options);
    const data = await response.json();

    if (!response.ok) {
      return {
        notfound: true
      };
    }

    return {
        props: {
            recipes: data,
            searchTerm: params.slug,
        },
    };
}
