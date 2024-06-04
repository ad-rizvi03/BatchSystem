import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

export async function getStaticProps() {
  const data = {
    features: ["Feature 1", "Feature 2", "Feature 3"],
    testimonials: ["Testimonial 1", "Testimonial 2", "Testimonial 3"],
    pricing: [
      { plan: "Basic", price: "$10/mo", features: ["Feature A", "Feature B"] },
      { plan: "Pro", price: "$20/mo", features: ["Feature C", "Feature D"] }
    ]
  }

  return {
    props: {
      features: data.features,
      testimonials: data.testimonials,
      pricing: data.pricing
    }
  }
}

export default function Home({ features, testimonials, pricing, toggleTheme }) {
  return (
    <div>
      <Hero />
      <Features features={features} />
      <Screenshots />
      <Testimonials testimonials={testimonials} />
      <Pricing pricing={pricing} />
      <Contact />
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </div>
  )
}
