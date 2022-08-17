
const About = () => {
    return (
        <div className="App"> 
            <div className="div--about">
                <p>As a research university and nonprofit institution, our school is focused on creating educational opportunities for people from many lived experiences.</p>
                <div className="div--about-photo">
                <img className="about-photo"
                src={`${process.env.PUBLIC_URL}/images/about-photo.png`} 
                alt="about-photo"
                />
                </div>

            </div>
        </div>
    );
}

export default About;