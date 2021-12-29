import React from "react";
    

export default function QuestionsCard({title, askerLink, timestamp, episode, episodeReleaseDate}) {
    return (
        <div className="col">
        <div className="card h-100">
            <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p>
                Asked by {askerLink} 
            </p>
            <a 
                href={`overcast.fm/${episode.overcastSlug}/${timestamp}`}
                className="d-inline-block"
            >
                <img src="/overcast.svg" alt="Overcast" style={{width: '35px'}} />
            </a>
            </div>
            <div className="card-footer">
            <small>
                <a href={`https://atp.fm/${episode.number}`} target="_blank" rel="noreferrer">Episode {episode.number}</a>
                <span> – </span>
                {episodeReleaseDate}
            </small>
            </div>
        </div>
        </div>
    )
}