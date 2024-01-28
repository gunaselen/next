"use client";
import { axiosAuth } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();


  useEffect(() => {
    console.log(session);
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkZW50aWZpZXIiOiJhbGlzb25faG9sZW5AbW9oYXdraW5kLmNvbSIsImV4cCI6MTcwODgzMjg4MywiaWF0IjoxNzA2MjQwODgzLjg2MTgxMywiZW1haWwiOiJhbGlzb25faG9sZW5AbW9oYXdraW5kLmNvbSIsImVtcGxveWVlX2lkIjoiMTQ4OSIsImJ1c2luZXNzX3BhcnRuZXJfaWQiOiI4MDAwMDAxNDU3IiwidmVyc2lvbl9udW1iZXIiOiIxIn0.J-y9tG0e4bSY7cO3u-DR2WVzLdLpiw29PzI1kwmV8zk`;
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
          prevRequest.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkZW50aWZpZXIiOiJhbGlzb25faG9sZW5AbW9oYXdraW5kLmNvbSIsImV4cCI6MTcwODgzMjg4MywiaWF0IjoxNzA2MjQwODgzLjg2MTgxMywiZW1haWwiOiJhbGlzb25faG9sZW5AbW9oYXdraW5kLmNvbSIsImVtcGxveWVlX2lkIjoiMTQ4OSIsImJ1c2luZXNzX3BhcnRuZXJfaWQiOiI4MDAwMDAxNDU3IiwidmVyc2lvbl9udW1iZXIiOiIxIn0.J-y9tG0e4bSY7cO3u-DR2WVzLdLpiw29PzI1kwmV8zk`;
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return axiosAuth;
};

export default useAxiosAuth;