import React from 'react'

const Registration = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="signup-form">
                        <form action="" className="mt-5 border p-4 bg-light shadow">
                            <h4 className="mb-5 text-secondary">Creá tu cuenta</h4>
                            <div className="row">
                                {/*Email*/}
                                <div className="mb-3 col-md-6">
                                    <label>Email<span className="text-danger">*</span></label>
                                    <input type="text" name="Email" className="form-control" placeholder="Ingresar Email" />
                                </div>
                                {/*Contraseña*/}
                                <div className="mb-3 col-md-12">
                                    <label>Contraseña<span className="text-danger">*</span></label>
                                    <input type="password" name="password" className="form-control" placeholder="Ingresar Contraseña" />
                                </div>
                                {/*Confirmar contraseña*/}
                                <div className="mb-3 col-md-12">
                                    <label>Confirmar Contraseña<span className="text-danger">*</span></label>
                                    <input type="password" name="confirmpassword" className="form-control" placeholder="Confirmar Contraseña" />
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary float-end">Registrarse</button>
                                </div>
                            </div>
                        </form>
                        <p className="text-center mt-3 text-secondary">Si ya tenés una cuenta <a href="#">Iniciá Sesión</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration