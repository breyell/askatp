import React from "react";
import QuestionCard from "./QuestionCard";

export default function QuestionsFilter(props) {
    let filteredQuestions = props.questions

    function updateQuestions(event) {
        console.log(filteredQuestions.length, 'before')
        if (event.target.value) {
            filteredQuestions = props.questions.filter((question) => {
                return question.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
            })
        } else {
            filteredQuestions = props.questions
        }
        console.log(filteredQuestions.length, 'after')
    }

    return (
      <>
        <div className="container">
          <input type="text" onChange={updateQuestions} />
            <div id="questionsContainer">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredQuestions.map(({id, title, asker, tweetUrl, timestamp, episode}) => {
                  const askerLink = {tweetUrl} ? <a href={tweetUrl} target="_blank" rel="noreferrer">{asker}</a> : {asker}
                  const episodeReleaseDate = new Date(episode.releaseDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })

                  return (
                    <QuestionCard key={id} title={title} askerLink={askerLink} timestamp={timestamp} episode={episode} episodeReleaseDate={episodeReleaseDate}/>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    )
}