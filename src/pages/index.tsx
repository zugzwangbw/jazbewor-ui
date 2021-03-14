import Presentation from '@/components/PresentationCPT'
import Safety from '../../public/icons/01.svg'
import JazbeworLogo from '../../public/logo-p-full.svg'
import { Container } from '../styles/pages/HomeSTL'

const Home: React.FC = () => {
  return (
    <>
      <Presentation />
      <Container>
        <JazbeworLogo/>
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Jazbewor.</p>
      </Container>
    </>
  )
}

export default Home
