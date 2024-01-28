'use client';
import React, { useState, useEffect } from 'react';
import "./DashboardTabCard.scss"
import Image from 'next/image'
import { ApptsIcon, CustomersIcon, LeadsIcon, OpportunitiesIcon, OrdersIcon, ProfileIMg, ProjectsIcon, QuotesIcon, TaskIcon } from "@/utils/images";


export default function DashboardTabCard(props: any) {
  const [data, setData] = useState(null);

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

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer {{Auth_Token}}");



    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    const fetchData = async () => {
      const response = await fetch('https://mohawksae.azurewebsites.net/mohawk/v1/get_employee_details/', requestOptions);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

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
