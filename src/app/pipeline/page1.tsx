import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import TabContent from '../components/TabContent/TabContent'
import DashboardTabCard from '../components/DashboardTabCard/DashboardTabCard'
import { ApptsIcon, CustomersIcon, LeadsIcon, OpportunitiesIcon, OrdersIcon, ProfileIMg, ProjectsIcon, QuotesIcon, TaskIcon } from "@/utils/images";
import TabSection from '../components/TabSection/TabSection'
import TabelLayout from '../components/TabelLayout/TabelLayout'

const tabText = ["All","Pipeline","Operation","Business"]
const tabTexts = ["All","Source"]

const tadCard = [
  {
    id:3,
    tabTitle:"Pipeline",
    title:"Leads",
    count:"8",
    cardIcon:LeadsIcon,
  },
  {
    id:4,
    tabTitle:"Pipeline",
    title:"Opportunities",
    count:"28",
    cardIcon: OpportunitiesIcon,
  },
  
  {
    id:6,
    tabTitle:"Pipeline",
    title:"Quotes",
    count:"822",
    cardIcon:QuotesIcon,
  },
  {
    id:5,
    tabTitle:"Pipeline",
    title:"Customers",
    count:"82",
    cardIcon:CustomersIcon,
  },

]

const tabelHeaders = [
    {
      id:1,
      tabelHeader:"#",
      datavalue:"#",

    },
    {
      id:2,
      tabelHeader:"Collessssge/Institute",
      datavalue:"collessssgeInstitute",

    },
    {
      id:3,
      tabelHeader:"Degree",
      datavalue:"degree",

    },
    {
      id:4,
      tabelHeader:"Major",
      datavalue:"major",

    },
    {
      id:5,
      tabelHeader:"Grade / %",
      datavalue:"grade",

    },
    {
      id:5,
      tabelHeader:"Start Year",
      datavalue:"startYear",

    },
    {
      id:7,
      tabelHeader:"End Year",
      datavalue:"endYear",

    },
    {
      id:8,
      tabelHeader:"Certificates",
      datavalue:"certificates",

    },
    {
      id:9,
      tabelHeader:"Actions",
      datavalue:"actions",

    }];
  const values = [
    {
      id: 1,
    
      collessssgeInstitute:"Guru Nanak College",
      degree:"Bsc",
       major:"Computer Science",
        grade:"86.3%",
         startYear:"2017",
         endYear:"2021",
         certificates:"",
         actions:""
    },
    {
      id: 2,
    
      collessssgeInstitute:"Guru Nanak College",
      degree:"Bsc",
       major:"Computer Science",
        grade:"86.3%",
         startYear:"2017",
         endYear:"2021",
         certificates:"",
         actions:""
    }
  ];



export default function page() {
  return (
    <div>
         <Header/>
  <div className="dashboard-content continer">
  {/* <TabContent title={"Dashboard :"} tabContent={tabText}/> */}
  {/* <DashboardTabCard content={tadCard} /> */}
  </div>
  <div className="continer">

  {/* <TabContent title={"Scorecards :"} tabContent={tabTexts}/> */}
  <TabSection title={"Leads by Source Scorecard"} >
    <div className="tab-inne">

{/* slider  */}


      <div className="tabelSection ">
       
    <TabelLayout tabelHeaders={tabelHeaders} values={values} />
    </div>
    <div className="chartSection">

    {/* chartSection  */}

    </div>
    </div>

   

  </TabSection>
  </div>
    </div>
  )
}
