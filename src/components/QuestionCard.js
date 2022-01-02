import React from "react";
    

export default function QuestionsCard({title, askerLink, timestamp, episode, episodeReleaseDate}) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content is-small">
                    <h2 className="title">{title}</h2>
                    <div className="level is-mobile is-size-6">
                        <p className="level-left">
                            <span className="icon level-item is-small">
                                <i className="fas fa-lg fa-user"></i>
                            </span>
                            <span>{askerLink}</span>
                        </p>
                    </div>
                    <div className="level is-mobile is-size-6">
                        <p className="level-left">
                            <span className="icon level-item is-small">
                                <i className="fas fa-lg fa-calendar"></i>
                            </span>
                            <span>{episodeReleaseDate}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer-item">
                    <a 
                        href={`overcast.fm/${episode.overcastSlug}/${timestamp}`}
                        className=""
                    >
                        <img src="/overcast.svg" alt="Overcast" style={{width: '35px'}} />
                    </a>
                </div>
                <div className="card-footer-item">
                    <a href={`https://atp.fm/${episode.number}`} target="_blank" rel="noreferrer">Episode {episode.number}</a>
                </div>
            </div>
        </div>
    )
}