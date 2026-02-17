import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Ourteam from './components/Ourteam/index';
import FAQ from './components/FAQ/index';


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <Aboutus />
      <Digital />
      <Beliefs />
      <Ourteam />
      <Dedicated />
      <FAQ />
    </main>
  )
}
