import styled from 'styled-components'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  text-align: center;
  padding: 20px;
`

const HeroHeading = styled.h1`
  font-size: 3rem;
  color: #333;
`

const HeroSubtext = styled.p`
  font-size: 1.2rem;
  color: #666;
`

const HeroButtons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
  }

  .primary {
    background-color: #0070f3;
    color: white;
  }

  .secondary {
    background-color: white;
    color: #0070f3;
    border: 1px solid #0070f3;
  }
`

export default function Hero() {
  return (
    <HeroSection>
      <HeroHeading>Catchy Headline</HeroHeading>
      <HeroSubtext>Some engaging subtext to draw the user in.</HeroSubtext>
      <HeroButtons>
        <button className="primary">Get Started</button>
        <button className="secondary">Learn More</button>
      </HeroButtons>
    </HeroSection>
  )
}
