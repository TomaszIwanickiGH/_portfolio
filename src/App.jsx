import { Sidebar, Nav, About, TechStack, Experience, Projects, Contact } from './components';

const App = () => {
  return (
    <div className="flex w-full bg-primary  text-white gap-8 min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
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
