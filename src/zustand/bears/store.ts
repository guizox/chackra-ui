import create from 'zustand'
import { actions } from './actions';

type State = {
  bears: number
  increase: (by: number) => void
}

export interface BearsState extends State {
  bears: number
  increase: (by: number) => void
}

const bearsStore = create<State>(set => ({
  bears: 0,
  ...actions(set)
}))

export default bearsStore