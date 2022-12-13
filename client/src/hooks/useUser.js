import { useEffect } from "react";

function useUser(user) {
  useEffect(() => {
    const postAnUser = async () => {
      const request = await fetch(`https://simple-content-management-system-redux.vercel.app/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: user.user.displayName,
          email: user.user.email,
          role: "user",
        }),
      });
      const response = await request.json();
      console.log(response);
    };
    postAnUser();
  }, [user]);
}

export default useUser;
