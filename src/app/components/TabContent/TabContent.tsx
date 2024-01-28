import React from 'react'
import "./TabContent.scss"

function TabContent(props:any) {
    const {title , tabContent , dashboardType} = props
  return (
    <div className="tab">
        <h1 className=' tab-title'>{title}</h1>
        
        {
            dashboardType?.map((iterm: any ,index:number) =>{ 
                return(
                <div key={index} className='tab-content'>
                {iterm.name}
                </div>
            )} )
        }
 
    </div>
  
  )
}

export default TabContent
