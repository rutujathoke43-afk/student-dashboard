import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from '../stores/auth'

describe('Authentication store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('registers a valid user and starts a session', () => {
        const auth = useAuthStore()

        const registered = auth.register(
            'Rutuja Thoke',
            'rutuja@example.com',
            'password123'
        )

        expect(registered).toBe(true)
        expect(auth.isLoggedIn).toBe(true)
        expect(auth.studentName).toBe('Rutuja Thoke')
        expect(auth.users).toHaveLength(1)
    })

    it('rejects an invalid email address', () => {
        const auth = useAuthStore()

        const registered = auth.register(
            'Rutuja Thoke',
            'invalid-email',
            'password123'
        )

        expect(registered).toBe(false)
        expect(auth.error).toBe('Please enter a valid email address.')
        expect(auth.isLoggedIn).toBe(false)
    })

    it('rejects a password shorter than eight characters', () => {
        const auth = useAuthStore()

        const registered = auth.register(
            'Rutuja Thoke',
            'rutuja@example.com',
            'short'
        )

        expect(registered).toBe(false)
        expect(auth.error).toBe('Password must be at least 8 characters.')
    })

    it('logs in with registered credentials and logs out', () => {
        const auth = useAuthStore()

        auth.register('Rutuja Thoke', 'rutuja@example.com', 'password123')
        auth.logout()

        const loggedIn = auth.login('rutuja@example.com', 'password123')

        expect(loggedIn).toBe(true)
        expect(auth.isLoggedIn).toBe(true)
        expect(auth.studentName).toBe('Rutuja Thoke')

        auth.logout()

        expect(auth.isLoggedIn).toBe(false)
        expect(auth.studentName).toBe('')
    })

    it('rejects an incorrect password', () => {
        const auth = useAuthStore()

        auth.register('Rutuja Thoke', 'rutuja@example.com', 'password123')
        auth.logout()

        const loggedIn = auth.login('rutuja@example.com', 'wrongpassword')

        expect(loggedIn).toBe(false)
        expect(auth.error).toBe(
            'Email or password is incorrect. Please register first.'
        )
    })
})