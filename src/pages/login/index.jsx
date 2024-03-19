import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/slices/UserSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (key, value) => {
    setAccount((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = async () => {
    const response = await dispatch(userLogin(account)).unwrap();

    if (response?.id) {
      toast.success("Đăng nhập thành công");
      navigate("/");
    } else {
      toast.error("Đăng nhập thất bại");
    }
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)]">
      <div className="w-[400px] shadow-md flex flex-col p-2">
        <h1 className="text-lg font-bold text-center p-2 mb-4">Login page</h1>
        <input
          placeholder="username"
          className="border border-gray-200 p-2 outline-none rounded-md"
          value={account.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <input
          placeholder="password"
          className="border border-gray-200 p-2 outline-none rounded-md mt-2"
          type="password"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 mt-3 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}
