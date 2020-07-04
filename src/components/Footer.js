import React from "react";


function Footer() {
    return (
        <footer className="bg-blue-700">
            <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
                <p className="text-white">
                    Created by{` `}
                    <a
                        className="font-bold no-underline"
                        href="https://www.linkedin.com/in/pratyush-ravishankar-a5391615a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Pratyush Ravishankar
                </a>
                </p>

                <p>
                    <a
                        className="font-bold text-white no-underline"
                        href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                </a>
                </p>
            </nav>
        </footer>

    )
}








export default Footer;
