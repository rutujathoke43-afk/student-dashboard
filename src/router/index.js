import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
    { path: '/', redirect: '/dashboard' },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
        meta: { public: true }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue'),
        meta: { public: true }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue')
    },
    {
        path: '/courses',
        name: 'courses',
        component: () => import('../views/FeatureView.vue'),
        meta: {
            title: 'My Courses',
            description: 'View your enrolled courses and learning progress.'
        }
    },
    {
        path: '/attendance',
        name: 'attendance',
        component: () => import('../views/FeatureView.vue'),
        meta: {
            title: 'Attendance',
            description: 'Review your attendance record.'
        }
    },
    {
        path: '/assignments',
        name: 'assignments',
        component: () => import('../views/FeatureView.vue'),
        meta: {
            title: 'Assignments',
            description: 'Check your upcoming and completed assignments.'
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/FeatureView.vue'),
        meta: {
            title: 'Student Profile',
            description: 'View your student profile information.'
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/FeatureView.vue'),
        meta: {
            title: 'Settings',
            description: 'Manage your dashboard preferences.'
        }
    },

    { path: '/:pathMatch(.*)*', redirect: '/dashboard' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const auth = useAuthStore()

    if (to.meta.public || auth.isLoggedIn) {
        return true
    }

    return { name: 'login' }
})

export default router