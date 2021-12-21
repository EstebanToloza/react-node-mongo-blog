import "./singlePost.css"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://picsum.photos/200" alt="single-post" className="singlePostImage"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Esteban</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
