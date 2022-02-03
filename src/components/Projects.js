import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import React from 'react'

function Projects() {
    const projectData = [
        {
            name: 'State of the Art',
            description: 'This full stack web application allows users to search for and locate works of art.',
            img: (''),
            github: 'https://github.com/CodyConck/ArtFiles2',
            deployed: 'https://state-of-art.herokuapp.com/'
        },
        {
            name: 'Brewed Force',
            description: 'A website designed for globe-trotting beer enthusiasts that matches users with breweries in new cities.',
            img: (''),
            github: 'https://github.com/CodyConck/globe-trotting-and-bar-hopping',
            deployed: 'https://takes101.github.io/globe-trotting-and-bar-hopping/'
        },
        {
            name: 'One-Stop-Print-Shop',
            description: 'Full stack MERN application that serves as an e-commercer site for a print shop.',
            img: (''),
            github: 'https://github.com/CodyConck/One-Stop-Print-Shop',
            deployed: 'https://one-stop-print-shop.herokuapp.com/'
        },
        {
            name: 'React-Task-Tracker2021',
            description: 'A simple React based task organizer, built as an exercise to better understand the React framework. This was based off of a YouTube tutorial from Traversy Media',
            img: (''),
            github: 'https://github.com/CodyConck/React-Task-Tracker2021',
            deployed: 'https://codyconck.github.io/React-Task-Tracker2021/'
        },
        {
            name: 'File-Uploader',
            description: 'Front End of a file uploader built with react. Clone repo, install necessary dependencies, run "npm run dev"!',
            img: (''),
            github: 'https://github.com/CodyConck/file-uploader',
            deployed: ''
        },
        {
            name: 'Team Profile Generator',
            description: 'Command line application that uses Node.js to prompt a user to enter in information about their work team members. Once all prompts are answered, an HTML is generated using the user input to populate cards for each employees position.',
            img: (''),
            github: 'https://github.com/CodyConck/Team-Profile-Generator',
            deployed: 'https://drive.google.com/file/d/1OTRL2HgAlR27h5GKXHAFKVOf1DqCVLPD/view'
        },
        {
            name: 'Regex Tutorial',
            description: 'In this tutorial, I will break down a Regular Expression/Regex that is used to match an email.',
            img: (''),
            github: 'https://gist.github.com/CodyConck/1798fe20b62c67902415ea64e055943c',
            deployed: ''
        }
    ]
    return (
        <Container fluid>
            <Row>
                {projectData.map((projectData) => (
                    <Col>
                        <h1></h1>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={projectData.img} />
                            <Card.Body>
                                <Card.Title>{projectData.name}</Card.Title>
                                <Card.Text>
                                    {projectData.description}
                                </Card.Text>
                                <Button variant="primary" href={projectData.github} target="_blank">GitHub</Button>
                                <Button variant="primary" href={projectData.deployed} target="_blank">Deployed App</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects