import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModel from '../components/AddClientModel';

export default function Home() {
  return (
    <>
    <div className="d-clex gap-3 mb-4">
        <AddClientModel />
    </div>
            
        <Projects />
        <hr />
        <Clients/>
    </>
  )
}
