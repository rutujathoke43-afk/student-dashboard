<script setup>
import SummaryCard from '../components/SummaryCard.vue'
import { useDashboardStore } from '../stores/dashboard'
import { useAuthStore } from '../stores/auth'

const dashboard = useDashboardStore()
const auth = useAuthStore()
const progressValues = [72, 58, 86]
</script>

<template>
  <main class="page dashboard-page">
    <section class="welcome-banner">
      <div>
        <p class="eyebrow">STUDENT OVERVIEW</p>
        <h1>Welcome back, {{ auth.studentName }} <span>✦</span></h1>
        <p>Your learning journey is moving forward. Here is your progress at a glance.</p>
      </div>
      <div class="welcome-illustration" aria-hidden="true">🎓</div>
    </section>

    <section class="stats-grid" aria-label="Study summary">
      <SummaryCard
        title="📚 My Courses"
        :value="dashboard.courseCount + ''"
        description="Active courses this term"
      />
      <SummaryCard
        title="📊 Attendance"
        :value="dashboard.attendance + '%'"
        description="Above the 75% target"
      />
      <SummaryCard
        title="📝 Assignments"
        :value="dashboard.pendingAssignmentCount + ''"
        description="Tasks waiting for you"
      />
    </section>

    <div class="content-grid">
      <section class="panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">YOUR LEARNING</p>
            <h2>My Courses</h2>
          </div>
          <RouterLink to="/courses" class="text-link">View all →</RouterLink>
        </div>

        <article
          v-for="(course, index) in dashboard.courses"
          :key="course"
          class="course-row"
        >
          <div class="course-icon" :class="'tone-' + (index % 3)">
            {{ ['⌘', '▦', 'JS'][index % 3] }}
          </div>

          <div class="course-info">
            <div class="course-title">
              <strong>{{ course }}</strong>
              <span>{{ progressValues[index % 3] }}%</span>
            </div>
            <div class="progress-track">
              <div
                class="progress-fill"
                :style="{ width: progressValues[index % 3] + '%' }"
              ></div>
            </div>
            <small>Course progress</small>
          </div>
        </article>
      </section>

      <section class="panel attendance-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">THIS MONTH</p>
            <h2>Attendance</h2>
          </div>
          <span class="status-pill">On track</span>
        </div>

        <div class="attendance-score">
          {{ dashboard.attendance }}<span>%</span>
        </div>
        <p class="muted">Great work! Keep attending classes to stay on track.</p>

        <div class="progress-track attendance-track">
          <div
            class="progress-fill attendance-fill"
            :style="{ width: dashboard.attendance + '%' }"
          ></div>
        </div>
        <div class="attendance-legend">
          <span>0%</span><span>Minimum 75%</span><span>100%</span>
        </div>
      </section>

      <section class="panel assignments-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">NEXT TO COMPLETE</p>
            <h2>Assignments</h2>
          </div>
          <RouterLink to="/assignments" class="text-link">View all →</RouterLink>
        </div>

        <article
          v-for="(item, index) in dashboard.assignments"
          :key="item.id"
          class="assignment-row"
        >
          <div class="assignment-icon" :class="index % 2 ? 'lavender' : 'mint'">
            {{ index % 2 ? '✎' : '✓' }}
          </div>
          <div class="assignment-info">
            <strong>{{ item.title }}</strong>
            <small>{{ index % 2 ? 'Due Friday' : 'Due tomorrow' }}</small>
          </div>
          <span class="assignment-status">
            {{ item.complete ? 'Done' : 'Pending' }}
          </span>
        </article>
      </section>
    </div>
  </main>
</template>