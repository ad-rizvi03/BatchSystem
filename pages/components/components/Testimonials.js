import styled from 'styled-components'

const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 40px 20px;
  text-align: center;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`

const TestimonialItem = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export default function Testimonials() {
  return (
    <TestimonialsSection>
      <h2>Testimonials</h2>
      <p>Read what our users say about us.</p>
      <TestimonialsGrid>
        <TestimonialItem>User feedback 1</TestimonialItem>
        <TestimonialItem>User feedback 2</TestimonialItem>
        <TestimonialItem>User feedback 3</TestimonialItem>
      </TestimonialsGrid>
    </TestimonialsSection>
  )
}
