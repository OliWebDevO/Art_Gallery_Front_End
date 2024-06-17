import './rightbar.scss'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
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
        console.log(data)

    return (

        <div className='rightbar'>
            <div className="container">
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
                    
                </div>
                <div className="friends-online box">
                    <div className="title">
                        <h4>Online friends</h4>    
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Steven Seagal
                        </span>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Indiana Jones
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                    <div className="item">
                        <div className="img-box">
                            <img className='item-icon' src={img1} alt="" />
                            <div className="online-buble green"></div>
                        </div>
                        <span>
                            Batman
                        </span>
                        <div className="online-buble green"></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RightBar