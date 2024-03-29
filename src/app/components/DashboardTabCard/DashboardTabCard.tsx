'use client';
import React, { useState, useEffect } from 'react';
import "./DashboardTabCard.scss"
import Image from 'next/image'
import { ApptsIcon, CustomersIcon, LeadsIcon, OpportunitiesIcon, OrdersIcon, ProfileIMg, ProjectsIcon, QuotesIcon, TaskIcon } from "@/utils/images";
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';
import { useSession } from "next-auth/react";



export default function DashboardTabCard(props: any) {
  const [data, setData] = useState(null);

  const { data: session, status } = useSession();

    

  const axiosAuth = useAxiosAuth();

  const icons: any = {
    'appts': ApptsIcon,
    'customers': CustomersIcon,
    'leads': LeadsIcon,
    'opportunities': OpportunitiesIcon,
    'orders': OrdersIcon,
    'profile': ProfileIMg,
    'projects': ProjectsIcon,
    'quotes': QuotesIcon,
    'tasks': TaskIcon
  }

  useEffect(() => {
    console.log(session,status);

    const fetchData = async () => {
      const response = await axiosAuth.post('/get_employee_details/', {});
      const data =  response.data;
      setData(data);
      console.log(data);
    };

    if (status === "authenticated" && session) {
        if (session) {
          fetchData();
        }
    }
}, [session, status]);


  const { content, dashboard } = props
  return (

    <div className='card'>
      {
        dashboard.map((item: any, index: number) => {
          return (
            <div key={index} className='dsCard'>
              <p className='dsCard-name'>{item?.dashboard?.name}</p>
              <div className="dsCard-inside">
                <div className="dsCard-left">
                  <h3 className="dsCard-title">{item?.name}</h3>
                  <h1 className="dsCard-count">{item?.count || Math.floor(Math.random() * 101)}</h1>
                </div>
                <div className="dsCard-icon"><Image src={icons[item.db_slug]} alt="" priority /></div>


              </div>
            </div>
          )
        })
      }

    </div>
  )
}
