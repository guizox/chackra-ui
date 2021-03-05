import create from 'zustand'
import { actions } from './actions';

type State = {
  bufalos: number
  increase: (by: number) => void
}

export interface BufaloState extends State {
  bufalos: number
  increase: (by: number) => void
}

const bufalosStore = create<State>(set => ({
  bufalos: 0,
  ...actions(set)
}))

export default bufalosStore