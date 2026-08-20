import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useCopyIp() {
  const copied = ref(false)
  let timer
  let isMounted = false

  async function copyIp() {
    if (!navigator.clipboard?.writeText) return
    try {
      await navigator.clipboard.writeText('play.catcraft.ru')
      if (!isMounted) return
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        if (isMounted) copied.value = false
      }, 1600)
      copied.value = true
    } catch { /* clipboard unavailable or permission denied */ }
  }

  onMounted(() => { isMounted = true })
  onBeforeUnmount(() => {
    isMounted = false
    clearTimeout(timer)
  })

  return { copied, copyIp }
}
