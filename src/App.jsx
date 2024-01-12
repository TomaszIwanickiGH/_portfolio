import { Sidebar, Nav, About, TechStack, Experience, Projects, Contact } from './components';

const App = () => {
  return (
    <div className="flex w-full bg-primary  text-white gap-8 min-h-screen">
      <div className="md:flex hidden w-[8%]">
        <div className="md:fixed">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col w-full gap-16 md:py-12 md:px-8 p-8">
        <Nav />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
