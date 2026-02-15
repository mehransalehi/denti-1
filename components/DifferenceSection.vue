<template>
  <section class="bg-gradient-to-r from-[#0a1732] to-[#162b56] py-20 text-white">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary" data-animate>why choose us</p>
      <h2 class="mt-2 text-4xl font-extrabold" data-animate>What Makes Us Different</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-4">
        <div v-for="item in items" :key="item" class="rounded-2xl border border-white/20 p-4 hover-float" data-animate>
          <div class="mb-3 text-primary">⬢</div>
          <p class="text-sm text-slate-200">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = ['Professional dentists', 'State-of-the-art tools', 'Transparent pricing', 'Personalized care']
</script>
