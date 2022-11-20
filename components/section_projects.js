import { DiPython } from "react-icons/di";
import { VscTerminalBash } from "react-icons/vsc";

let SectionProjects = () => {
    return(
        <>
            <div className="bg-white flex justify-start" id="section-projects">
                <div className="m-12 w-full">
                    <p className="text-[2em]">PROJECTS</p>
                    <div className="grid grid-flow-col auto-cols-max">
                        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] my-5 rounded w-96 grid place-items-center">
                            <div className="mx-14 my-7">NLYZER</div>
                            <div className="mx-14 mb-5 text-[0.9em]">An automated vulnerability scanner that uses python and XML as an nmap wrapper. It is able to detect open ports with a given IP address or IP range. It can further enumerate open ports or services and write a final report.</div>
                            <div className="max-14 my-7 flex space-x-4">
                                <DiPython size={36}/>
                                <VscTerminalBash size={36}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionProjects;