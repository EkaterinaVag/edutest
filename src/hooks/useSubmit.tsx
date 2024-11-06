import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { nextQuestionIndex } from '../store/slices/questionSlice';
import getCurrentQuestionIndex from '../store/slices/questionSelector';

interface FormValues {
    answer: string | string[],
}

const useSubmit = () => {
    const dispatch = useAppDispatch();
    const currentQuestionIndex = useAppSelector(getCurrentQuestionIndex);

    const handleSubmit = (values: FormValues) => {
        localStorage.setItem('currentQuestion', JSON.stringify(currentQuestionIndex + 1));
        dispatch(nextQuestionIndex());
    };

    return { handleSubmit };
};

export default useSubmit;
