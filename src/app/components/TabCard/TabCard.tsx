import React from 'react'
import "./TabCard.scss"

function TabCard(props:any) {
    const {title,date,aumount} = props
  return (
    <div className={`tabCard ${date? "":"border"}`}>
       {title&&  <h5 className="tabCard-title">{title}</h5>}
       {date&&
       <p className="tabCard-date">{date}</p>
       }
       {aumount&& 
        <h1 className="tabCard-aumount">{aumount}</h1>
    }
    </div>
  )
}

export default TabCard
