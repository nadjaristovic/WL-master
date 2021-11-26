import homePicture from '../../../assets/home.png'
import classes from './HomePage.module.css'

const HomePage = () => {
    return <div className={classes.home}>
        <div className={classes.text}>
            <h1>Keep track of movies you want to watch!</h1>
            <h4>Create free account and start adding movies to your WatchList</h4>
        </div>
        <img className={classes.picture} src={homePicture} alt="home"/>  
    </div>
}

export default HomePage;