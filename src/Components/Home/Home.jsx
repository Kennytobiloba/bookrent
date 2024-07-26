
import Features from '../../Features/Features'
import BestSelling from '../BestSelling/BestSelling'
import Latest from '../Latest/Latest'
import Main from '../Main/Main'

const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Main/> 
       <BestSelling/>
       <Features/>
       <Latest/>
    </div>
  )
}

export default Home