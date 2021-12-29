import React from "react"
import { graphql } from 'gatsby';
import Nav from "../components/Nav"
import QuestionsFilter from "../components/QuestionsFilter"

export default function HomePage({data}) {
  const sortedQuestions = data.questions.nodes.sort(
    (a, b) =>
      b.episode.number - a.episode.number || a.timestamp - b.timestamp
  )

  return (
    <>
      <Nav />
      <QuestionsFilter questions={sortedQuestions} />
    </>
  )
}

export const query = graphql`
  query QuestionsQuery {
    questions: allStrapiQuestions {
      nodes {
        id
        asker
        title
        timestamp
        tweetUrl
        episode {
          number
          overcastSlug
          releaseDate
          title
        }
      }
    }
  }
`;