// src/pages/ContactPage.js
import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(to bottom right, #f9f9f9, #e6f0ff);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2d2d2d;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 40px;
  color: #555;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 25px;

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    font-size: 1rem;
    background: #fafafa;

    &:focus {
      border-color: #007bff;
      background: white;
    }
  }

  label {
    position: absolute;
    left: 12px;
    top: 12px;
    background: white;
    padding: 0 5px;
    font-size: 0.9rem;
    color: #777;
    transition: all 0.2s;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -8px;
    left: 8px;
    font-size: 0.75rem;
    color: #007bff;
  }
`;

const SubmitButton = styled.button`
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const MapContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 1100px;

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 12px;
  }
`;

const ContactPage = () => {
  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Subtitle>We’d love to hear from you! Reach out anytime.</Subtitle>

      <ContactContainer>
        {/* Contact Info */}
        <ContactInfo>
          <InfoItem>
            <h3>📍 Address</h3>
            <p>123 CodeNinja Street, Tech City, India</p>
          </InfoItem>
          <InfoItem>
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </InfoItem>
          <InfoItem>
            <h3>📧 Email</h3>
            <p>support@codeninja.com</p>
          </InfoItem>
        </ContactInfo>

        {/* Contact Form */}
        <ContactForm>
          <FormGroup>
            <input type="text" required placeholder=" " />
            <label>Name</label>
          </FormGroup>
          <FormGroup>
            <input type="email" required placeholder=" " />
            <label>Email</label>
          </FormGroup>
          <FormGroup>
            <textarea rows="4" required placeholder=" "></textarea>
            <label>Message</label>
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>

      {/* Google Map */}
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199842609976!2d-122.41941558468143!3d37.77492977975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dcb9b9b5%3A0x2e5a0c43a9e7c9b1!2sTech%20Center!5e0!3m2!1sen!2sin!4v1678973527856!5m2!1sen!2sin"
          loading="lazy"
          title="Google Map"
        ></iframe>
      </MapContainer>
    </ContactWrapper>
  );
};

export default ContactPage;