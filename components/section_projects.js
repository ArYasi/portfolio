import Link from "next/link";

import { DiPython } from "react-icons/di";
import { VscTerminalBash } from "react-icons/vsc";

let SectionProjects = () => {
    return(
        <>
            <div className="flex justify-start bg-white" id="section-projects">
                <div className="m-12 w-full">
                    <p className="text-[2em] font-semibold">PROJECTS</p>
                    <div className="grid grid-flow-col auto-cols-max">
                        <Link href={"https://github.com/ArYasi/NLYZER"}>
                            <div className="my-5 rounded-lg w-96 shadow-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] duration-300 ease-in-out hover:cursor-pointer">
                                <div className="mx-14 my-7 flex">
                                    <p className="font-semibold">NLYZER</p>
                                    <span class=" mx-2 inline-block py-1.5 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">Working On</span>
                                </div>
                                <div className="mx-14 mb-5 text-[0.9em] text-slate-800">
                                    An automated vulnerability scanner that uses python and XML as an nmap wrapper. It is able to detect open ports with a given IP address or IP range. It can further enumerate open ports or services and write a final report.
                                </div>
                                <div className="max-14 my-7 flex space-x-4 justify-center">
                                    <div><DiPython size={36}/></div>
                                    <div><VscTerminalBash size={36}/></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionProjects;