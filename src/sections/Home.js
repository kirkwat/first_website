import {useNav} from "../hooks/useNav"

const Home = () => {
    const homeRef = useNav("Home");
    
    return (
        <section ref={homeRef} id="homeSection">
            <h2>Home</h2>
            <p>
                bunch of text
            </p>
        </section>
    );
}

export default Home