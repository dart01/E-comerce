import  { useState } from 'react';

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLogin = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleLogin}>
                <img src="path/to/user/icon.png" alt="User Icon" />
            </button>
            {isOpen && (
                <div className="login-modal">
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
