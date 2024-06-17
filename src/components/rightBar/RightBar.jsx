import './rightbar.scss'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import profilePicBasic from '../../assets/profilePicBasic.jpeg'

const RightBar = () => {

        // React Query pour le profil
        const { isPending, error, data } = useQuery({
            initialData:[],
            queryKey: ['userslist'],
            queryFn: () =>
            makeRequest.get("/userslist").then((res) => {
                return res.data
            })
        })

    return (

        <div className='rightbar'>
            <div className="container">
                <div className="friends-online box">
                    <div className="title">
                        <h4>Online artists</h4>    
                    </div>
                    {isPending
                    ? "Loading"
                    : data.map((user) => (
                        <div className="item">
                                <Link to={`/profile/${user.id}`}>
                                <div className="img-box">
                                    <img className='item-icon' src={user.profilePic === null ? profilePicBasic : "/upload/" + user.profilePic} alt="" />
                                    <div className="online-buble green"></div>
                                </div>
                                </Link>
                                
                                <Link className='user-box' to={`/profile/${user.id}`}>
                                <div className='user-info'>
                                    <span>{user.name}</span>
                                    <span className='city'>{user.city}</span>
                                </div>
                                </Link>
                        </div>
                    ))}
                </div>
                <div className="latest box">
                    <div className="title">
                        <h4>Latest activities</h4>    
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                            <div className="activity-info">
                                <span>
                                Steven Seagal
                                </span>
                                <div className="activity-time">
                                    <p className='activity'>Posted a new photo</p>
                                    <p className='a-time'>1 min ago</p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={profilePicBasic} alt="" />
                            <div className="activity-info">
                                <span>
                                Pascal Obistro
                                </span>
                                <div className="activity-time">
                                    <p className='activity'>Posted a new photo</p>
                                    <p className='a-time'>1 min ago</p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                            <div className="activity-info">
                                <span>
                                Pierre Palmade
                                </span>
                                <div className="activity-time">
                                    <p className='activity'>Posted a new photo</p>
                                    <p className='a-time'>1 min ago</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="suggestions box">
                    <div className="title">
                        <h4>Popular artists</h4>    
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Steven Seagal
                        </span>
                        <div className="icons">
                            <AddCircleOutlineIcon className='add'/>
                            <ClearIcon className='dismiss'/>
                        </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Indiana Jones
                        </span>
                        <div className="icons">
                            <AddCircleOutlineIcon className='add'/>
                            <ClearIcon className='dismiss'/>
                        </div>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Batman
                        </span>
                        <div className="icons">
                            <AddCircleOutlineIcon className='add'/>
                            <ClearIcon className='dismiss'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RightBar