import './rightbar.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="suggestions box">
                    <div className="title">
                        <h4>Suggestions for you</h4>    
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Steven Seagal
                        </span>
                        <button className='add'>Add</button>
                        <button className='dismiss'>Dismiss</button>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Indiana Jones
                        </span>
                        <button className='add'>Add</button>
                        <button className='dismiss'>Dismiss</button>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Batman
                        </span>
                        <button className='add'>Add</button>
                        <button className='dismiss'>Dismiss</button>
                    </div>
                </div>
                <div className="latest box">
                    <div className="title">
                        <h4>Latest activities</h4>    
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Steven Seagal
                        </span>
                        <p className='activity'>Posted a new photo</p> 
                        <p className='a-time'>1 min ago</p>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Indiana Jones
                        </span>
                        <p className='activity'>Liked a post</p>
                        <p className='a-time'>5 min ago</p>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Batman
                        </span>
                        <p className='activity'>posted</p>
                        <p className='a-time'>15 min ago</p>
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