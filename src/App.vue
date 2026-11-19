<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <div class="app-shell">
    <header v-if="auth.isLoggedIn" class="topbar">
      <strong class="brand">CampusHub</strong>

      <nav aria-label="Main navigation">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/courses">Courses</RouterLink>
        <RouterLink to="/attendance">Attendance</RouterLink>
        <RouterLink to="/assignments">Assignments</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>

      <div class="user-actions">
        <span>Hello, {{ auth.studentName }}</span>
        <button class="button secondary" @click="logout">Logout</button>
      </div>
    </header>

    <RouterView />
  </div>
</template>