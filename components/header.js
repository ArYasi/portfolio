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
                            <a href="#about" className="font-term text-header text-white hover:text-green-300" ref={navEffect.ref}>ABOUT ME</a>
                        </li>
                        <li className="mx-4">
                            <a href="#section-projects" className="font-term text-header text-white hover:text-green-300" ref={navEffect.ref}>PROJECTS</a>
                        </li>
                        <li className="mx-4">
                            <a href="#" className="font-term text-header text-white hover:text-green-300" ref={navEffect.ref}>CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <img className="rounded-full h-72 w-72 mx-auto object-cover shadow-2xl" src="/avatar.png" />
            </div>
        </>
    )
}

export default Header;