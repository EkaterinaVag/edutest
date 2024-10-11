import { RootState } from '../store';

const getCurrentQuestionIndex = (state: RootState) => state.question.currentQuestionIndex;

export default getCurrentQuestionIndex;
