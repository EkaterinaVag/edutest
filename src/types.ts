import { FormikProps } from 'formik';

export interface QuestionsProps { 
    question: string; 
    options?: string[]; 
    formik: FormikProps<{ answer: string[] }>; 
  };
  