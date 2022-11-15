import Header from "../components/header";
import AboutMe from "../components/about-me";

const index = () => {
    return(
        <>
            <Header />
            <div className="grid grid-cols-1 h-screen place-items-center">
                <AboutMe />
            </div>
        </>
    )
}

export default index;