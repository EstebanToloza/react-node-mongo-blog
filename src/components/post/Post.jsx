import "./post.css"

const Post = () => {
    return (
        <div className="post">
            <img className="postImage" src="https://picsum.photos/200" alt="blog" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Cinema</span>
                </div>
                <span className="postTitle">Post Title</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <span className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum repudiandae odit placeat maiores quos voluptatibus fuga quae saepe ea et cum recusandae fugiat nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum repudiandae odit placeat maiores quos voluptatibus fuga quae saepe ea et cum recusandae fugiat nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum repudiandae odit placeat maiores quos voluptatibus fuga quae saepe ea et cum recusandae fugiat nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum repudiandae odit placeat maiores quos voluptatibus fuga quae saepe ea et cum recusandae fugiat nemo</span>
            </div>
        </div>
    )
}

export default Post
