import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        studentName: '',
        users: [],
        error: ''
    }),

    actions: {
        register(name, email, password) {
            this.error = ''

            const cleanName = name.trim()
            const cleanEmail = email.trim().toLowerCase()

            if (!cleanName || !cleanEmail || !password) {
                this.error = 'Please fill in all fields.'
                return false
            }

            if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
                this.error = 'Please enter a valid email address.'
                return false
            }

            if (password.length < 8) {
                this.error = 'Password must be at least 8 characters.'
                return false
            }

            if (this.users.some((user) => user.email === cleanEmail)) {
                this.error = 'An account with this email already exists.'
                return false
            }

            this.users.push({
                name: cleanName,
                email: cleanEmail,
                password
            })

            this.studentName = cleanName
            this.isLoggedIn = true
            return true
        },

        login(email, password) {
            this.error = ''

            const cleanEmail = email.trim().toLowerCase()
            const user = this.users.find(
                (item) => item.email === cleanEmail && item.password === password
            )

            if (!user) {
                this.error = 'Email or password is incorrect. Please register first.'
                return false
            }

            this.studentName = user.name
            this.isLoggedIn = true
            return true
        },

        logout() {
            this.studentName = ''
            this.isLoggedIn = false
            this.error = ''
        }
    }
})