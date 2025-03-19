import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer';
import { useStore as zustandUseStore } from 'zustand';
import { IDemoActions, IDemoInitialState } from '../../features/Demo/sliceStore/demoSliceStore';
import { demoSlice } from '../../features/Demo';

export type TGlobalInitialState = IDemoInitialState;
// for more states add more interfaces; example: IDemoInitialState & IOtherInitialState;

export type TGlobalActions = IDemoActions;
// for more states add more interfaces; example: IDemoActions & IOtherActions;

export type Store = ReturnType<(typeof slices)['demoSlice']>;
// for more states add more interfaces; example: ReturnType<(typeof slices)['demoSlice']> & ReturnType<(typeof slices)['otherSlice']>;

export type StateCallback = (state: TGlobalInitialState) => TGlobalInitialState;
export type SetCallback<T> = (set: (state: T) => void) => void;

export const slices = {
    demoSlice: demoSlice.slice,
};

export const vanillaStore = createStore(
  immer<Store>((set) => ({
    ...demoSlice.slice(set as SetCallback<IDemoInitialState>),
  })),
);

export const useStore = zustandUseStore;