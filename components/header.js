import { useGlitch } from 'react-powerglitch';

const Header = () => {
    const navEffect = useGlitch({
        "playMode": "hover",
        "timing": {
            "duration": 700,
            "iterations": 1
        }
    });
    
    return(
        <>
            <div className="bg-[url('../public/theme-wallpaper.jpg')] bg-no-repeat p-8 bg-bottom bg-cover">
                <nav className="py-6">
                    <ul className="hidden md:flex md:justify-end">
                        <li className="mx-4">
                            <a href="#about" className="text-[1.25em] text-white hover:text-green-300" ref={navEffect.ref}>ABOUT ME</a>
                        </li>
                        <li className="mx-4">
                            <a href="#section-projects" className="text-[1.25em] text-white hover:text-green-300" ref={navEffect.ref}>PROJECTS</a>
                        </li>
                        <li className="mx-4">
                            <a href="#" className="text-[1.25em] text-white hover:text-green-300" ref={navEffect.ref}>CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <div className="text-center">
                    <img className="rounded-full h-72 w-72 mx-auto object-cover shadow-2xl" src="https://images.alphacoders.com/105/thumb-1920-1050187.jpg" />
                    <div className="text-white text-[2rem] font-medium mt-5">ARTUR YASINSKIY</div>
                    <p className="text-gray-300 font-light text-[1.25em] mb-10">CYBER SECURITY & NETWORKING</p>
                </div>

            </div>
        </>
    )
}

export default Header;