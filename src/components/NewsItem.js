import React, { Component } from 'react'

export class NewsItem extends Component {

   
    render() {
        let { title, description, imageUrl , url,author , date ,source} = this.props;
        return (
            <>
            <div class="container my-3 " >
                <div className="card" style={{ width: "20rem" , background: "rgb(255 242 255)"}}>
                <div  style={{
                    display: "flex",
                    position: "absolute",
                    justifyContent: "flex-end",
                    right : 0
                }}>
                <span className=" badge rounded-pill bg-danger"  >{source}</span>
                </div>
                    <img className="card-img-top" src={ !imageUrl?"https://media.istockphoto.com/vectors/breaking-news-vector-background-vector-id1181778359" : imageUrl} alt="Card  cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text" ><small class="text-muted">By {!author?"unknown":author} on {(new Date(date)).toGMTString()}</small></p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn  btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>

           
            </>
        )
    }
}

export default NewsItem
