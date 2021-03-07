import Safety from '../../public/icons/01.svg'
import JazbeworLogo from '../../public/jazbewor.svg'
import { Container, ImgHomo, ImgJazbeworLogo } from '../styles/pages/HomeSTL'

const Home: React.FC = () => {
  return (
      <Container>
      {/* <JazbeworLogo /> */}
      <ImgJazbeworLogo/>
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Jazbewor.</p>
      </Container>
  )
}

export default Home
