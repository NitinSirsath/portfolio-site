import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { data } from '../projectdata'
import {Container,Heading,CardWrapper} from '../styles/ProjectStyles'


const Projects = () => {
  return (
    <Container>
      <Heading>PROJECTS</Heading>
        <CardWrapper>
          {data.map((element)=> {
            return <ProjectCard key={element.id} element={element}/>
          })}
        </CardWrapper>
    </Container>
  )
}

export default Projects