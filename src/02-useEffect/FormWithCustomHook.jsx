import { useForm } from "../hook/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;

    // useEffect(() => {
        // console.log('useEffect Called');
    // }, []);

    // useEffect(( ) => {
        // console.log('formState Changed');
    // }, [formState]);

    // useEffect(( ) => {
        // console.log('email Changed');
    // }, [ email ]);

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <div className="mb-3 row">
                <label className="form-label"> Username </label>
                <div className="col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name="username"
                        value={ username }
                        onChange={ onInputChange }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="form-label"> Email </label>
                <div className="col-sm-10">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="ejemplo@ejemplo.com" 
                        name="email" 
                        value={ email }
                        onChange={ onInputChange }
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="form-label"> Contraseña </label>
                <div className="col-sm-10">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="contraseña" 
                        name="password" 
                        value={ password }
                        onChange={ onInputChange }
                    />
                </div>
            </div>

            <button onClick={ onResetForm } type="button" className="btn btn-primary">
                Borrar
            </button>

        </>
    )
}
