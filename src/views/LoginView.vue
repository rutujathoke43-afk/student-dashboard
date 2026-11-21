<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

function login() {
  if (auth.login(email.value, password.value)) {
    router.push('/dashboard')
  }
}
</script>

<template>
  <main class="login-page">
    <section class="login-card">
      <div class="login-art">
        <div class="brand">
          <span class="brand-mark">C</span>
          <span>CampusHub</span>
        </div>

        <div class="art-content">
          <p class="art-label">YOUR LEARNING SPACE</p>
          <h1>Learn today.<br />Lead tomorrow.</h1>
          <p class="art-copy">
            Keep your courses, attendance and assignments together in one place.
          </p>
          <div class="art-stat">
            <span class="stat-icon">✦</span>
            <div>
              <strong>One step at a time</strong>
              <small>Your progress starts here</small>
            </div>
          </div>
        </div>
        <div class="decoration decoration-one"></div>
        <div class="decoration decoration-two"></div>
      </div>

      <div class="login-form-panel">
        <div class="mobile-brand">
          <span class="brand-mark">C</span>
          <span>CampusHub</span>
        </div>

        <div class="form-heading">
          <p class="form-eyebrow">STUDENT PORTAL</p>
          <h2>Welcome back</h2>
          <p>Log in to continue to your dashboard.</p>
        </div>

        <form @submit.prevent="login">
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
            placeholder="Enter your password"
            autocomplete="current-password"
            required
          />

          <p v-if="auth.error" class="error-message">{{ auth.error }}</p>

          <button type="submit">
            Log in
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <p class="switch-link">
          New to CampusHub?
          <RouterLink to="/register">Create an account</RouterLink>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 18px;
  background:
    radial-gradient(circle at 10% 15%, #dfe4ff 0, transparent 30%),
    radial-gradient(circle at 90% 85%, #d9f6ee 0, transparent 28%),
    #f4f6fc;
  font-family: Inter, "Segoe UI", Arial, sans-serif;
}

.login-card {
  width: min(980px, 100%);
  min-height: 580px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  overflow: hidden;
  border: 1px solid #e6e9f3;
  border-radius: 28px;
  background: white;
  box-shadow: 0 28px 80px rgb(40 49 100 / 15%);
}

.login-art {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 34px;
  color: white;
  background: linear-gradient(145deg, #3730a3, #5b50d8 58%, #8176ed);
}

.brand,
.mobile-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 19px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 12px;
  color: #5146d8;
  background: white;
  font-size: 20px;
  font-weight: 900;
}

.art-content {
  position: relative;
  z-index: 1;
  max-width: 390px;
  margin: auto 0;
  padding: 48px 0;
}

.art-label,
.form-eyebrow {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.8px;
}

.art-label {
  color: #d8d6ff;
}

.art-content h1 {
  margin: 0 0 16px;
  color: white;
  font-size: clamp(36px, 5vw, 52px);
  line-height: 1.08;
  letter-spacing: -1.8px;
}

.art-copy {
  max-width: 330px;
  margin: 0;
  color: #e5e4ff;
  font-size: 15px;
  line-height: 1.7;
}

.art-stat {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  margin-top: 34px;
  padding: 13px 17px;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 15px;
  background: rgb(255 255 255 / 12%);
}

.stat-icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 12px;
  color: #604fd1;
  background: #fff1c6;
  font-size: 20px;
}

.art-stat strong,
.art-stat small {
  display: block;
}

.art-stat strong {
  font-size: 13px;
}

.art-stat small {
  margin-top: 4px;
  color: #e4e2ff;
  font-size: 11px;
}

.decoration {
  position: absolute;
  border: 1px solid rgb(255 255 255 / 13%);
  border-radius: 50%;
}

.decoration-one {
  top: -115px;
  right: -80px;
  width: 320px;
  height: 320px;
}

.decoration-two {
  right: -125px;
  bottom: -165px;
  width: 390px;
  height: 390px;
}

.login-form-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(30px, 6vw, 66px);
}

.mobile-brand {
  display: none;
  margin-bottom: 44px;
  color: #5146d8;
}

.mobile-brand .brand-mark {
  color: white;
  background: #5146d8;
}

.form-heading {
  margin-bottom: 30px;
}

.form-eyebrow {
  color: #6a5de0;
}

.form-heading h2 {
  margin: 0 0 9px;
  color: #202744;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -1.2px;
}

.form-heading p:last-child {
  margin: 0;
  color: #858da2;
  font-size: 14px;
  line-height: 1.6;
}

form {
  display: grid;
  gap: 11px;
}

form label {
  color: #39425c;
  font-size: 13px;
  font-weight: 700;
}

form input {
  box-sizing: border-box;
  width: 100%;
  padding: 14px 15px;
  border: 1px solid #dfe3ee;
  border-radius: 12px;
  outline: none;
  color: #202744;
  background: #fbfcff;
  font-size: 15px;
}

form input:focus {
  border-color: #7569e7;
  background: white;
  box-shadow: 0 0 0 4px rgb(117 105 231 / 12%);
}

form button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;
  padding: 14px 17px;
  border: 0;
  border-radius: 12px;
  color: white;
  background: linear-gradient(100deg, #5146d8, #7568e8);
  box-shadow: 0 9px 18px rgb(81 70 216 / 22%);
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}

form button span {
  font-size: 20px;
}

.error-message {
  margin: 4px 0;
  color: #c62828;
  font-size: 13px;
}

.switch-link {
  margin: 22px 0 0;
  color: #858da2;
  font-size: 13px;
  text-align: center;
}

.switch-link a {
  color: #5146d8;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 720px) {
  .login-card {
    width: min(470px, 100%);
    min-height: auto;
    grid-template-columns: 1fr;
    border-radius: 22px;
  }

  .login-art {
    display: none;
  }

  .login-form-panel {
    padding: 34px 26px;
  }

  .mobile-brand {
    display: flex;
  }
}
</style>