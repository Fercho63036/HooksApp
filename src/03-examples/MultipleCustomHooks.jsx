import { useFetch } from "../hook/useFetch";

export const MultipleCustomHooks = () => {
  
    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/1');

    console.log({ data, isLoading, hasError });

    return (
    <>
        <h1>Pokemon API</h1>
    </>
  )
}
