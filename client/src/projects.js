import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaLink } from "react-icons/fa"; // Ensure this line is correct
// import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const projects = [
    {
      title: "Student Cloud Website",
      url: "https://github.com/udaykiranhub/MyStudentCLoud.git",
      description: "A comprehensive portfolio platform for students to showcase their skills and thoughts. Built using the MERN stack, this project features a robust backend with Express.js and Node.js, and a dynamic frontend with React.js. The application includes user authentication, profile management, and an interactive interface for students to share their projects and collaborate. MongoDB is used to handle the data storage, ensuring scalability and flexibility.",
      demoUrl: "https://student-cloud-website.vercel.app/", // Update with actual demo URL
    },
  

    {
      title: "Landing Page with Full Integration",
      url: "https://github.com/udaykiranhub/MyEd.git",
      description: "A simple landing page with complete frontend and backend integration, hosted on Vercel. This project showcases effective use of modern web technologies to create a seamless user experience.",
      demoUrl: "https://my-ed-five.vercel.app/", 
    },
    {
      title: "Ether Scan API Task",
      url: "https://github.com/udaykiranhub/EtherScanApi.git",
      description: "A task using the Ether Scan API to view transactions, demonstrating the ability to interact with blockchain data effectively.",
      demoUrl:"https://udaykiranhub.github.io/EtherScanApi/"
    },
    {
      title: "Ethereum Voting Application with Foundry",
      url: "https://github.com/udaykiranhub/VotingApp.git",
      description: "Developed an Ethereum blockchain voting application with a testing framework foundry, showcasing knowledge of smart contract development and testing.",
    },
    {
      title: "DeFi Swap with MyToken (MTK)",
      url: "https://github.com/udaykiranhub/DefiSwapWithLiquidity.git",
      description: "Created a Uniswap token exchanging protocol with my own token, MyToken (MTK), successfully integrated with a local Ganache blockchain and MetaMask.",
    },
    {
      title: "Redux Store for Products with Pagination",
      url: "https://github.com/udaykiranhub/ProductsWithReduxStore.git",
      description: "Implemented a simple Redux store for managing products with pagination in React, demonstrating state management skills.",
      demoUrl:"https://udaykiranhub.github.io/ProductsWithReduxStore/"
    },
    {
      title: "Block Explorer Project",
      url: "https://github.com/udaykiranhub/BlockExplorer.git",
      description: "Developed a block explorer project using the Ether Scan API key, providing insights into blockchain transactions.",
    },
     
    {
      title: "Portfolio Website (Without React)",
      url: "https://github.com/udaykiranhub/studentCloud.git",
      description: "A fully functional and responsive portfolio website developed without using the React framework. This project demonstrates proficiency in using HTML, CSS, and JavaScript to create a professional online presence. The website features various projects, skills, and contact information, presented in a clean and organized manner. It highlights the ability to build modern and responsive web applications from scratch.",
    }
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">My Projects</h1>
        </Col>
      </Row>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center mb-3">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-2"
                  >
                    <FaGithub className="me-1" /> View Code
                  </Button>
                  {project.demoUrl && (
                    <Button
                      variant="success"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="me-1" /> View Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
