import type { PiniaPluginContext } from 'pinia'

const localStoragePlugin = (context: PiniaPluginContext) => {
  const { store } = context

  try {
    const storedState = localStorage.getItem(store.$id)

    if (storedState) {
      store.$patch(JSON.parse(storedState))
    }
  } catch (error) {
    console.error(`Failed to load state for store ${store.$id}:`, error)
    localStorage.removeItem(store.$id)
  }

  store.$subscribe((mutation, state) => {
    try {
      localStorage.setItem(store.$id, JSON.stringify(state))
    } catch (error) {
      console.error(`Failed to save state for store ${store.$id}:`, error)
    }
  })
}

export default localStoragePlugin
