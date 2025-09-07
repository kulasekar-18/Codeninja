// src/pages/Home.js
import React from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Background animation */
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeContainer = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(270deg, #0d1b2a, #000000, #1b263b);
  background-size: 600% 600%;
  animation: ${gradientMove} 18s ease infinite;
  color: #f8f9fa;
  min-height: 100vh;
`;

/* Hero Section */
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 10%;
  background: linear-gradient(160deg, #0d1b2a, #1b263b, #111);
  color: white;
  min-height: 90vh;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const HeroText = styled.div`
  max-width: 550px;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 20px;
    color: #ff9800;
    text-shadow: 0 0 12px rgba(255, 152, 0, 0.9), 0 0 20px rgba(255, 152, 0, 0.6);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 30px;
    color: #ddd;
  }

  button {
    background: #ff9800;
    border: none;
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 15px rgba(255, 152, 0, 0.5);
  }

  button:hover {
    background: #e68900;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 152, 0, 0.8);
  }
`;

const HeroImage = styled.div`
  img {
    width: 460px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  }
`;

/* Section Wrapper */
const Section = styled.section`
  padding: 80px 10%;
  /* so anchored scroll doesn't hide behind any fixed header */
  scroll-margin-top: 90px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #ff9800;
    text-align: center;
    text-shadow: 0 0 12px rgba(255, 152, 0, 0.8), 0 0 22px rgba(255, 152, 0, 0.6);
  }

  h3 {
    margin-top: 30px;
    font-size: 1.8rem;
    color: #00b4d8;
    text-shadow: 0 0 8px rgba(0, 180, 216, 0.8);
  }
`;

/* Card Grid */
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

const CourseCard = styled.div`
  background: #1c1f26;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
  transition: 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 28px rgba(0, 180, 216, 0.4),
      0 0 18px rgba(255, 152, 0, 0.4);
    border-color: #00b4d8;
  }

  img {
    width: 100%;
    max-height: 160px;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 15px;
    background: #fff;
    padding: 10px;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #ffb703;
    text-shadow: 0 0 6px rgba(255, 183, 3, 0.7);
  }

  p {
    font-size: 0.95rem;
    color: #bbb;
    margin-bottom: 6px;
  }
`;

/* Testimonial Card */
const TestimonialCard = styled.div`
  background: #1c1f26;
  border-radius: 12px;
  padding: 30px;
  margin: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.4s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(0, 180, 216, 0.5);
  }

  h4 {
    margin-bottom: 10px;
    color: #ffb703;
  }
  span {
    font-size: 0.9rem;
    color: #aaa;
    display: block;
    margin-bottom: 12px;
  }
  p {
    font-size: 0.95rem;
    color: #ddd;
    line-height: 1.5;
  }
`;

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [{ breakpoint: 900, settings: { slidesToShow: 1 } }],
  };

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection id="hero">
        <HeroText>
          <h1>Master Coding with Code Ninja</h1>
          <p>
            Unlock your potential with expert-led courses, real-world projects,
            and a supportive learning community. Whether you’re a beginner or an
            advanced developer, Code Ninja is here for you.
          </p>
          <button>Get Started</button>
        </HeroText>
        <HeroImage>
          <img
            src="data:image/webp;base64,UklGRqILAABXRUJQVlA4IJYLAACQPQCdASq1ALQAPp1GnUulo6KipXIMALATiWNu3V0soRYD1k2UCPdAD1bh/nr/Tp/hvTM6oTehb+O0cRBJjN2IOF45v5e8zVVoNJ8gf1r7Cnlh+xb9zPZC/ac2OE5rpcfWj1+AMH/eStL2Yaw35WR8LKn/ygk5YsavcJGxfJbL5/NDVwBv4wVjmRsnFUF9AsJQBCuv3if6k/PNgttJRGQJnXIAA7XT/k8Z2L6xaF9q/cwz7H2x5e8UF1wbhbxOjWVWumbqQrsxLwuRz3vB/1mwMzxMo7tn3nlSFh4uQ2vpSQaAr0d/599NG+6b9JGyVBgXSoXKq8XxJGg3QuF0zxjRGcdxQfarxgRB/rs2Olf/Pqp+O3qs54MWW3qfgQZTybdzf6mjEU/e/syjnoE5CZU+ehWItHf+2wpImclU7WCRVJ3xWmJtep9gY7EM4/hZxw7iRR9T/YnpKV7T/zMUoReJ1DSkA+w6gNkPr7guv1MCfQBYDkbyvTrR4951irmsaM+BRG8nVD5GEOteKyiPEZbTQj3SOvlEAibNCyORFrN8JJnznwShcJsXqiRB61ubI3coVNDrKRn6ZlZP8XGBz2Vf+3A22qySsXYCHsE0SYl+WZDyn2c70M3pbQPt4J1JbhAm8NZSJKPdUXM4Te/AUwDJK1oesQAA/vq2gttAbathvNFxJ7T63q6ZD7wkAwI9NQ6GNLN7aIsuoaoQXqVxFm3nuxxxVBdf2WL1cQnuv4Um7g7o77bWpBDmd737YLlcZSTgCKa8JQisy3u8uA8P9sinY3aXcr6kptBqmWG0odYRAvizKdlcpz3VAUx1abi1Z3uC6h9KdFCcORLSJdraPakqwTY0RiCU2bl/yBYmcsO0tfmXYQj1W9BeQ+R0865Xeu98xQKOL4JzxYThlq9JSiVMDcGJBwk5NBp9idjTnD0mhzChFTuNlu1FeLR2rJLOKiz554Oq/br03xRLepe/ZbIjGo8Wac1CCXNI6yH29+VATv5cvcSYUzPrXOwpbO4WW6f3XgvsoCsdcqjM38qBNGlROOKzZ7Cs6+7W05PepTA1Ygt1e1JOpzDjIngHw2iAHQdpspNt4LCo/uXRHxe23pkXTd6uIAvIYP9gisNa5wXe/15S96dABFO3qDdWSrIGf4ox4UmlhbYh3C8KesZhoocFxwBjKEP3ZxkEfXIagSuypqCPYPCL5IeQDejkmAx08eLerSbPnxAUB3ovY2vYJ8Hb53eBitKngxoeZHQxcVcL+YvpC0dmK0k7SdIUsjtu+Sp6lFpNn04ZF6vmfNsDm0Vio3ZUigIvvmthaFxa1vZ7sGbdcDi8sQLXzHXWZ94Nbzu34IAe8qSjsQ8eIvHCxELKt1USZlu2sH9n9aBqxAmf+IRktf01vFaQr5c7+iFX/MsbK0empnvoa/gHY8kx+kmjZuyYTdgBhdgH8AfqzsMyPfkFT7LmCJ/eaYlPuaua6QpbAS9UQyCdXuZH6jM75KtcgOKy6IJu/8/ywk9v4q0WfPVVow+JCgjlinilDeuI0xbflpsemZsFHkHeEl7WVsZJEHIehhQ2GO/oPo8elYiJPHn3ONmQ1vqHApcBjWH7V2iPslyWdOaHa7dqSX2muyrWGqSblXHCW+TXffb2w/yTTdnCbayxiFGWj7g0WHtiktzvL0J7823ub9eI4RxR9O33qjyZzbnBwI2YhqTIwLNV6JnaWd+CR7/kqyTqLuW0UR6QLaQr2MBlbZSuj5fX83P7hTeCi4tDlMJsNK2qRGRq/Ug+NELTTq5C1A/LjAO1gsc1AqrNL+hZ2sUpzhRw7yod0B3qszDnuDSfRWBJ8aJweK9YThwuSuhSnknm28iMTLqLPSz6gS9Pk6xc3oLBBCVu/fgL9Yfqyx1uZNqT1lK8vUCeC0I0zMQ7qQk1gz2aOAK/paXIkOKkGpSSM56t/qbbeDO1QnwCMWHAJwZLpEaMn/gC3ZjbH125HWo0BWuYh6KWAvWGhoGPpf60xmOG7NBLMmW6tXm3BIPeJHOVNHi7yO/lADKb7pLahyvGG9qYSAhtAakRA5axLxDdvCmVzN2eX/65HTLrtMIGp97yEaM6PBZ2TCXEMDIWWxgQ3UeYvMdjf0EK7vGjJ2/XK058Z2sdT9s6Y7GCn+yCnyfdp3AwWzFk/tHDK49VLnV3jo7wK2Cdli6oln+nlrlfSoSdHWwP50P6JIHIuHhRGBgqMVanh7jIqkBWFuzKXEQaEUK4Xs1S0o9V/jUK/rnJR7ciNFE1QOVKAKPymylKLU6ZSYKNPqdjb4PYFUNaC6GiuDI7/8PB2CFIgegvt1FAK5vMj9NBBm7xsJJRgL1rjrFC9e8ick8jh8CAAFiCTvceoEfTUcptQwGMMBQ/eT0yOpyxfUI4la89dcYPTQc32kjZ8Vq7m08dJiC1okCAMAn4vN8P32bk2pFVsqGYhH1yl3PVfWUNpdonOQAK7HzI4wJwoDttQK2T4glsqFUMuHEOtauKYSLzILpnF9OTbrMuQeDPrR683WsCDqIElvTFEAl0bVkMykGIXn9hgoHZGF9DQD8DOuGopVrEJxrNGxRtAC2RAAdg8UH7O1J0uCgnKd2Z3fLI/iZvSaFqS3VgGqxNrfVCjr+JUzcNxTfxC8h3sA+hxEqmuJZyeLp0w/ODHTRrDukuRTORZ695vmZMNo9tmRZqg0dQjHPCT76BXZq+UOu/tw1etBKMZbOqAwvBJmkM1ZhNQF6iPTZCwF8x2YfWyzkWttptZwgs95mBMgt+q7fYzlgaG18GNtu6tSwE8+8IJy8AfnAgCqd3vbNk6Hmu/JvCdY9LarBjJMHxW///vnoxQuw1VJAcZpusvDw4GzJ7/xYF6KqhRmZ5qRz+PHerAVocdUYsAXr92E3jvnxM9woTQ6gopeSEevxDy2BUwS3AIRaUZBbfjjvW6i3rK4L5c4e1n4XyMSUDwA+tW119pvSPj30Sg2UYBQc4a7UXuhNElqfeVMe/sEObnQBB+3rmFhmog2LXmfldYXJz8Co3+934F3eW6b8srxOktfO0fnaOrMRtquww0yFR7a2R1poUTPcXPL/5Nyf7L5X02rep7Tze3C7gvC2ewDC2W1TU+DIDAWN9yneuGa538fqBSMfTnY9G1G3rw8VPrg2S1zuPofMnW6f8/EBilm30LV6CX39rRU9p/wHMQHTjSkSu0ZQaa+d8i6QwHPIBtafGgv8nqAcEc42I/853kofgC8v6rZA7o8bREv2yNffmsuv6Kh/4q3cev9BljV10hA344wFC0QQwlgJd+B4avrj7+Eta4h6RdWFeZVeuaUJgXlgMnQK3Kh0z0fRjhHk1xQ/Ey67VDI/x3nq+zMHIkHU0HMpUgQO6GdepfftyrW187uGer8BIvVN9Lymk4EVLqc0Cr3F9wizxAm8wcceaooFoshS9MjWwGdV/lqc+I3sAwY9Ot3odd0m/ovVhBbtm0iWcvLBtB1H5QkdVVfYWNyxAW2JwRyIs4RcFjLCwKu3dMCEF7emvMUw0mzQFXrhTFRGXrMVlKwBjMgc/hTAzlAgxViEB67baP+1aNh7gCyBOdH189PfroV0BJ29tbGfvOpNuCeO3LQuTJu34N2UYJW7ty1z3nWj58sWJjotVTargIv0IFuck6aZrq1zz3xwwvNMn6xcOtCCUAYjGOEtPGQTFxI5h1la3UPUS8HojzVCVUgfIzHnePKG9MkmL5ammDI94nN+WVgGI/m8LSZUF2aEidOYgQG+dfm8Pk3nf0LnOPN5vE0+wuIOwR71kx81ieubEXaHnM7dJeOYjA6mzjizsyu9DaCiE4A+kwFlthn48amtGj8eVVRo8ZIf8o/hIMEmmtwL998GkyP/EhWIH/upI5lZCb/kBwAt65dB1GaxoWGyLReD4h8coQU4NtvVRNi3gsJoCwCHj+18cSj8ezcu3Appx0oXRvQqsBuCAAAAAAA=="
            alt="Code Learning"
          />
        </HeroImage>
      </HeroSection>

      {/* Job Bootcamp */}
      <Section id="job-bootcamp">
        <h2>Job Bootcamp</h2>
        <CardGrid>
          <CourseCard>
            <img
              src="https://thf.bing.com/th?q=Full-Stack+Web+Development+Form&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
              alt="Full Stack Bootcamp"
            />
            <h4>Full Stack Web Development with GenAI</h4>
            <p>140+ Hrs of Content</p>
            <p>600+ Problems</p>
            <p>10K+ Learners</p>
          </CourseCard>
          <CourseCard>
            <img
              src="https://thf.bing.com/th/id/OIP.N0IJoHw0BqANp402fKmQUQHaD4?w=322&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3"
              alt="Data Analytics"
            />
            <h4>Data Analytics with GenAI</h4>
            <p>100+ Hrs of Content</p>
            <p>300+ Problems</p>
            <p>2000+ Learners</p>
          </CourseCard>
        </CardGrid>
      </Section>

      {/* IIT Certifications */}
      <Section id="iit-certifications">
        <h2>IIT Certifications</h2>

        <h3>For Graduates</h3>
        <CardGrid>
          <CourseCard>
            <img
              src="data:image/webp;base64,UklGRkANAABXRUJQVlA4IDQNAACwQgCdASoEAbQAPp1KnUwlpCMio7Ib2LATiWkNwl8A3mD0ABVteRCawyV63tnf03iT5dfe6DPjQZO/Cj/B9QK3t3KOm/6L0C/X37V/xPDl1JvA3QH/m/BT+t/432AP5T/T/91/gvx5+SH/o8qH1R/6f9F8A366+lz/9fbf+2nsYfqL/8idoMXK04ZJDon8uLkf/OuuQPR90LcP4Qe1vb6WtwK6lNbnhJyPV50Yl60HWmKivOGT3EYmlTLnZ0jjCLAeuEIetyalHtg4f2Bns7qpkIQgztFjoejf7MBP/mKrBulzoj8nBB/1HUgn62G6mFKferx13GTPl3CEKReg7FlJbDwCCB9xwbSD+SrPSKiF+M9MbXLPMdrjMtfqWLU1zbKys+7U7mNKNGyOnckdayjSeHqJVD1ibSOAMki7InynCQPDjMzz2gGZIK2E4nc66Ru3oaj0S4GxMBc4MbRjckBVKBsfdQs43qyzn8+KKNh1wTVNr91rR98K33Upc0Ln8AyNz+aqa2vnnClfigkfXFNugfK4V3UnbN9HGqCzIAA/elbukkbMovYYtVzVSq8JG4s1bRgIudArcZJn82P4r2t7nMbCALepVXsD+bOzISoBORRviHdX9crZ5lsh+pI4Bf0p72Z2s+2IVMKHvk10/v/w1oZoZ/LqdgeMpLgYBGPtPwDwWoOUbD6fQXk5FfVNypCdwLu3fVbklALUE6PUwAD+/f0TmVUzCF8dviNZxI4yMDDLk17ID0sfHOn72Im/upHVAU2Nu805Mu2clqkw/Rofq4nS+N49DiqStI4n6l2+udBSHGOTjkfITmpgGdERBubrdvizv4d79KHQEpnNYMtR5keHsdyM0FSeYNAysZZOUDgbzc/rZrBz0u2m9tP9fokQfw2UEiBzIzdizw+arhWlocf1cLP3PIi/rEYXNI5jF0Pw70OeYQFOnyq6F2+cvRdL+Et7ezT2q0zrsGgkS0efiZeipn6lLAcpecX58Du0bWAA/Fv4SKxp8FT4IdQYs98Uqpcrh2X0mkfxD+sT5E89P1+2uDcX+6DQTcEFOs7r4dhMDFQcgKJuRyzVFWFJZmItl+/OOAPhMZGBaGKTF9+/h+z+nfw5E2wQ1CtCHAB6Cauw4+kLC1KPiLt84fDPZwjPRFuNfJVRIzQHtCoMoPDpmbICd3xf2vm5F6JDS2ie96VESjaU0elzpHul+ATK3qGSE7oHJffHXlkxJutoQsKwY3AibYlcSxFvmKzuBdN6wAMOERXYo2Ri3VrTYl77KF5VHbzhDZBAVMede1SPH7sjyJmGd0tEufXFdqkCXAFFjM628hDT+RPzrJm183JM2wx+HMCsa/kzscHTe2vH6FeY5O7g/NRVZfCL0dUGTcRAPC6OMs/oQyU6f0sYPd+TuZz0ZVI9ggqWZWEGRb9+xo+UXECDdUQYjRbub0SxTjoQfwih+/W+6V0kZIJrk1iP8g1NSIRN6LxkpJ79F5BSaj945Jzhx8aor+XLPvKF/f8FQP/bCfzmPiDRyOi8tM46ephRV5ia6rhZ8aG9uYmYGB+Ahn5dZYpfWwNA9QzE8vLH/c1pHtVdm83Uywiobnq6utqHe3kwtrOc1S9Og/L+9ko9LVaghmVNvraWhfnkOqlnzy8phS9DO/kyZCDGZJqYOnmPIApmzTGkk4cbE0meC7OGgapCT2GWxgZ0Mi190YcQywx64cmUxW53Mrv7ozQdiBMqJIgtGfzn51XSPX0XKEU9mdruD/Oihgbb5t3fRKvlh3/Flfz0taUUl1VP7zz8pyfHkBVycHQXiAupXvr6doq/MfxDK5+EtjQfcc8vph+cIPydlHW30DnyZxLcxhfm8jVIgpJ1S0cONduHUJwOLRUy4US7Ht879m9AmVQwvOqfONNe8PduWiRqQt51Wk7YkuM/7c0WzgKQAsuXwOB6/9ce3p9x8hCUdDABKIB2K0LzzoLfle39FamDz+6WmnnmUQ/4em/4drhLawzNCmCr0qcjma69bUWT+MzZJYc0f5dDPsu3Ql+OzLst/wvDYV5x+Ddc3io7cpHttnjWT0Ard0hysDwTeToYotvjaJ4KwzY2w9ZfTZMeOeAaJntf+BFQPjgBJ38bam53wiJUQArkdPea6TE8+IEEwx59u/ArgrpVHkgqCoVtgryEHFmUXArv2s/jzKuAaVTW7mNHcz4iAf+rZGERDDs2LWAZ5swnZTIs12t3sVSHNSJgZCllyKO5cpWf9A/Nd2cnmuoDbcgh8JHF2wGj3KcqF68BrfhX69daeU0fbeJBzSOXoZYH0QfIxHfKiUIdkUjS14+Mj8APC0gppMN8k4oCCa3PLTuzenE28smRQc53I+8EYW34mPfoR53Mu51UHsYdFzmzK3dRRO3KSOEAo6uHtOpBtuWMvxvrTHeyTpI6kRXJSi9M/4x0SQZMJd3X8hPCQn1BIQKmjE1QHs9DDK2pHq0YO9q1xrsL7kXnQl/EIg79+JdPROStkoqFVPUEE6OjvT+KSt+OJhwIBMD53aaR/Ssdkn5gX+HNs41IgQv6g2uNUMqf+xx0V20Asz+LhO90Eo7VfiSCw9cFvaFkQ1UUMrG1ZlypGNdDtmXM0eKA+dE33Q4xsqXfWYO6DMlUA+yPROoeEOo8pM2CdJ4Ztd9yvXOOZr5DtTV20+Om7GIKRfst35TIeiphH87ql51ltIApFQ0YR+ki+dRUDNsT7QATY5qF6NYklm5W42t3qbpT/TOboh1Mt9G4xxcnT7IZN0XDjLmt9eq9qW6ZVoZh47zuZWWDoKqpwmEo+fzEZTF+PgfwENWdtLWrpY0n184k+8gayOfajquLDGildGJKInNVZq7xZeILMbknRAjVQ5v+tDq6+JO4vfaEIWET0UT4n3loIVGrK4cKi3BUt927PBMUQsdj+i8LvcT2k7PrgikOCa71a+CfrsDaZ5fAHQyRh27LxAYeYtzKii4Nbv4HxRYsTOsqbc9vritzk9CgpMo9Amywut0MggBidPkNCncvjMDXHM5ioxrO7LWmZ0Bu584rFZ3/P5UnZ2htTnPF6qQQGgJEnihTx2/MkpHL8ObE5/gcTFh8f9LRsyzBr2zNf/Gf8/mQoT5wwP0ZpYSs1iZ6MbjIb7n15pvLCuRKYShAbFArIf8/99Cedh4+KnykXjJOhz+stnDQz7CLLpBSYqpPdXxDswFkInS/c6sznU6yjPGoLSgW1hd3r50Je3Xu7BALffkFdEuIvZv23YfScXQzgpyM84GxDDrGylHAIwqwMI1/WEQInORd6q24uhpfWiclRGknh+bRMEusl/KlGH55HDH3di7EXh2ak5IJG4WnAyV8EAdMku/S98qVa3HALRmxZo5ZTCts4yIq3cnuEzrmd/9eBLNhuApbYVVSHSXkMoAU/cYvZYrFlvHuZLR/Z99kp0jhrrhYuo5lBUJEXMFmE1alSciDFg5Anqzr+HWNkIXI0EOVzY0chdf24IHvGE32vfrp8yhChIbyNN9/Ue61xuiHx4/8Xky36dZ6MSB1w/j1mpokh+R9sJRMVqVIKgb9YQZHaglu2dNWext0FoftHGO4nJpd2LJDtzIM9GOEaDwPz2Ca/ldlTlx8C5ud19gdgAgLNvoSpyw/WlLR0RDw73JdCRV66d7F3AG0p5r5PMBoIxZHVgJzXnFdD6Yk+Z4VOIZVoVQEhm15d3xMuajGVbwfr9+aG5FoLvr3IAUIBhKNIRN9sxF/c1rKH9m+YRH5OHx69fEXK0pDdSFpVbsq31OvsbfqAKSEGrIrnSKDGBtyWeAjG/hx3EIIERe9DSt+gRGfqHe/6pIVbLuqgVocDTBZ2VDZ8Rrj/4WuUNcgwSPx7w84Pf8vUO8dwK2S9fsldfqcfBAb8uGLxEqebjPhdbqJeoXAu+1gGZm3ReY5LpVXYw0A/CBwjWGFr5isZutfAXrp29KBVrt8EuIdgArCeTdmOQeImSB48r8oGIH7dm79BDHfmYkiq//Zj4xzri7R9Qwg6gcA4DMN5RBBQJg3OHBVq+Bg5ta/aiaF/rMuv8hD/d+NbwCGfxH0ZwpESQjawu1k/xpIQ17X1Eb2t3iVuKbXO1jzp3KVrbzcrlF2MNUQ5NE8uvz2PPcXuoR+SZQawAU3XZg/e5SO1nPYo0gNsLDqqOcudmn6P3yYgH25xzD8ssfNJh04/pathKlxWJWhjbnCApUTIUXb87SC03Q7jInzFZC4LnqNNZG2LYqAM8l813FhYPLS8wqex9cwtGO4iPoYcsguXwLP5e/8dtJlylsbYqDcriVe6Jn4aWdq5NyABi2Kq4c5n8oxfhzyTDxfpmsn95KzHcoHruNIblDS5xVH0NDWUiDFSA6L1JhJ6qo0LEJ8iSWLKCMIitY+/uZ/A3JE1WuYuP8jPwm6jR5TID5mJNVkSvIoobvECVCJaFFMxeSA8MeVQsfIfjOh75l83rMJnIea/Dt65v2QalhBK74oYEFXuqb70UAAABpDqYJJ1gLTcfHk7mLBuoAAAA=="
              alt="Data Analytics Certification"
            />
            <h4>PG Certification in Data Analytics with GenAI</h4>
            <p>Duration: 6 months</p>
          </CourseCard>
          <CourseCard>
            <img
              src="https://thf.bing.com/th/id/OIP.2fIuCG9MukoF_D20dQ05FAHaFj?w=200&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3"
              alt="GenAI Certification"
            />
            <h4>Advanced Certification in GenAI for Non-Tech Professionals</h4>
            <p>Duration: 6 months</p>
          </CourseCard>
        </CardGrid>

        <h3>For College Students</h3>
        <CardGrid>
          <CourseCard>
            <img
              src="https://thf.bing.com/th/id/OIP.54KG_78NKmGPKfFScCG4iQHaEB?w=323&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3"
              alt="Advanced DSA"
            />
            <h4>Training & Internship in Advanced DSA</h4>
            <p>Duration: 4 months</p>
          </CourseCard>
          <CourseCard>
            <img
              src="https://thf.bing.com/th/id/OIP.kI3ZfQqP71Ju-F9kODqgsgHaGL?w=202&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3"
              alt="Data Analytics Internship"
            />
            <h4>Training & Internship in Data Analytics</h4>
            <p>Duration: 6 months</p>
          </CourseCard>
          <CourseCard>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Full Stack Internship"
            />
            <h4>Training & Internship in Full Stack</h4>
            <p>Duration: 9 months</p>
          </CourseCard>
        </CardGrid>
      </Section>

      {/* New Launches */}
      <Section id="new-launches">
        <h2>New Launches</h2>
        <CardGrid>
          <CourseCard>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="Multi-Agent Systems"
            />
            <h4>Advanced Certification in GenAI & Multi-Agent Systems</h4>
            <p>100+ Hrs | 300+ Problems</p>
            <p>576+ Learners</p>
          </CourseCard>
          <CourseCard>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Non-Tech GenAI"
            />
            <h4>Advanced Certification in GenAI for Non-Tech Professionals</h4>
            <p>100+ Hrs | 300+ Problems</p>
            <p>523+ Learners</p>
          </CourseCard>
          <CourseCard>
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981d"
              alt="Data Science with GenAI"
            />
            <h4>Advanced Certification in Data Science with GenAI</h4>
            <p>140+ Hrs | 600+ Problems</p>
            <p>7300+ Learners</p>
          </CourseCard>
        </CardGrid>
      </Section>

      {/* Top Tech Companies */}
      <Section id="top-companies">
        <h2>Top Tech Companies Our Students Work At</h2>
        <CardGrid>
          <CourseCard>
            <img
              src="data:image/webp;base64,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"
              alt="Google"
            />
            <h4>Google</h4>
          </CourseCard>
          <CourseCard>
            <img
              src="https://th.bing.com/th/id/OIP.uHrDUCEbFVxRTdSSRjC5_gHaCu?w=318&h=128&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="Microsoft"
            />
            <h4>Microsoft</h4>
          </CourseCard>
          <CourseCard>
            <img
              src="data:image/webp;base64,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"
              alt="Amazon"
            />
            <h4>Amazon</h4>
          </CourseCard>
          <CourseCard>
            <img
              src="https://thf.bing.com/th/id/OIP.qSDLhxoPAKJKLKNpUSHxrwHaEK?w=283&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3"
              alt="Meta"
            />
            <h4>Meta</h4>
          </CourseCard>
          <CourseCard>
            <img
              src="data:image/webp;base64,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"
              alt="IBM"
            />
            <h4>IBM</h4>
          </CourseCard>
        </CardGrid>
      </Section>

      {/* Student Success Stories */}
      <Section id="success-stories">
        <h2>Student Success Stories</h2>
        <Slider {...sliderSettings}>
          <TestimonialCard>
            <h4>Durgesh Chouksey</h4>
            <span>Software Engineer, Sec-1</span>
            <p>
              Coding Ninja helped me transform my career. The structured
              learning path and interview prep gave me confidence to crack my
              dream company.
            </p>
          </TestimonialCard>
          <TestimonialCard>
            <h4>Onkar Shende</h4>
            <span>Software Engineer, TCS</span>
            <p>
              The placement bootcamp was excellent. Real projects + mock
              interviews helped me land a great role at TCS.
            </p>
          </TestimonialCard>
          <TestimonialCard>
            <h4>Trilochan Mishra</h4>
            <span>Intern, Infosys</span>
            <p>
              From beginner to professional, Code Ninja’s mentorship and IIT
              certification gave me a competitive edge during placements.
            </p>
          </TestimonialCard>
        </Slider>
      </Section>
    </HomeContainer>
  );
}

export default Home;