import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        courses: [
            'Web Development',
            'Database Systems',
            'JavaScript'
        ],
        attendance: 92,
        assignments: [
            { id: 1, title: 'Vue Components', complete: false },
            { id: 2, title: 'Routing Plan', complete: false }
        ]
    }),

    getters: {
        courseCount: (state) => state.courses.length,
        pendingAssignmentCount: (state) =>
            state.assignments.filter((item) => !item.complete).length
    },

    actions: {
        markAssignmentComplete(id) {
            const assignment = this.assignments.find((item) => item.id === id)
            if (assignment) assignment.complete = true
        }
    }
})