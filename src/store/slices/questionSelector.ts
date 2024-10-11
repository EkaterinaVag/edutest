import { type RootState } from '../store'

const getCurrentQuestionIndex = (state: RootState): number => state.question.currentQuestionIndex

export default getCurrentQuestionIndex
