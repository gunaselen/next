import prisma from '@/lib/prisma'
import "../app/globals.scss";
import { GetServerSideProps } from 'next'
import Header from '@/app/components/Header/Header';
import TabContent from "@/app/components/TabContent/TabContent";
import DashboardTabCard from "@/app/components/DashboardTabCard/DashboardTabCard";
import TabSection from "@/app/components/TabSection/TabSection";
import TabCard from "@/app/components/TabCard/TabCard";
import TabelLayout from "@/app/components/TabelLayout/TabelLayout";
type Props = {
  dashboard: any,
  dashboardType: any
}

export default function Page(props: Props) {

  const tabelHeaders = [
    {
      id: 1,
      tabelHeader: "#",
      datavalue: "#",

    },
    {
      id: 2,
      tabelHeader: "Collessssge/Institute",
      datavalue: "collessssgeInstitute",

    },
    {
      id: 3,
      tabelHeader: "Degree",
      datavalue: "degree",

    },
    {
      id: 4,
      tabelHeader: "Major",
      datavalue: "major",

    },
    {
      id: 5,
      tabelHeader: "Grade / %",
      datavalue: "grade",

    },
    {
      id: 5,
      tabelHeader: "Start Year",
      datavalue: "startYear",

    },
    {
      id: 7,
      tabelHeader: "End Year",
      datavalue: "endYear",

    },
    {
      id: 8,
      tabelHeader: "Certificates",
      datavalue: "certificates",

    },
    {
      id: 9,
      tabelHeader: "Actions",
      datavalue: "actions",

    }];
  const values = [
    {
      id: 1,

      collessssgeInstitute: "Guru Nanak College",
      degree: "Bsc",
      major: "Computer Science",
      grade: "86.3%",
      startYear: "2017",
      endYear: "2021",
      certificates: "",
      actions: ""
    },
    {
      id: 2,

      collessssgeInstitute: "Guru Nanak College",
      degree: "Bsc",
      major: "Computer Science",
      grade: "86.3%",
      startYear: "2017",
      endYear: "2021",
      certificates: "",
      actions: ""
    }
  ];

  return <>
    <Header></Header>
    <div className="dashboard-content continer">
      <TabContent title={"Dashboard :"} dashboardType={props.dashboardType} />
      <DashboardTabCard dashboard={props.dashboard} />
    </div>

    <div className="continer">
      <TabContent title={"Scorecards  :"} dashboardType={props.dashboard} />
      <TabSection title={"Volume Scorecard"} >
        <div className="tab-inne">

          {/* slider  */}


          <div className="tabelSection">
            <div className="tabelSection-card bg-color ">
              <TabCard title={"Month to Date"} date={"(July 1-8)"} aumount={"430 Orders"} />
              <TabCard title={"Month to Date"} date={"(July 1-8)"} aumount={"430 Orders"} />
              <TabCard title={"Month to Date"} date={"(July 1-8)"} aumount={"430 Orders"} />
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
              <TabCard title={"Month to Date"} aumount={"430 Orders"} />
              <TabCard title={"Month to Date"} aumount={"430 Orders"} />
              <TabCard title={"Month to Date"} aumount={"430 Orders"} />
            </div>

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
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const dashboard = await prisma.dashboard.findMany({
    include: {
      dashboard: true, // All posts where authorId == 20
    }
  });
  const dashboardType = await prisma.dashboard_type.findMany();


  return {
    props: {
      dashboard, dashboardType
    }
  }
}
