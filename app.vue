<template>
  <NuxtPage />
</template>

<script setup lang="ts">
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('[data-animate]').forEach((el, index) => {
    ;(el as HTMLElement).style.transitionDelay = `${Math.min(index * 70, 450)}ms`
    observer.observe(el)
  })
})
</script>
