//Portfolio Main Content Component

const MainContent = () => {
    return (
       <div className="main-content-wrapper h-screen flex-row justify-items-center">
            <div className="introduction-wrapper flex bg-gray-100 p-10">
                <div className="text-content">
                    <h1 className="text">
                        Hi! I'm Drev, a Web Developer! Let us work together!
                    </h1>
                </div>
                <div className="image-content bg-red-100">
                    <h1 className="text">
                        SAMPLE IMAGE HERE
                    </h1>
                </div>
            </div>
       </div>
    );
};

export default MainContent;