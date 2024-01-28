import React, { useState } from 'react'
import "./TabSection.scss"

export default function TabSection(props:any) {
    const {title} =props
    // const [tadSection,setTadSection]=useState(true)

    const tadSection = true
  return (
    <div className='tabs'>
    <div className="tabsectionHeader">

        <h3 className='tabsectionHeader-title'>{title}</h3>
        <h3 className='tabsectionHeader-rep'>{"Reports"}</h3>

    </div>
    {
    tadSection&&
    <div className='tapContent'>
{props.children}
    </div>
    }

    </div>
  )
}
