import create from "zustand"
import { devtools } from "zustand/middleware"

type DrawerState = {
  show: boolean
  setShow: (val: boolean) => void
  toggleShow: () => void
}

const useDrawerStore = create<DrawerState>()(
  devtools((set) => ({
    show: false,
    setShow: (val) => set((prev) => ({ ...prev, show: val })),
    toggleShow: () => set((prev) => ({ ...prev, show: !prev.show })),
  }))
)

export default useDrawerStore
