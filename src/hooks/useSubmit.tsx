import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { nextQuestionIndex } from '../store/slices/questionSlice';
import getCurrentQuestionIndex from '../store/slices/questionSelector';
import { questions } from '../questions'

interface FormValues {
    answer: string | string[],
}

interface UserAnswer {
    questionId?: number
    answer: string | string[]
}

const useSubmit = () => {
    const dispatch = useAppDispatch();
    const currentQuestionIndex = useAppSelector(getCurrentQuestionIndex);

    const [usersAnswers, setUsersAnswers] = useState<UserAnswer[]>(() => {
        const savedAnswers = localStorage.getItem('answers');
        if (savedAnswers) {
            return JSON.parse(savedAnswers);
        }
        return [];
    });

    const handleSubmit = (values: FormValues) => {
        const questionId = questions[currentQuestionIndex]?.id;
        setUsersAnswers([
            ...usersAnswers,
            { questionId, answer: values.answer }
        ]);
        
        localStorage.setItem('answers', JSON.stringify(usersAnswers));
        localStorage.setItem('currentQuestion', JSON.stringify(currentQuestionIndex + 1));
        dispatch(nextQuestionIndex());
    };

    return { handleSubmit, usersAnswers };
};

export default useSubmit;
