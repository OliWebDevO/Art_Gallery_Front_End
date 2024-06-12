import { useContext } from 'react'
import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import './home.scss'
import { AuthContext } from '../../context/authContext'
import { Share } from '../../components/share/Share'

const Home = () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div className='home'>
            <Stories/>
            <Share userId={currentUser.id}/>
            <Posts/>
        </div>
    )
}

export default Home