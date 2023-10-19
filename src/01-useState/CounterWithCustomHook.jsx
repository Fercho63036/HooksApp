import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {

    const { counter } = useCounter();

return (
    <>
        <h1> Counter with Hook: { counter } </h1>
        <hr />

        <button type="button" class="btn btn-danger"> +1 </button>
        <button type="button" class="btn btn-dark"> Reset </button>
        <button type="button" class="btn btn-danger"> -1 </button>

    </>
  )
}
