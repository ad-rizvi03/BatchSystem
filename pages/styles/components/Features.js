import styled from 'styled-components'

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 40px 20px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`

const FeatureItem = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export default function Features() {
  return (
    <FeaturesSection>
      <h2>Features</h2>
      <p>Highlight the key features of the app.</p>
      <FeaturesGrid>
        <FeatureItem>Feature 1</FeatureItem>
        <FeatureItem>Feature 2</FeatureItem>
        <FeatureItem>Feature 3</FeatureItem>
      </FeaturesGrid>
    </FeaturesSection>
  )
}
