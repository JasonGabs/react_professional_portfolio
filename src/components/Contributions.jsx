import React from "react";

const Contributions = () => {
    return (
        <>
            <div className=" bg-slate-300 p-8 text-5xl text-center">
                Contributions
            </div>
            <div id="contributions">
                <ul role="list" class="divide-y divide-gray-100">
                    <li class="flex justify-between gap-x-6 p-5 bg-slate-200  outline-cyan-500">
                        <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto bg-slate-200">
                                <p class="text-sm font-semibold leading-6 py-1 text-gray-900">needecon.org</p>
                            </div>
                        </div>
                        <p class=" flex-1 mt-1 py-1 truncate leading-5 text-gray-500 text-xl">Contributed to mutiple pages</p>
                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Contribution</span>
                    </li>
                    <li class="flex justify-between gap-x-6 p-5 bg-slate-300 outline-cyan-500">
                        <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto bg-slate-300">
                                <p class="text-sm font-semibold leading-6 py-1 text-gray-900">pacificneurofeedback.com</p>
                            </div>
                        </div>
                        <p class="flex-1 mt-1 truncate leading-5 py-1 text-gray-500 text-xl">Contributed to mutiple pages</p>
                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Contribution</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contributions;