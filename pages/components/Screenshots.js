import styled from 'styled-components'

const ScreenshotsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 40px 20px;
  text-align: center;
`

const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`

const ScreenshotItem = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export default function Screenshots() {
  return (
    <ScreenshotsSection>
      <h2>Screenshots</h2>
      <p>Showcase the app interface.</p>
      <ScreenshotsGrid>
        <ScreenshotItem src="/screenshot1.png" alt="Screenshot 1" />
        <ScreenshotItem src="/screenshot2.png" alt="Screenshot 2" />
        <ScreenshotItem src="/screenshot3.png" alt="Screenshot 3" />
      </ScreenshotsGrid>
    </ScreenshotsSection>
  )
}
