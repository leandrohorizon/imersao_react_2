import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div`
  background-image: url(${ db.bg });
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        {db.questions.map(question =>(
          <Widget>
            <Widget.Header>
              <h1>{question.title}</h1>
            </Widget.Header>
            <Widget.Content>           
              <p>{question.description}</p>
            </Widget.Content>
          </Widget>
        ))}
        
      </QuizContainer>
    </BackgroundImage>
  )
}
