import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Themes
const lightTheme = {
  body: "#ffffff",
  text: "#1a1a1a",
  cardBg: "#f9f9f9",
  cardBorder: "#e0e0e0",
  buttonBg: "#007bff",
  buttonText: "#ffffff",
  navBg: "#f5f5f5",
  navText: "#1a1a1a",
  modalBg: "rgba(0, 0, 0, 0.5)",
};

const darkTheme = {
  body: "#121212",
  text: "#f5f5f5",
  cardBg: "#1e1e1e",
  cardBorder: "#333333",
  buttonBg: "#1e90ff",
  buttonText: "#ffffff",
  navBg: "#1f1f1f",
  navText: "#f5f5f5",
  modalBg: "rgba(0, 0, 0, 0.8)",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s ease;
  }
`;

// Dummy Course Data
const coursesData = {
  Bootcamp: [
    { id: 1, title: "Frontend Bootcamp", description: "Learn React, HTML, CSS & JS from scratch." },
    { id: 2, title: "Backend Bootcamp", description: "Master Node.js, Express & Databases." },
  ],
  "IIT Certifications": {
    Graduates: [
      { id: 3, title: "AI for Graduates", description: "IIT certified AI course for graduates." },
      { id: 4, title: "Data Science for Graduates", description: "Advanced data science program." },
    ],
    "College Students": [
      { id: 5, title: "Python for Students", description: "IIT certified Python foundation course." },
      { id: 6, title: "Machine Learning Basics", description: "Intro to ML with real projects." },
    ],
  },
  "New Launches": [
    { id: 7, title: "Blockchain 101", description: "New course on blockchain technology." },
    { id: 8, title: "Cybersecurity Basics", description: "Learn to secure applications & networks." },
  ],
};

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.navBg};
  color: ${(props) => props.theme.navText};
  border-bottom: 1px solid ${(props) => props.theme.cardBorder};
`;

const NavTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const ThemeToggle = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const TabButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) =>
    props.active ? props.theme.buttonBg : props.theme.cardBg};
  color: ${(props) =>
    props.active ? props.theme.buttonText : props.theme.text};
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const SubTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const EnrollButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.85;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.modalBg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${(props) => props.theme.cardBg};
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 8px 12px;
  border: none;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border-radius: 5px;
  cursor: pointer;
`;

const CoursesPage = () => {
  const [theme, setTheme] = useState("light");
  const [activeCategory, setActiveCategory] = useState("Bootcamp");
  const [activeSubCategory, setActiveSubCategory] = useState("Graduates");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let displayedCourses = [];
  if (activeCategory === "IIT Certifications") {
    displayedCourses = coursesData["IIT Certifications"][activeSubCategory];
  } else {
    displayedCourses = coursesData[activeCategory];
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar>
        <NavTitle>Courses</NavTitle>
        <ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </ThemeToggle>
      </Navbar>

      {/* Main Category Tabs */}
      <Tabs>
        {Object.keys(coursesData).map((category) => (
          <TabButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </TabButton>
        ))}
      </Tabs>

      {/* Sub-tabs for IIT Certifications */}
      {activeCategory === "IIT Certifications" && (
        <SubTabs>
          {Object.keys(coursesData["IIT Certifications"]).map((sub) => (
            <TabButton
              key={sub}
              active={activeSubCategory === sub}
              onClick={() => setActiveSubCategory(sub)}
            >
              {sub}
            </TabButton>
          ))}
        </SubTabs>
      )}

      {/* Courses Grid */}
      <Container>
        <Grid>
          {displayedCourses.map((course) => (
            <Card key={course.id} onClick={() => setSelectedCourse(course)}>
              <CardTitle>{course.title}</CardTitle>
              <CardDesc>{course.description}</CardDesc>
              <EnrollButton>View Details</EnrollButton>
            </Card>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      {selectedCourse && (
        <ModalOverlay>
          <ModalContent>
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <CloseButton onClick={() => setSelectedCourse(null)}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ThemeProvider>
  );
};

export default CoursesPage;