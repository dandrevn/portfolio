//Portfolio Main Content Component
import introPic from './imgs/meDP.jpg';
const MainContent = () => {
    return (
        <div className="h-full bg-blue-950 p-10">
            <div className='main-content-wrapper flex flex-col'>
                <div className='introduction-wrapper flex flex-col md:flex-row gap-3'>
                    <div className="image-content w-full flex justify-center md:w-1/2">
                        <img className="object-cover rounded-lg w-full" src={introPic}/>
                    </div>
                    <div className='text-content-wrapper flex flex-col gap-5 w-full md:w-1/2 md:justify-center'>
                        <div className='greetings-wrapper flex flex-col gap-2'>
                            <p className="text-5xl text-white text-center md:text-left md:text-7xl">
                                DANDREV NASI 
                            </p>
                            <p className="text-2xl text-white text-center md:text-left md:text-4xl">
                                Web Developer
                            </p>
                            <p className="text-xl text-white text-justify md:text-2xl">
                                Greetings! I'm a Web Developer, started my career as a WordPress developer. I'm a Computer Science graduate from
                                Polytechnic University of the Philippines. Lorem lorem sinta ipsum ng papaya. Dadalay sudo sisidlan ng Django.
                            </p>
                        </div>
                        <div className='nav-buttons-wrapper flex flex-col gap-3 md:flex-wrap md:flex-row md:justify-center'>
                            <button type="button" className='bg-transparent border text-white p-1 w-full md:w-1/3'>
                                    About Me
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-full md:w-1/3'>
                                    Education 
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-full md:w-1/3'>
                                    Experiences
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-full md:w-1/3'>
                                    Tech stack
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-full md:w-1/3'>
                                    Connect with me!
                            </button>
                            <button type="button" className='bg-transparent border text-white p-1 w-full md:w-1/3'>
                                    Works
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;