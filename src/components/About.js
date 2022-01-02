import React from "react";

export default function Nav() {
    return (
        <div className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-three-quarters">
                        <div className="content is-medium">
                            <h1>About</h1>
                            <p>This website was made by Brendon Reyell using data from <a href="https://atp.fm/" target="_blank" rel="noreferrer">atp.fm</a> and chapter markers from podcast episodes.</p>
                            <p> If you find an error, have a question, or would like to get in touch, <a href="https://twitter.com/brendonreyell" target="_blank" rel="noreferrer">tweet me</a> or <a href="mailto:brendon@reyell.net">send an email</a>.</p>

                            <h2>Submitting a Question</h2>
                            <p>I'm just a fan of the show so please do not send me questions you'd like to ask the hosts. Questions for Marco, Casey, and/or John can be asked via the methods on the show's <a href="https://atp.fm/feedback" target="_blank" rel="noreferrer">feedback page</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
