import React from "react";
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import subs1 from '../../assets/subs1.jpg'
import subs2 from '../../assets/subs2.jpg'
import subs3 from '../../assets/subs3.jpg'
import subs4 from '../../assets/subs4.jpg'
import subs5 from '../../assets/subs5.jpg'

const Sidebar = ({sidebar, category ,setCategory})=> {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt=""/><p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt=""/><p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt=""/><p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt=""/><p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt=""/><p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech} alt=""/><p>Technology</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt=""/><p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt=""/><p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt=""/><p>News</p>
                </div>
                <hr/>
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={subs1} alt=""/><p>Abao in Tokyo</p>
                </div>
                <div className="side-link">
                    <img src={subs2} alt=""/><p>Fender</p>
                </div>
                <div className="side-link">
                    <img src={subs3} alt=""/><p>3Blue1Brown</p>
                </div>
                <div className="side-link">
                    <img src={subs4} alt=""/><p>National Geographic</p>
                </div>
                <div className="side-link">
                    <img src={subs5} alt=""/><p>Sean Mann</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar