const Home = () => {
    return (
        <div className="App">
            
            <h3>MY SCHOOL</h3>
            <img className="harvard-photo"
            src={`${process.env.PUBLIC_URL}/images/harvard-photo.jpg`} 
            alt="harvard-photo"
            />
            <h3>IS THE BEST SCHOOL IN THE WORLD!!!!</h3>

        </div>
    );
}

export default Home;