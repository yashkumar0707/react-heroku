
const Home = () => {
    var selectValue;
    function buttonClicked() {
        console.log('hi')

    }
    function handleChange(e) {
        console.log(e.target.value)
        window.location.href = "https://id.heroku.com/oauth/authorize?client_id=cb3583e5-35de-4913-b2aa-108ac7ec62bf&response_type=code&scope=global&state=anti-forgery-token&redirect_uri=http://localhost:3000/test"
    }
    return (
        <div>
            <div className='example-square bg-info shadow-1-strong'>
                <h1>Home</h1>
            </div>
            <br></br>
            <h3>Please select a platform to continue</h3>
            <select
                value={selectValue}
                onChange={handleChange}
            >
                <option value="Select">Select</option>
                <option value="Heroku">Heroku</option>
                <option value="Gatsby">Gatsby</option>
            </select>
        </div>
    );
}
export default Home;