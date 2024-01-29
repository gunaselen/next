"use client";
import { axiosAuth } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const { data: session, status } = useSession() as any;
  const refreshToken = useRefreshToken();


  useEffect( () => {
    console.log(session, status);
    
    if (status === "authenticated" && session) {
      
      if (session) {
        const requestIntercept = axiosAuth.interceptors.request.use(
          (config) => {
            if (!config.headers["Authorization"]) {
              config.headers["Authorization"] = `Bearer ${session?.user?.refreshToken?.refresh_token}`
            }
            return config;
          },
          (error) => Promise.reject(error)
        );

        const responseIntercept = axiosAuth.interceptors.response.use(
          (response) => response,
          async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 401 && !prevRequest?.sent) {
              prevRequest.sent = true;
              await refreshToken();
              prevRequest.headers["Authorization"] = `Bearer ${session?.user?.refreshToken?.refresh_token}`
              return axiosAuth(prevRequest);
            }
            return Promise.reject(error);
          }
        );

        return () => {
          axiosAuth.interceptors.request.eject(requestIntercept);
          axiosAuth.interceptors.response.eject(responseIntercept);
        };
      }
    }
  }, [session, status]);

  return axiosAuth;
};

export default useAxiosAuth;