<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pages = {
  courses: {
    title: 'My Courses',
    description: 'Your enrolled courses and learning progress.',
    items: [
      { icon: '🌐', name: 'Web Development', detail: 'HTML, CSS, Vue.js', progress: 72 },
      { icon: '🗄️', name: 'Database Systems', detail: 'SQL and data modeling', progress: 58 },
      { icon: '💻', name: 'JavaScript', detail: 'Programming fundamentals', progress: 86 }
    ]
  },
  attendance: {
    title: 'Attendance',
    description: 'Your class attendance for this month.',
    percentage: 92,
    present: 23,
    total: 25,
    items: [
      { name: 'Web Development', value: '96%' },
      { name: 'Database Systems', value: '88%' },
      { name: 'JavaScript', value: '92%' }
    ]
  },
  assignments: {
    title: 'Assignments',
    description: 'Track upcoming and completed coursework.',
    items: [
      { icon: '🟣', name: 'Vue Components', detail: 'Web Development', due: 'Due tomorrow', status: 'Pending' },
      { icon: '🔵', name: 'Routing Plan', detail: 'Web Development', due: 'Due Friday', status: 'Pending' },
      { icon: '🟢', name: 'Database Design', detail: 'Database Systems', due: 'Submitted', status: 'Completed' }
    ]
  },
  profile: {
    title: 'Student Profile',
    description: 'Your student information.',
    details: [
      { label: 'Name', value: 'Demo Student' },
      { label: 'Program', value: 'B.Sc. Information Technology' },
      { label: 'Year', value: 'Second Year' },
      { label: 'Student ID', value: 'STU-2026-001' },
      { label: 'Email', value: 'student@example.com' }
    ]
  },
  settings: {
    title: 'Settings',
    description: 'Your dashboard preferences.',
    items: [
      { name: 'Email notifications', detail: 'Receive assignment reminders', enabled: true },
      { name: 'Course updates', detail: 'Show announcements from courses', enabled: true },
      { name: 'Weekly summary', detail: 'Receive a weekly progress summary', enabled: false }
    ]
  }
}

const page = computed(() => pages[route.name] || pages.courses)
</script>

<template>
  <main class="page feature-page">
    <header class="feature-heading">
      <div>
        <p class="eyebrow">STUDENT PORTAL</p>
        <h1>{{ page.title }}</h1>
        <p class="muted">{{ page.description }}</p>
      </div>
      <div class="feature-mark">✦</div>
    </header>

    <section v-if="route.name === 'courses'" class="feature-grid">
      <article v-for="course in page.items" :key="course.name" class="feature-card">
        <div class="feature-card-top">
          <span class="feature-icon">{{ course.icon }}</span>
          <span class="progress-label">{{ course.progress }}% complete</span>
        </div>
        <h2>{{ course.name }}</h2>
        <p class="muted">{{ course.detail }}</p>
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: course.progress + '%' }"></div>
        </div>
      </article>
    </section>

    <section v-else-if="route.name === 'attendance'" class="feature-grid">
      <article class="feature-card attendance-summary">
        <p class="eyebrow">OVERALL ATTENDANCE</p>
        <strong class="attendance-number">{{ page.percentage }}%</strong>
        <p class="muted">{{ page.present }} of {{ page.total }} classes attended</p>
        <div class="progress-track">
          <div class="progress-fill attendance-progress" :style="{ width: page.percentage + '%' }"></div>
        </div>
        <p class="attendance-note">Great work — you are above the 75% target.</p>
      </article>

      <article class="feature-card">
        <h2>By Course</h2>
        <div v-for="item in page.items" :key="item.name" class="simple-row">
          <span>{{ item.name }}</span><strong>{{ item.value }}</strong>
        </div>
      </article>
    </section>

    <section v-else-if="route.name === 'assignments'" class="feature-card">
      <article v-for="item in page.items" :key="item.name" class="assignment-row">
        <span class="feature-icon">{{ item.icon }}</span>
        <div class="assignment-info">
          <strong>{{ item.name }}</strong>
          <small>{{ item.detail }}</small>
        </div>
        <div class="assignment-meta">
          <small>{{ item.due }}</small>
          <span class="status-badge" :class="{ done: item.status === 'Completed' }">
            {{ item.status }}
          </span>
        </div>
      </article>
    </section>

    <section v-else-if="route.name === 'profile'" class="feature-card profile-list">
      <div v-for="item in page.details" :key="item.label" class="simple-row">
        <span>{{ item.label }}</span><strong>{{ item.value }}</strong>
      </div>
    </section>

    <section v-else class="feature-card">
      <div v-for="item in page.items" :key="item.name" class="setting-row">
        <div>
          <strong>{{ item.name }}</strong>
          <p class="muted">{{ item.detail }}</p>
        </div>
        <span class="status-badge" :class="{ done: item.enabled }">
          {{ item.enabled ? 'On' : 'Off' }}
        </span>
      </div>
    </section>
  </main>
</template>

<style scoped>
.feature-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.feature-heading h1 {
  margin: 0 0 8px;
  color: #312e81;
  font-size: 32px;
}

.feature-heading .muted {
  margin: 0;
}

.feature-mark {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 18px;
  color: #584bd9;
  background: #efefff;
  font-size: 28px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.feature-card {
  padding: 24px;
  border: 1px solid #e8ebf4;
  border-radius: 18px;
  background: white;
  box-shadow: 0 8px 24px rgb(38 50 91 / 5%);
}

.feature-card h2 {
  margin: 16px 0 8px;
  color: #202a45;
  font-size: 18px;
}

.feature-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.feature-icon {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 14px;
  background: #f0efff;
  font-size: 22px;
}

.progress-label {
  color: #5b50d7;
  font-size: 12px;
  font-weight: 700;
}

.progress-track {
  height: 9px;
  overflow: hidden;
  margin-top: 18px;
  border-radius: 99px;
  background: #eceef6;
}

.progress-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #7165e8, #a093ff);
}

.attendance-number {
  display: block;
  margin-top: 20px;
  color: #218d78;
  font-size: 54px;
}

.attendance-progress {
  background: linear-gradient(90deg, #24ad91, #72d6bb);
}

.attendance-note {
  color: #218d78;
  font-size: 13px;
}

.simple-row,
.setting-row,
.assignment-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f0f1f6;
}

.simple-row:last-child,
.setting-row:last-child,
.assignment-row:last-child {
  border-bottom: 0;
}

.simple-row span,
.setting-row strong,
.assignment-info strong {
  color: #35405a;
  font-size: 14px;
}

.simple-row strong {
  color: #5146d8;
}

.assignment-info {
  display: grid;
  flex: 1;
  gap: 5px;
}

.assignment-info small,
.assignment-meta small {
  color: #929bb0;
  font-size: 12px;
}

.assignment-meta {
  display: grid;
  justify-items: end;
  gap: 7px;
}

.status-badge {
  padding: 6px 10px;
  border-radius: 99px;
  color: #a76b18;
  background: #fff4df;
  font-size: 11px;
  font-weight: 800;
}

.status-badge.done {
  color: #15866f;
  background: #e7f8f2;
}

.setting-row .muted {
  margin: 5px 0 0;
}

@media (max-width: 600px) {
  .feature-heading h1 {
    font-size: 26px;
  }

  .assignment-row {
    align-items: flex-start;
  }
}
</style>