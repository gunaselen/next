"use client";

import axios from "@/lib/axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  console.log(session);
  const refreshToken = async () => {
    const res = await axios.post("/token_refresh/", {
      refresh: session,
      headers: { 
        'Authorization': `Bearer ${session?.user}`
      },
    });

    if (session) session.user = res.data;
    else signIn();
  };
  return refreshToken;
};