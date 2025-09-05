import React from "react";
import styled from "styled-components";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Hackathon 2025",
      date: "March 15, 2025",
      location: "Bangalore, India",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
      description:
        "Join the largest coding hackathon of the year with over 500+ participants and exciting prizes."
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "April 5, 2025",
      location: "Online",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=60",
      description:
        "Hands-on workshop on AI & Machine Learning, led by industry experts."
    },
    {
      id: 3,
      title: "Web Dev Bootcamp",
      date: "May 20, 2025",
      location: "Hyderabad, India",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60",
      description:
        "Learn full-stack web development in an immersive 2-week bootcamp."
    }
  ];

  return (
    <Container>
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <h1>Upcoming Events</h1>
          <p>
            Stay updated with the latest coding competitions, workshops, and
            seminars.
          </p>
        </HeroContent>
      </Hero>

      <EventsSection>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.title} />
            <EventContent>
              <h2>{event.title}</h2>
              <p className="date">{event.date} | {event.location}</p>
              <p className="desc">{event.description}</p>
              <RegisterButton>Register Now</RegisterButton>
            </EventContent>
          </EventCard>
        ))}
      </EventsSection>
    </Container>
  );
};

export default EventsPage;

// Styled Components
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;
`;

const Hero = styled.div`
  position: relative;
  height: 60vh;
  background: url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1500&q=80")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  max-width: 700px;
  padding: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const EventsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  padding: 50px 8%;
  background: #f9fafc;
`;

const EventCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const EventContent = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #222;
  }

  .date {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 12px;
  }

  .desc {
    font-size: 1rem;
    color: #555;
    margin-bottom: 15px;
  }
`;

const RegisterButton = styled.button`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
  }
`;