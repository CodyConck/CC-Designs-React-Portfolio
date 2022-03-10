import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import { MdLaptopMac } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

import collage from '../assets/CollageSoA.png'
import bar from '../assets/bar.png'
import print from '../assets/print.png'
import task from '../assets/task.png'
import team from '../assets/team.png'
import regex from '../assets/regex.png'

import React from 'react'

function Projects() {
    const projectData = [
        {
            name: 'State of the Art',
            id: 0,
            description: 'This full stack web application allows users to search for and locate works of art.',
            img: collage,
            github: 'https://github.com/CodyConck/ArtFiles2',
            deployed: 'https://state-of-art.herokuapp.com/'
        },
        {
            name: 'One-Stop-Print-Shop',
            id: 1,
            description: 'Full stack MERN application that serves as an e-commercer site for a print shop.',
            img: print,
            github: 'https://github.com/CodyConck/One-Stop-Print-Shop',
            deployed: 'https://one-stop-print-shop.herokuapp.com/'
        },
        {
            name: 'Team Profile Generator',
            id: 2,
            description: 'Command line application that uses Node.js to prompt a user to enter in information about their work team members. Once all prompts are answered, an HTML is generated using the user input to populate cards for each employees position.',
            img: team,
            github: 'https://github.com/CodyConck/Team-Profile-Generator',
            deployed: 'https://drive.google.com/file/d/1OTRL2HgAlR27h5GKXHAFKVOf1DqCVLPD/view'
        },
        {
            name: 'Brewed Force',
            id: 3,
            description: 'A website designed for globe-trotting beer enthusiasts that matches users with breweries in new cities.',
            img: bar,
            github: 'https://github.com/CodyConck/globe-trotting-and-bar-hopping',
            deployed: 'https://takes101.github.io/globe-trotting-and-bar-hopping/'
        },
        {
            name: 'React-Task-Tracker2021',
            id: 4,
            description: 'A simple React based task organizer, built as an exercise to better understand the React framework. This was based off of a YouTube tutorial from Traversy Media',
            img: task,
            github: 'https://github.com/CodyConck/React-Task-Tracker2021',
            deployed: 'https://codyconck.github.io/React-Task-Tracker2021/'
        },
        {
            name: 'Regex Tutorial',
            id: 5,
            description: 'In this tutorial, I will break down a Regular Expression/Regex that is used to match an email.',
            img: regex,
            github: 'https://gist.github.com/CodyConck/1798fe20b62c67902415ea64e055943c',
            deployed: 'https://gist.github.com/CodyConck/1798fe20b62c67902415ea64e055943c'
        }
    ]
    return (
        <Container fluid>
            <Row>
                {projectData.map((projectData) => (
                    <Col>
                        <Card style={{ width: '18rem' }} key={projectData.id}>
                            <Card.Img variant="top" src={projectData.img} />
                            <Card.Body >
                                <Card.Title>{projectData.name}</Card.Title>
                                <Card.Text>
                                    {projectData.description}
                                </Card.Text>
                              <h4 className= 'text-center'>
                                <a href={projectData.github} target="_blank" style={{ padding: 10 }} alt='GitHub profile link'rel="noreferrer">
                                 <FaGithub/>
                                </a>

                                <a href={projectData.deployed} target="_blank" style={{ padding: 10 }} alt='live deployment link'rel="noreferrer">
                                <MdLaptopMac/>
                                </a>
                              </h4>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects