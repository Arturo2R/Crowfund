import create from "zustand";

const useStore = create((set) => ({
  cantidad: 0,
  Addcantidad: (amount) =>
    set((state) => ({ cantidad: state.cantidad + amount })),
}));
