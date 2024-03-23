import React from 'react'
import { useParams } from 'react-router-dom'

function NewProject() {
    const params = useParams();
    console.log(params);
  return (
    <div>NewProject {params.pageName}</div>
  )
}

export default NewProject