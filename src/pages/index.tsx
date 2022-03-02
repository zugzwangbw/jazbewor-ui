import InfoSection from '@/components/InfoSectionCPT'
import PresentationCPT from '@/components/PresentationCPT'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <PresentationCPT />
      <InfoSection />
    </>
  )
}

export default Home
