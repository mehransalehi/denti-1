<template>
  <section class="bg-base-100 py-20">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center" data-animate>
        <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">What we offer</p>
        <h2 class="mt-2 text-4xl font-extrabold text-slate-800">Our Dental Services</h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div v-for="service in services" :key="service.title" class="card bg-base-100 shadow hover-float" data-animate>
          <figure><img :src="service.image" :alt="service.title" class="h-44 w-full object-cover"></figure>
          <div class="card-body">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="text-sm">{{ service.description }}</p>
            <a class="text-primary text-sm font-semibold">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { title: 'Teeth Whitening', description: 'Safe whitening sessions for brighter confidence.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80' },
  { title: 'Teeth Checkup', description: 'Routine checkups to maintain oral health.', image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80' },
  { title: 'Dental Implant', description: 'Advanced implant procedures by experts.', image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80' }
]
</script>
