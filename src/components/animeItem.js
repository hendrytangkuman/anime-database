import React from "react";

const AnimeItem = (props) => {
    return(
        <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={props.anime.image_url} alt={props.anime.title} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.anime.title}</h5>
                    <p>Rating {props.anime.score}</p>
                    <p>Release Date {props.anime.start_date}</p>
                    <p>End Date {props.anime.end_date}</p>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={props.anime.url} target="_blank" rel="noreferrer">See Details</a></div>
            </div>
        </div>
    </div>
    );
}

export default AnimeItem;