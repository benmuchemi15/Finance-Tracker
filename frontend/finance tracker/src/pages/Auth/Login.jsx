import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // handle login form
    const handleLogin =async (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setError("Please enter a valid email address");
            return;
        }
        if (!password) {
            setError("Please enter password");
            return;
        }

        setError("");

        // Login api call
    }

    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Please enter your info to log in
                </p>

                <form onSubmit={handleLogin}>
                    <Input
                    value={email}
                    onChange= {({target}) => setEmail(target.value)}
                    label="email address"
                    placeholder= "user@email.com"
                    type="text"
                    />
                    <Input
                    value={password}
                    onChange= {({target}) => setPassword(target.value)}
                    label="Password"
                    placeholder= "minimum 10 characters"
                    type="password"
                    />

                    {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                    <button type="submit" className="btn-primary">
                        LOGIN
                    </button>

                    <p className="text-[13px] text-slate-800 mt-3">
                        Don't have an account? {""}
                        <Link className="font-medium text-primary underline" to="/signup">
                        Signup 
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}   

export default Login