import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  min-height: 100vh;
`;

/* Hero Section */
const HeroSection = styled.div`
  width: 100%;
  height: 50vh;
  background: url("https://images.unsplash.com/photo-1555949963-aa79dcee981c")
    no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.6);
  }
`;

const HeroText = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
`;

/* About Section */
const AboutSection = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 5rem 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #222;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
`;

/* Team Section */
const TeamSection = styled.div`
  background: #fff;
  padding: 4rem 2rem;
  width: 100%;
`;

const TeamHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #222;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
`;

const TeamCard = styled.div`
  background: #fafafa;
  border-radius: 12px;
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const TeamImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const TeamName = styled.h3`
  margin: 0.5rem 0;
  color: #222;
`;

const TeamRole = styled.p`
  color: #777;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      {/* Hero */}
      <HeroSection>
        <HeroText>About Code Ninja</HeroText>
      </HeroSection>

      {/* About */}
      <AboutSection>
        <AboutText>
          <h2>Who We Are</h2>
          <p>
            At <strong>Code Ninja</strong>, we believe coding is not just about
            syntax—it’s about creativity, problem-solving, and building
            real-world solutions. Our mission is to empower learners with
            cutting-edge programming knowledge through structured courses, hands-on
            projects, and expert mentorship.
          </p>
        </AboutText>
        <AboutImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="About Us" />
      </AboutSection>

      {/* Team */}
      <TeamSection>
        <TeamHeading>Meet Our Team</TeamHeading>
        <TeamGrid>
          <TeamCard>
            <TeamImg src="https://randomuser.me/api/portraits/men/32.jpg" alt="John" />
            <TeamName>John Doe</TeamName>
            <TeamRole>Founder & CEO</TeamRole>
          </TeamCard>
          <TeamCard>
            <TeamImg src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" />
            <TeamName>Sarah Lee</TeamName>
            <TeamRole>Lead Instructor</TeamRole>
          </TeamCard>
          <TeamCard>
            <TeamImg src="https://randomuser.me/api/portraits/men/76.jpg" alt="Michael" />
            <TeamName>Michael Chan</TeamName>
            <TeamRole>Curriculum Designer</TeamRole>
          </TeamCard>
          <TeamCard>
            <TeamImg src="https://randomuser.me/api/portraits/women/25.jpg" alt="Emily" />
            <TeamName>Emily Davis</TeamName>
            <TeamRole>Community Manager</TeamRole>
          </TeamCard>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default AboutPage;