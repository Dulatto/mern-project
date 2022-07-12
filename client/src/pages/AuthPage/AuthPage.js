import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function AuthPage() {
    return (
        <BrowserRouter>
            <Routes>
                <React.Fragment>
                    <div className="container">
                        <div className="auth-page">
                            <Route path='/login'>
                                <h3>Autorization</h3>
                                <form className="form form-login">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className='validate'
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className='validate'
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn btn blue">
                                            Submit
                                        </button>
                                        <a href="/" className="btn-outline btn-reg">Don't have an account?</a>
                                    </div>
                                </form>
                            </Route>

                            <Route path='/registration'>
                                <h3>Registration</h3>
                                <form className="form form-login">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className='validate'
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className='validate'
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn blue">
                                            Registration
                                        </button>
                                        <a href="/" className="btn-outline btn-reg">Already have an account?</a>
                                    </div>
                                </form>
                            </Route>
                        </div>
                    </div>
                </React.Fragment>
            </Routes>

        </BrowserRouter>
    )
}

export default AuthPage 
