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
            name: '',
            description: '',
            img: (''),
            github: '',
            deployed: ''
        },
        {
            name: '',
            description: '',
            img: (''),
            github: '',
            deployed: ''
        },
        {
            name: '',
            description: '',
            img: (''),
            github: '',
            deployed: ''
        },
        {
            name: '',
            description: '',
            img: (''),
            github: '',
            deployed: ''
        }
    ]
    return (
        <Container fluid>
            <Row>
                {projectData.map((projectData) => (
                    <Col>
                        <h1>Projects</h1>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={projectData.img} />
                            <Card.Body>
                                <Card.Title>{projectData.name}</Card.Title>
                                <Card.Text>
                                    {projectData.description}
                                </Card.Text>
                                <Button variant="primary">{projectData.github}</Button>
                                <Button variant="primary">{projectData.deployed}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects