import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { authService } from '@/services/auth.service'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // Getters
  const isAuthenticated = computed<boolean>(() => !!token.value)
  const currentUser = computed<User | null>(() => user.value)

  // Acciones
  async function loginWithGoogle() {
    try {
      loading.value = true
      error.value = null

      // Aquí usamos el servicio de autenticación simulado
      const response = await authService.loginWithGoogle()

      // Guardamos el token y la información del usuario
      token.value = response.token
      user.value = response.user

      // Guardamos en localStorage para persistir la sesión
      localStorage.setItem('auth_token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))

      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error de autenticación'
      return false
    } finally {
      loading.value = false
    }
  }

  function logout() {
    // Limpiamos el estado y el localStorage
    user.value = null
    token.value = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
  }

  function initialize() {
    // Recuperar sesión si existe en localStorage
    const storedToken = localStorage.getItem('auth_token')
    const storedUser = localStorage.getItem('user')

    if (storedToken && storedUser) {
      token.value = storedToken
      try {
        user.value = JSON.parse(storedUser)
      } catch (e) {
        // Si hay un error al parsear, limpiamos el localStorage
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
        console.log(e)
      }
    }
  }

  // Inicializamos al crear el store
  initialize()

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    currentUser,
    loginWithGoogle,
    logout,
    initialize
  }
})
