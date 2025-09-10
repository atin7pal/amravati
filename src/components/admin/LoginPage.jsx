import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../AuthContext";
import logo from '../../assets/logofooter.svg'

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // <-- Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await fetch("https://amravatigroup.in/login.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        login(data.token);
        navigate("/admin");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full min-h-screen themebg flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 mx-auto space-y-6 border bg-white shadow-md py-1 pb-20 px-10 w-full max-w-xl"
      >
          <img src={logo} alt="" className="mx-auto h-[150px] w-fit py-6 rounded-full themebg mt-6" />
        <h2 className="text-3xl text-center">Login As Admin</h2>
        <div className="w-full accentfont">
          <label className="accentfont" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 w-full accentfont"
          />
        </div>
        <div>
          <label className="accentfont" htmlFor="password">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border p-2 w-full accentfont pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="btn w-full accentfont flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
