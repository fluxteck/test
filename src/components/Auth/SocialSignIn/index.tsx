"use client";

import { signIn } from "next-auth/react";

const SocialSignIn = () => {
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const handleFacebookSignIn = () => {
    signIn("facebook");
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Sign in with Google
      </button>
      <button
        onClick={handleFacebookSignIn}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Sign in with Facebook
      </button>
    </div>
  );
};

export default SocialSignIn;
