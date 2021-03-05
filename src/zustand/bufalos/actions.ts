import { BufaloState } from "./store";

export const actions = (set: any) => ({
  increase: (by: number) => set((state: BufaloState) => ({ bufalos: state.bufalos + by })),
});