import React, { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
    BookIcon,
    FileQuestion,
    LayoutDashboardIcon,
    ChevronRight,
    ChevronLeft,
    Files,
} from "lucide-react";

function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`fixed top-0 left-0 bottom-0 h-screen bg-gray-100 shadow-lg flex flex-col items-center p-2 space-y-4 z-50 rounded-lg m-4 transition-all duration-300 
                    ${isOpen ? "w-24 sm:w-32 md:w-40 lg:w-48" : "w-12 sm:w-16 md:w-20 lg:w-24"}
                    ${isOpen || "md:block md:w-64 lg:w-72"} 
                    ${isOpen ? "block" : "hidden"} sm:hidden`}
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-center bg-white p-2 rounded-full shadow-md hover:bg-slate-200 transition-colors absolute top-2 left-1/2 transform -translate-x-1/2`}
                >
                    {isOpen ? (
                        <ChevronLeft className="text-black w-6 h-6" />
                    ) : (
                        <ChevronRight className="text-black w-6 h-6" />
                    )}
                </button>

                {/* Content */}
                <div className="flex flex-col items-center justify-between flex-grow w-full">
                    <img
                        src="images/ZuAI.png"
                        alt="Logo"
                        className="w-12 h-auto mt-4 rounded-lg cursor-pointer hover:bg-slate-600"
                        onClick={() => navigate("/")}
                    />
                    <div className="flex flex-col items-center justify-between flex-grow w-full p-2 space-y-4">
                        <Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
                            <LayoutDashboardIcon className="text-black w-6 h-6 group-hover:text-white" />
                        </Button>
                        <Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
                            <BookIcon className="text-black w-6 h-6 group-hover:text-white" />
                        </Button>
                        <Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
                            <Files className="text-black w-6 h-6 group-hover:text-white" />
                        </Button>
                        <Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
                            <FileQuestion className="text-black w-6 h-6 group-hover:text-white" />
                        </Button>
                    </div>
                </div>
                <img
                    src="images/TEEN.png"
                    alt="Logo"
                    className="w-12 h-auto bo mt-4 rounded-full cursor-pointer hover:bg-slate-600"
                />
            </div>
        </>
    );
}

export default NavBar;
