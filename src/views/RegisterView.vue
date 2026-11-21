<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  const registered = auth.register(name.value, email.value, password.value)

  if (registered) {
    router.push('/dashboard')
  }
}
</script>

<template>
  <main class="auth-page">
    <form class="auth-card" @submit.prevent="handleRegister">
      <p class="eyebrow">STUDENT DASHBOARD</p>
      <h1>Create account</h1>
      <p class="subtitle">Register to access your student dashboard.</p>

      <label for="name">Full name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        placeholder="Enter your name"
        autocomplete="name"
        required
      />

      <label for="email">Email address</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        required
      />

      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="At least 8 characters"
        autocomplete="new-password"
        minlength="8"
        required
      />

      <p v-if="auth.error" class="error-message">{{ auth.error }}</p>

      <button type="submit">Create account</button>

      <p class="switch-link">
        Already registered?
        <RouterLink to="/login">Log in</RouterLink>
      </p>
    </form>
  </main>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: linear-gradient(135deg, #eef2ff, #f5f3ff 55%, #ecfeff);
  font-family: Arial, sans-serif;
}

.auth-card {
  width: min(100%, 430px);
  padding: 38px;
  border: 1px solid #e5e7eb;
  border-radius: 22px;
  background: white;
  box-shadow: 0 20px 60px #2530641a;
}

.eyebrow {
  color: #6257d9;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

h1 {
  margin: 10px 0;
  color: #20243a;
  font-size: 32px;
}

.subtitle {
  margin: 0 0 24px;
  color: #73778b;
  line-height: 1.5;
}

label {
  display: block;
  margin: 16px 0 7px;
  color: #34384d;
  font-size: 14px;
  font-weight: 600;
}

input {
  box-sizing: border-box;
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #d9dbea;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
}

input:focus {
  border-color: #7065e8;
  box-shadow: 0 0 0 3px #7065e822;
}

button {
  width: 100%;
  margin-top: 22px;
  padding: 14px;
  border: 0;
  border-radius: 10px;
  background: #6257d9;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.error-message {
  margin: 14px 0 0;
  color: #c62828;
  font-size: 14px;
}

.switch-link {
  margin: 22px 0 0;
  color: #73778b;
  text-align: center;
}

.switch-link a {
  color: #6257d9;
  font-weight: 700;
  text-decoration: none;
}
</style>