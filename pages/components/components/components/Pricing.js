import styled from 'styled-components'

const PricingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 40px 20px;
  text-align: center;
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`

const PricingItem = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export default function Pricing() {
  return (
    <PricingSection>
      <h2>Pricing Plans</h2>
      <p>Choose a plan that suits you best.</p>
      <PricingGrid>
        <PricingItem>
          <h3>Basic</h3>
          <p>$10/mo</p>
          <ul>
            <li>Feature A</li>
            <li>Feature B</li>
          </ul>
        </PricingItem>
        <PricingItem>
          <h3>Pro</h3>
          <p>$20/mo</p>
          <ul>
            <li>Feature C</li>
            <li>Feature D</li>
          </ul>
        </PricingItem>
      </PricingGrid>
    </PricingSection>
  )
}
