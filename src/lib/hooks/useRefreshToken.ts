"use client";

import axios from "@/lib/axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession() as any;

  console.log(session);
  const refreshToken = async () => {
    const res = await axios.post("/validate_token/",{}, {
      headers: { 
        'Authorization': `${session?.user?.account?.access_token}`
      },
    });

    if (session) session.user.refreshToken = res.data;
    else signIn();
  };
  return refreshToken;
};