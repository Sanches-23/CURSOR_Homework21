import postStyle from '../styles/post.module.css'

import checkIcon from '../assets/icons/check-badge.svg'
import commIcon from '../assets/icons/notification.svg'
import retweetIcon from '../assets/icons/retweet-2-svgrepo-com.svg'
import likeIcon from '../assets/icons/heart-svgrepo-com.svg'
import loadIcon from '../assets/icons/download-svgrepo-com.svg'

const Post = ({data}) => {

    return (
        <div className={postStyle.container}>
            <div className={postStyle.card}>
                <div className={postStyle.postContent}>
                    <img src={data.author.photo} alt={data.author.name} />
                    <h2>{data.author.name}</h2>
                    <img className={postStyle.icons} src={checkIcon} alt={"f"} style={{fill: '#ff0000' }}/>
                    <span className={postStyle.postContentSecondary}>{data.author.nickname}</span>
                    <span className={postStyle.postContentSecondary}>{data.date}</span>
                </div>
                <div className={postStyle.content}>
                    <p>{data.content}</p>
                    <img className={postStyle.postImage} src={data.image} alt="Post" />
                    <div className={postStyle.postInfo}>
                        <span>
                            <img className={postStyle.icons} src={commIcon} alt={"f"} />
                            {data.comments}
                        </span>
                        <span>
                            <img className={postStyle.icons} src={retweetIcon} alt={"f"} />
                            {data.retweets}
                        </span>
                        <span>
                            <img className={postStyle.icons} src={likeIcon} alt={"f"} />
                            {data.likes}
                        </span>
                        <span>
                            <img className={postStyle.icons} src={loadIcon} alt={"f"} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;