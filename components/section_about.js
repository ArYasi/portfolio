let SectionAbout = () => {
    return(
        <>
            <div className="grid md:grid-cols-2" id="about">
                <div className="bg-white h-[20em] flex">
                    <div className="m-14">
                        <p className="text-[1.25em] text-gray-800 my-5 font-medium">
                            I am a hobbyist who works with servers, networks, and everything in between. I focus more into Cyber Security by learning how to lock down systems and networks. I am constantly learning new tools and programming techniques to make life a little bit easier. I have a goal in the future to be someone who can either secure your system or break into it, legally of course.
                        </p>
                        <footer className="indent-6 text-gray-600 font-light leading-relaxed">
                            <cite>- "Scripting is my superpower. I automate everything in life."</cite>
                        </footer>
                    </div>
                </div>
                <div className="bg-white h-[20em] flex md:inline hidden">

                </div>
                <div>

                </div>
            </div>
        </>
    );
}

export default SectionAbout;