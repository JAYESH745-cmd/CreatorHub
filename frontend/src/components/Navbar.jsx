import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
  <div className="fixed top-0 z-50 w-full backdrop-blur-2xl">
    <div className=" max-w-8xl  px-5 flex items-center justify-between">
      
      {/* LEFT: Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="h-30 w-auto cursor-pointer"
      />

      {/* RIGHT: Auth / Button */}
      {user ? (
        <UserButton  />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-3 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}

    </div>
  </div>
);

};

export default Navbar;
