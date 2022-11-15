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
        <div className="flex justify-center">
            <nav className="p-7 md:w-5/6 md:flex md:items-center md:justify-between">
                <div>
                    <span className="text-header text-white font-term">ARTUR YASINSKIY</span>
                </div>

                <ul className="md:flex md:items-center hidden">
                    <li className="mx-4">
                        <a href="#" className="font-term text-header text-white hover:text-green-200" ref={navEffect.ref}>ABOUT ME</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-term text-header text-white hover:text-green-200" ref={navEffect.ref}>PROJECTS</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-term text-header text-white hover:text-green-200" ref={navEffect.ref}>CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;