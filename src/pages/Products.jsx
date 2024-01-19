import React from 'react'
import { useEffect, useState } from 'react'

export default function Products() {
  const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            res => res.json()
        ).then(data=> {
            setBackendData(data)
        })
    }, [])

    const params = new URLSearchParams(document.location.search);
    const currentID = Number(params.get("id"))
    const currentCar = backendData[currentID-100]

  return (

    <div>
    {typeof currentCar === 'undefined' ? (
      <p>Loading...</p>
    ): (
      <img src={currentCar.prodimg}></img>
    )}

 </div>
  )
}
