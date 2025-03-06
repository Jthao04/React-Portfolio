import Project from '../components/Projects';


export default function Portfolio() {
    const projects = [
        {
            title: 'TheBestBlackjackGame',
            imgSrc: '/assets/Blackjack.png',
            projectLink: 'https://github.com/Jthao04/TheBestBlackjackGame'
        },
        {
            title: 'Employee-Tracker',
            imgSrc: '/assets/Employee-Tracker.png',
            projectLink: 'https://github.com/Jthao04/Employee-Tracker'
        },
        {
            title: 'Readme-Generator',
            imgSrc: '/assets/Readme-Generator.png',
            projectLink: 'https://github.com/Jthao04/Readme-Generator'
        },
        {
            title: 'Weather-Dashboard',
            imgSrc: '/assets/Weather-Dashboard.png',
            projectLink: 'https://github.com/Jthao04/Weather-Dashboard'
        },
        {
            title: 'Vehicle-Builder',
            imgSrc: '/assets/Vehicle-Builder.png',
            projectLink: 'https://github.com/Jthao04/Vehicle-Builder'
        }
    ];
    return (
        <div className="container my-4">
            <div className="row">
                {projects.map((proj, index) => (
                    <Project
                        key={index}
                        title={proj.title}
                        imgSrc={proj.imgSrc}
                        projectLink={proj.projectLink}
                    />
                ))}
            </div>
        </div>
    );
}