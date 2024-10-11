import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface QuestionState {
  currentQuestionIndex: number
}

const initialState: QuestionState = {
  currentQuestionIndex: 0
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    nextQuestionIndex: (state) => {
      state.currentQuestionIndex += 1
    },
    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload
    }
  }
})

export const { nextQuestionIndex, setCurrentQuestionIndex } =
  questionSlice.actions

export default questionSlice.reducer
