import Image from "next/image";
import  "../page.scss";
import Header from "../components/Header/Header";
import TabContent from "../components/TabContent/TabContent";
import DashboardTabCard from "../components/DashboardTabCard/DashboardTabCard";
import { ApptsIcon, CustomersIcon, LeadsIcon, OpportunitiesIcon, OrdersIcon, ProfileIMg, ProjectsIcon, QuotesIcon, TaskIcon } from "@/utils/images";
import TabSection from "../components/TabSection/TabSection";
import Sliders from "../components/Slider/Slider";
import TabelLayout from "../components/TabelLayout/TabelLayout";
import TabCard from "../components/TabCard/TabCard";
import prisma from '@/lib/prisma' 


export default async function Home() {
  
  const dashboard = await prisma.dashboard.findMany({include: {
    dashboard: true, // All posts where authorId == 20
  }});
  const dashboardType = await prisma.dashboard_type.findMany();
  
  console.log(dashboard,dashboardType);

  const tabText = ["All","Pipeline","Operation","Business"]

  const tadCard = [
    {
      id:1,
      tabTitle:"Operations",
      title:"Appts",
      count:"8",
      cardIcon: ApptsIcon,
    },
    {
      id:2,
      tabTitle:"Operations",
      title:"Tasks",
      count:"22",
      cardIcon:TaskIcon,
    },
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
      id:5,
      tabTitle:"Pipeline",
      title:"Customers",
      count:"82",
      cardIcon:CustomersIcon,
    },
    {
      id:6,
      tabTitle:"Pipeline",
      title:"Quotes",
      count:"822",
      cardIcon:QuotesIcon,
    },
    {
      id:7,
      tabTitle:"Business",
      title:"Orders",
      count:"8",
      cardIcon:OrdersIcon,
    },
    {
      id:8,
      tabTitle:"Business",
      title:"Projects",
      count:"8",
      cardIcon:ProjectsIcon,
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
  return (
  <>
  <Header/>
  <div className="dashboard-content continer">
  <TabContent title={"Dashboard :"} tabContent={tabText} dashboardType={dashboardType} />
  <DashboardTabCard content={tadCard}  dashboard={dashboard} />
  </div>
  <div className="continer">
  <TabContent title={"Scorecards  :"} tabContent={tabText} dashboardType={dashboardType} />
  <TabSection title={"Volume Scorecard"} >
    <div className="tab-inne">

{/* slider  */}


      <div className="tabelSection">
        <div className="tabelSection-card bg-color ">
        <TabCard title= {"Month to Date"}date={"(July 1-8)"}aumount={"430 Orders"} />
        <TabCard title= {"Month to Date"}date={"(July 1-8)"}aumount={"430 Orders"} />
    <TabCard title= {"Month to Date"}date={"(July 1-8)"}aumount={"430 Orders"} />
    </div>
    </div>
    <div className="chartSection">

    {/* chartSection  */}

    </div>
    </div>

   

  </TabSection>



  <TabSection title={"Performance Trend Scorecard"} >
    <div className="tab-inne">

{/* slider  */}


      <div className="tabelSection ">
        <div className="tabelSection-card ">
        <TabCard title= {"Month to Date"}aumount={"430 Orders"} />
        <TabCard title= {"Month to Date"}aumount={"430 Orders"} />
    <TabCard title= {"Month to Date"}aumount={"430 Orders"} />
    </div>
    <TabelLayout tabelHeaders={tabelHeaders} values={values} />
    </div>
    <div className="chartSection">

    {/* chartSection  */}

    </div>
    </div>

   

  </TabSection>

  <TabSection title={"Status Scorecard"} >
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

  <TabSection title={"Product Type Scorecard"} >
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

  </>
  );
}
