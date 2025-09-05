// src/pages/ProfessionalCertificates.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 20px;
  text-align: center;
  color: #fff;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #58a6ff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #c9d1d9;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const CertificateCard = styled.div`
  background: #161b22;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #30363d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
  }
`;

const CertificateTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CertificateInfo = styled.p`
  color: #8b949e;
  font-size: 0.95rem;
`;

function ProfessionalCertificates() {
  return (
    <Container>
      <Title>Professional Certificates 🎓</Title>
      <Description>
        Professional certificates are tailored for working professionals looking
        to upskill and gain IIT-recognized expertise. Showcase your knowledge
        and career growth with these advanced certifications.
      </Description>

      <CertificateGrid>
        <CertificateCard>
          <CertificateTitle>AI & Machine Learning</CertificateTitle>
          <CertificateInfo>Recognized by IIT Experts</CertificateInfo>
        </CertificateCard>
        <CertificateCard>
          <CertificateTitle>Cloud Computing</CertificateTitle>
          <CertificateInfo>Issued by IIT Faculties</CertificateInfo>
        </CertificateCard>
        <CertificateCard>
          <CertificateTitle>Blockchain Technology</CertificateTitle>
          <CertificateInfo>Endorsed by IIT Alumni</CertificateInfo>
        </CertificateCard>
      </CertificateGrid>
    </Container>
  );
}

export default ProfessionalCertificates;