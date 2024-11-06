export interface FormValues {
  answer: string | string[]
}

export interface QuestionsProps {
  question: string,
  options?: string[],
}

export interface MyFormProps {
  question: string,
  options?: string[],
  handleSubmit: ( values: FormValues) => void,
}
