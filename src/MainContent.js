//Portfolio Main Content Component
import phpLogo from './imgs/php.png';
import jsLogo from './imgs/js.png';
import htmlLogo from './imgs/html.png';
import cssLogo from './imgs/css.png';
import wpLogo from './imgs/wp.png';
import { TypeAnimation } from 'react-type-animation';
const MainContent = () => {
    return (
        <div className='main-content-wrapper flex flex-col gap-10 bg-slate-200 p-5 md:p-10 md:flex-col h-auto'>
                <div className='introduction-wrapper flex flex-col md:flex-row gap-3 h-[calc(100dvh)] justify-center'>
                    <div className='text-content-wrapper flex flex-col gap-5  p-4 w-full md:justify-center'>
                        <div className='greetings-wrapper flex flex-col gap-10'>
                            <p className="text-2xl text-justify md:text-4xl font-thin">
                                    Greetings! 
                            </p>
                            <p className="text-2xl text-justify md:text-4xl font-thin">
                                    I'm Dandrev Nasi, 
                            </p>
                            <TypeAnimation
                              sequence={[
                                'a Web Developer.',
                                'a Computer Science Graduate.'
                              ]}
                              wrapper='p'
                              speed={30}
                              repeat={Infinity}
                              className='text-2xl text-justify md:text-4xl font-thin'
                            />
                            <p className="text-2xl text-black text-justify md:text-4xl font-thin">
                                    I have previously worked as a WordPress Developer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='tech-stack-wrapper h-[calc(100dvh)]'>
                    <div className='ts-title'>
                        <p className='text-3xl text-black font-thin'>
                            TECH STACK
                        </p>
                    </div>
                    <div className='marquee-wrapper flex flex-col md:flex-row justify-center gap-5'>
                        <div className='p-3 border-2 border-black rounded-lg'>
                            <img src={htmlLogo} className='w-40 md:w-400' />
                        </div>
                        <div className='p-3 border-2 border-black rounded-lg'>
                            <img src={cssLogo} className='w-40 md:w-400' />
                        </div>
                        <div className='p-3  border-2 border-black rounded-lg'>
                            <img src={jsLogo} className='w-40 md:w-400' />
                        </div>
                        <div className='p-3 border-2 border-black rounded-lg'>
                            <img src={phpLogo} className='w-40 md:w-400' />
                        </div>    
                        <div className='p-3 border-2 border-black rounded-lg'>
                            <img src={wpLogo} className='w-40 md:w-400' />
                        </div>       
                    </div>
                </div>
                <div className='about-me-wrapper flex flex-col h-[calc(100dvh)] justify-center' id='aboutme'>
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