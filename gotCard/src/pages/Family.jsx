
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import "../style/family.css"
import { useLoaderData } from 'react-router-dom';

function Family () {
  const [lannisters, setLannisters] = useState([]);

  const characters = useLoaderData()


  useEffect (() => {
    let lannisters = characters.filter((character) => character.lastName.includes("Lannister"))
    setLannisters(lannisters)
  }, []);


  return (
    <section className="containFamilyList character-list">
      {lannisters && lannisters.map((lannister)=>
      <Card character={lannister} key={lannister.id}/> 
      )}
     
    </section>
  )
}

export default Family