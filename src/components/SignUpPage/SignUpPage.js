import React, { Component } from 'react'

export default class SignUpPage extends Component {
    render() {
        return (
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Sign Up
                </div>
                <div className="p-6 mt-8">
                    <form action="#">
                        <div className="flex flex-col mb-2">
                            <label htmlFor="required-email" className="text-gray-700">
                                Email
                            <span className="text-red-500 required-dot">
                                    *
                            </span>
                            </label>
                            <input type="text" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your email" />
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className=" relative ">
                                <label htmlFor="with-indications" className="text-gray-700">
                                    Password
                                 <span className="text-red-500 required-dot">
                                        *
                                 </span>
                                </label>
                                <input type="text" id="with-indications" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="passwor" placeholder="Password" />
                                <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                                    <div className="h-full col-span-3 bg-green-500 rounded">
                                    </div>
                                    <div className="h-full col-span-3 bg-green-500 rounded">
                                    </div>
                                    <div className="h-full col-span-3 bg-green-500 rounded">
                                    </div>
                                    <div className="h-full col-span-3 bg-gray-200 rounded dark:bg-dark-1">
                                    </div>
                                </div>
                                <div className="mt-2 text-green-500">
                                    Valid password
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col mb-2">
                                <label className="text-gray-700" htmlFor="nationality">
                                    Nationality
                                    <select id="nationality" className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="nationality">
                                        <option value="">
                                            Select an option
                                        </option>
                                        <option value="german">
                                            German
                                         </option>
                                        <option value="brazlian">
                                            Brazilian
                                        </option>
                                        <option value="french">
                                            French
                                         </option>
                                        <option value="italian">
                                            Italian
                                        </option>
                                        <option value="none">
                                            None of the above
                                         </option>
                                    </select>
                                </label>
                            </div>
                        <div className="flex w-full my-4">
                            <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Sign Up
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
}
