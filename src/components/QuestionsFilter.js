import React from "react";
import QuestionCard from "./QuestionCard";

export default function QuestionsFilter({questions}) {
    const [filteredQuestions, setFilteredQuestions] = React.useState(questions)

    function updateQuestions({ target: { value } }) {
        const filterQuestions = (questions) => {
            return questions.filter(({ title }) => (
                title.toLowerCase().includes(value.toLowerCase().trim())
            ))
        }
        setFilteredQuestions(!!value ? filterQuestions(questions) : questions)
    }

    return (
      <section className="section">
        <div className="container">
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="search" placeholder="file system" onChange={updateQuestions} />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
          <div className="columns is-multiline">
            {filteredQuestions.map(({id, title, asker, tweetUrl, timestamp, episode}) => {
              const askerLink = tweetUrl != null 
                ? <a href={tweetUrl} target="_blank" rel="noreferrer">{asker}</a>
                : <span>{asker}</span>
              const episodeReleaseDate = new Date(episode.releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
              
              return (
                <div key={id} className="column is-variable is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
                  <QuestionCard key={id} title={title} askerLink={askerLink} timestamp={timestamp} episode={episode} episodeReleaseDate={episodeReleaseDate}/>
                </div>
              );
            })}
          </div>
        </div>
      </section>    
    )
}