import React from 'react';

const DropDownMenu = () => {
    return (
        <div className='bg-neutral '>
            <div className="navbar w-[90%] mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            <li className='neutral'>
                                <a className='bg-black'>Domain</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex w-full">
                    <ul className="menu menu-horizontal flex justify-between w-full">
                        <li tabIndex={0}>
                            <details>
                                <summary>Hosting</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Web Design</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={1}>
                            <details>
                                <summary>Cloud Computing</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Bulk SMS</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>PBX</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Security Sevice</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Email Service</summary>
                                <ul className="z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;