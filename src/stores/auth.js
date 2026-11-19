import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        studentName: ''
    }),

    actions: {
        login(name) {
            this.studentName = name
            this.isLoggedIn = true
        },

        logout() {
            this.studentName = ''
            this.isLoggedIn = false
        }
    }
})