import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        // Week 3 fix: each course stores its own stable ID and progress.
        courses: [
            { id: 'web-dev', name: 'Web Development', progress: 72 },
            { id: 'database', name: 'Database Systems', progress: 58 },
            { id: 'javascript', name: 'JavaScript', progress: 86 }
        ],

        attendance: 92,

        // Week 3 fix: assignment display data belongs to each assignment,
        // instead of being inferred from its position in the list.
        assignments: [
            {
                id: 1,
                title: 'Vue Components',
                dueLabel: 'Due tomorrow',
                complete: false
            },
            {
                id: 2,
                title: 'Routing Plan',
                dueLabel: 'Due Friday',
                complete: false
            }
        ]
    }),

    getters: {
        courseCount: (state) => state.courses.length,

        pendingAssignmentCount: (state) =>
            state.assignments.filter((item) => !item.complete).length,

        // Week 3 fix: attendance message now reflects the actual percentage.
        attendanceStatus: (state) =>
            state.attendance >= 75 ? 'On track' : 'Below target'
    },

    actions: {
        markAssignmentComplete(id) {
            const assignment = this.assignments.find((item) => item.id === id)

            if (assignment) {
                assignment.complete = true
            }
        }
    }
})