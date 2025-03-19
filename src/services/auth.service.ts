import type { User } from '@/stores/auth.ts'

// Simulamos un retraso para imitar una llamada a API real
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Usuario simulado para pruebas
const mockUser: User = {
  id: '1',
  name: 'Usuario de Prueba',
  email: 'usuario@massalaves.es',
  avatar: 'https://ui-avatars.com/api/?name=Usuario+Prueba'
}

class AuthService {
  /**
   * Simula un inicio de sesión con Google
   */
  async loginWithGoogle() {
    // Simulamos un retraso de red
    await delay(800)

    // Simulamos una respuesta exitosa de la API
    return {
      token: 'mock-jwt-token-' + Math.random().toString(36).substring(2),
      user: mockUser
    }
  }

  /**
   * Verifica si un token es válido
   */
  async validateToken(token: string) {
    await delay(300)

    // Simplemente verificamos que el token comience con 'mock-jwt-token-'
    return token.startsWith('mock-jwt-token-')
  }
}

export const authService = new AuthService()
