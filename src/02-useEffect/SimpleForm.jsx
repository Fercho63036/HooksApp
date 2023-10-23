import { useEffect } from "react";
import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'FerchoPV',
        email: 'ArielFParicaguaV@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        console.log('useEffect Called');
    }, []);

    useEffect(( ) => {
        console.log('formState Changed');
    }, [formState]);

    useEffect(( ) => {
        console.log('email Changed');
    }, [ email ]);

  return (
    <>
        <h1>Formulario Simple</h1>
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

    </>
  )
}
