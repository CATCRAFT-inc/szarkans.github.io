<template>
  <p v-if="failed" class="staff-grid__note">
    Не смогли достать список с сервера. Загляни чуть позже.
  </p>
  <p v-else-if="loaded && !names.length" class="staff-grid__note">
    Сейчас модераторов нет. Всекотята ушли на перерыв.
  </p>
  <CardGrid v-else-if="loaded">
    <Card v-for="name in names" :key="name" style="width: 11rem; overflow: hidden" class="m-0">
      <template #header>
        <img alt="user header" :src="`https://vzge.me/face/512/${name}?y=-40`" />
      </template>
      <template #title>{{ name }}</template>
    </Card>
  </CardGrid>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Список модераторов = группа moderator в LuckPerms. Экспорт делает
// export-staff.sh на проде (кроном), Caddy отдаёт его с карты.
const SOURCE = 'https://map.catcraft.ru/data/staff.json'

const names = ref([])
const loaded = ref(false)
const failed = ref(false)

onMounted(async () => {
  try {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 5000)
    const response = await fetch(SOURCE, { signal: controller.signal })
    clearTimeout(timeout)
    if (!response.ok) throw new Error('staff request failed')
    const data = await response.json()
    names.value = data.moderators ?? []
  } catch {
    failed.value = true
  } finally {
    loaded.value = true
  }
})
</script>

<style scoped>
.staff-grid__note { color: #9a94ab; }
</style>
