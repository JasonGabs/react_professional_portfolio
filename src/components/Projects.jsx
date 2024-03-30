import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import multipleChoiceQuiz from "../assets/mutipleChoiceQuiz.png";
import noteTaker from "../assets/noteTaker.png";
import passwordGenerator from "../assets/passwordGenerator.png";
import textEditor from "../assets/textEditor.png";
import tictacdoh from "../assets/tictacdoh.png";
import workDay from "../assets/workDay.png";
import retracked from "../assets/retracked.png";

const Projects = () => {
    return (
        <h1 id="projects" className="text-center font-serif text-5xl pt-6 outline outline-1 bg-purple-300"> Projects
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3 text-left">
                                <h3 className="truncate text-sm font-medium text-gray-900">Password Generator</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">Generate a password!</p>
                            <a href="https://github.com/JasonGabs/Password_Generator" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={passwordGenerator} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://jasongabs.github.io/Password_Generator/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">Multiple Choice Quiz</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">Answer mutiple choice questions!</p>
                            <a href="https://github.com/JasonGabs/Multiple_Choice_Quiz" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={multipleChoiceQuiz} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://jasongabs.github.io/Multiple_Choice_Quiz/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">Work Day Scheduler</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">Schedule the work day!</p>
                            <a href="https://github.com/JasonGabs/Calendar_Planer" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={workDay} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://jasongabs.github.io/Calendar_Planer/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">Re-Tracked</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">Look up covers for songs!</p>
                            <a href="https://github.com/MyComplex/enigmatic_syntax_re-tracked" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={retracked} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://MyComplex.github.io/enigmatic_syntax_re-tracked/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">Note Taker</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">Take some notes at the press of a button!</p>
                            <a href="https://github.com/JasonGabs/Note_Taker" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={noteTaker} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://note-taker-jason-d262c50fcc11.herokuapp.com/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">Text Editor App</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">A stand alone offline text editor!</p>
                            <a href="https://github.com/JasonGabs/text_editor" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={textEditor} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://quiet-island-76570-f0e973158dd2.herokuapp.com/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>

                        </div>
                    </div>
                </li>
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate text-left">
                            <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">Tic-Tac-Doh</h3>
                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Project</span>
                            </div>
                            <p className="text-left mt-1 truncate text-sm text-gray-500">Tic-tac-toe with a simpsons theme and personal accounts!</p>
                            <a href="https://github.com/Neetk962/tic-tac-doh" target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-xl py-1 px-4 rounded-lg">Repository</a>
                        </div>
                        <img className="h-20 w-32 flex-shrink-0 rounded-sm outline outline-1 outline-black bg-gray-300" src={tictacdoh} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a href="https://tic-tac-doh-37df013dc60d.herokuapp.com/" target="_blank" rel="noreferrer" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                    <FaLocationArrow />
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </h1>
    )
}

export default Projects;