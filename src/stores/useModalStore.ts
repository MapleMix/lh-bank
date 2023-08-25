import { reactive } from 'vue'

export const useModalStore = reactive({
  open: false,
  handlSend() {
    this.open = true
  },
  handlClose() {
    this.open = false
  }
})