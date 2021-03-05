import { BearsState } from "./store";

export const actions = (set: any) => ({
  increase: (by: number) => set((state: BearsState) => ({ bears: state.bears + by })),
});