import React from 'react'
import { type FormikProps } from 'formik'
import RadioQuestion from './questions/RadioQuestion'
import CheckboxQuestion from './questions/CheckboxQuestion'
import TextInputQuestion from './questions/TextInputQuestion'
import TextareaQuestion from './questions/TextareaQuestion'

interface QuestionType {
  type: string
}

interface QuestionsProps extends QuestionType {
  question: string
  options?: string[]
  formik: FormikProps<{ answer: string[] }>
}

const RenderQuestion = (props: QuestionsProps): JSX.Element | null => {
  const { type, question, options, formik } = props
  switch (type) {
    case 'SINGLE_CHOICE':
      return <RadioQuestion question={question} options={options} formik={formik} />
    case 'MULTIPLE_CHOICE':
      return <CheckboxQuestion question={question} options={options} formik={formik} />
    case 'SHORT_ANSWER':
      return <TextInputQuestion question={question} formik={formik} />
    case 'LONG_ANSWER':
      return <TextareaQuestion question={question} formik={formik} />
    default:
      return null
  }
}

export default RenderQuestion
