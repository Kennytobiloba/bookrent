
import Features from '../../Features/Features'
import BestSelling from '../BestSelling/BestSelling'
import Footer from '../Footer/Footer'
import Latest from '../Latest/Latest'
import Main from '../Main/Main'
import Newsletter from '../Newsletter/Newsletter'

const Home = () => {
  return (
    <div className=' '>
       <Main/> 
       <BestSelling/>
       <Features/>
       <Latest/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Home