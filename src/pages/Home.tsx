
import HomeShell from '../components/home/HomeShell';

function Home() {

  return (
    <div className="absolute w-full h-full">
      <header className='w-full fixed top-0 bg-slate-600 text-white flex justify-end p-4 items-center h-10' >
        <button>Get Started</button>

      </header>
      <HomeShell />
      <footer>
        <h1>This is the footer</h1>
      </footer>
    </div>
  );
}

export default Home;
