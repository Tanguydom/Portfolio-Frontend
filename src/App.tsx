import './App.css'
import AboutMe from "./sections/AboutMe/AboutMe.tsx";
import Introduction from "./sections/Introduction/Introduction.tsx";
import Technologies from "./sections/Technologie/Technologie.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Wrapper from "./components/Wrapper.tsx";
import Layout from "./components/Layout.tsx";
import Academic from "./sections/Academic/Academic.tsx";
import Form from "./sections/Form/Form.tsx";

const App: React.FC = () => (
    <Layout>
        <Wrapper>
            <section id="about-me">
                <AboutMe/>
            </section>
            <section id="introduction">
                <Introduction/>
            </section>
            <section id="technologies">
                <Technologies/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="projects">
                <Academic/>
            </section>
            <section id="projects">
                <Form/>
            </section>

        </Wrapper>
    </Layout>
);

export default App;
