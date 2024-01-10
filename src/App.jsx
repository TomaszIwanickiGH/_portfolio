import { Sidebar, Nav, About, TechStack, Experience, Projects, Contact } from './components';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
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
