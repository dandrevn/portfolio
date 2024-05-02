//Portfolio Main Content Component
import phpLogo from './imgs/php.png';
import jsLogo from './imgs/js.png';
import htmlLogo from './imgs/html.png';
import cssLogo from './imgs/css.png';
import wpLogo from './imgs/wp.png';
const MainContent = () => {
    return (
        <div className='main-content-wrapper gap-10 bg-slate-200 p-5 md:p-10 h-auto'>
                <div className='introduction-wrapper flex flex-col md:flex-row gap-3'>
                    <div className='text-content-wrapper flex flex-col gap-5  p-4 w-full md:justify-center'>
                        <div className='greetings-wrapper flex flex-col gap-10'>
                            <p className="text-2xl text-justify md:text-4xl font-thin">
                                    Greetings! 
                            </p>
                            <p className="text-2xl text-black text-justify md:text-4xl font-thin">
                                    I'm Dandrev Nasi, a Web Developer.
                            </p>
                            <p className="text-2xl text-black text-justify md:text-4xl font-thin">
                                    I have previously worked as a WordPress Developer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='tech-stack-wrapper'>
                    <div className='ts-title'>
                        <p className='text-3xl text-black font-thin'>
                            TECH STACK
                        </p>
                    </div>
                    <div className='marquee-wrapper flex flex-col md:flex-row justify-center gap-5'>
                        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                            <img src={htmlLogo} style={{height: '200px', width: '200px'}} />
                        </div>
                        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                            <img src={cssLogo} style={{height: '200px', width: '200px'}} />
                        </div>
                        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                            <img src={jsLogo} style={{height: '200px', width: '200px'}} className='' />
                        </div>
                        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                            <img src={phpLogo} style={{height: '200px', width: '200px'}} />
                        </div>    
                        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                            <img src={wpLogo} style={{height: '200px', width: '200px'}} />
                        </div>       
                    </div>
                </div>
                <div className='about-me-wrapper flex flex-col self-center' id='aboutme'>
                  <fieldset className='border border-solid border-black p-5'>
                    <legend className='text-3xl text-black font-thin'>ABOUT ME</legend>
                    <p className='text-xl text-black text-justify font-thin'>
                            I'm a goal-oriented Computer Science graduate from Polytechnic University of the Philippines.
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