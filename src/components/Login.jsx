import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
const { login } = useContext(AuthContext);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const credentials = {
admin: { username: "admin", password: "admin123", role: "admin" },
user: { username: "user", password: "user123", role: "user" },

};

const handleSubmit = (e) => {
e.preventDefault();
setLoading(true);
setError("");
const matchedUser = Object.values(credentials).find(
(cred) => cred.username === username && cred.password === password
);

if (matchedUser) {
login({ username: matchedUser.username, role: matchedUser.role });
} else {
setError("Invalid username or password");
}
 setLoading(false);
};

return (
<div className="flex items-center justify-center min-h-screen bg-black text-white">
<div className="bg-neutral-900 rounded-2xl shadow-2xl p-10 w-full max-w-md border border-green-500">
<h1 className="text-3xl font-bold text-center mb-4">Welcome to Music App</h1>
<p className="text-center text-gray-400 mb-6">Login to continue</p>
{error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
<br />
<br />
<form onSubmit={handleSubmit} className="space-y-4">
<input class='username'
type="text"
placeholder="Username"
value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
   />
   <br />
   <input class='password'
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
   />
   <br />
   <button
    type="submit"
    className="w-full py-3 rounded-full bg-green-500 hover:bg-green-600 font-semibold transition"
   >
    Log In
   </button>
  </form>
  <div className="mt-6 text-center text-gray-400 text-sm">
   <p>
    Don’t have an account?{" "}
    <span className="text-green-500 hover:underline cursor-pointer">
     Sign up free
    </span>
   </p>
  </div>
 </div>
</div>
 );
}