import React from 'react'
import "./TabelLayout.scss"

function TabelLayout(props:any) {
    const {tabelHeaders,values} = props
  return (
    <div className="tableResponsive">
    <table>
      <thead>
        <tr>
          {tabelHeaders.map((header:any, index:number) => {
            return <th key={index}>{header.tabelHeader}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {
          values.map((item:any, index:number) => (
            <tr key={index}>
              {tabelHeaders.map((header:any, indexs:number) => (

                <td key={header}>
                  {header.datavalue === '#' ? 
                      index+1 
                   : (
                    item[header.datavalue]
                  )}
                  
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  )
}

export default TabelLayout
