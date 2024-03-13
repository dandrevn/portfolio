//Portfolio Main Content Component
import introPic from './imgs/meDP.jpg';
const MainContent = () => {
    return (
        <div className="h-full bg-blue-950 p-10">
            <div className="main-content-wrapper h-screen flex flex-col justify-center">
                <div className="introduction-wrapper container flex sm:flex-col md:flex-row self-center bg-transparent border rounded-2xl gap-3 p-5">
                    <div className="intro-content w-1/2 flex flex-col justify-center content-center">
                        <div className='greeting-content flex flex-col items-center'>
                            <p className="text-5xl text-white text-left">
                                DANDREV NASI 
                            </p>
                            <p className="text-2xl text-white text-justify">
                                Web Developer
                            </p>
                            <p className="text-xl text-white text-justify">
                                Greetings! I'm a Web Developer, started my career as a WordPress developer. I'm a Computer Science graduate from
                                Polytechnic University of the Philippines. Lorem lorem sinta ipsum ng papaya. Dadalay sudo sisidlan ng Django.
                            </p>
                        </div>
                        <div className='nav-buttons-wrapper flex flex-col sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center w-auto'>
                            <button type="button" className='bg-transparent border text-white p-1 w-1/2 mx-auto'>
                                    About Me
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-1/2 mx-auto'>
                                    Education 
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-1/2 mx-auto'>
                                    Experiences
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-1/2 mx-auto'>
                                    Tech stack
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-1/2 mx-auto'>
                                    Connect with me!
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-1/2 mx-auto'>
                                    Works
                            </button>
                        </div>
                    </div>
                    <div className="image-content w-1/2">
                        <img className="object-fill rounded-lg w-1/2 mx-auto" src={introPic}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;