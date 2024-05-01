//Portfolio Main Content Component
import introPic from './imgs/meDP.jpg';
const MainContent = () => {
    return (
        <div className='main-content-wrapper flex flex-col gap-5 bg-sky-400'>
                <div className='introduction-wrapper flex flex-col md:flex-row gap-3 p-10'>
                    <div className="image-content w-full flex justify-center md:w-1/2">
                        <img className="object-cover w-full border-4 rounded-full" src={introPic}/>
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
                            <a href='#aboutme'className='bg-transparent border text-white text-center p-1 w-full md:w-1/3'>
                                    About Me
                            </a>
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
                <div className='about-me-wrapper p-10 flex flex-col self-center h-full' id='aboutme'>
                  <fieldset className='border border-solid p-5'>
                    <legend className='text-5xl text-white'>ABOUT ME</legend>
                    <p className='text-xl text-white text-justify'>
                                Hi! I'm a goal-oriented Computer Science graduate from Polytechnic University of the Philippines.
                            I'm currently looking for opportunities where I can expand and enhance my career as a Developer and as an IT Professional.
                            I specialized mainly in Web Development utilizing web development technologies such as HTML, Javascript, CSS, and PHP. 
                            I have been a web developer for one (1) year and five (5) months and I have used the content management system (CMS) called 
                            WordPress. I'm also open to other roles that will allow to expand and improve my career such as Software Tester, IT Specialist, etc.
                        </p>
                  </fieldset>
                </div>
        </div>
    );
};

export default MainContent;