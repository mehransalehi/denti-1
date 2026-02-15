<template>
  <section class="bg-base-100 py-20">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center" data-animate>
        <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">our blog</p>
        <h2 class="mt-2 text-4xl font-extrabold text-slate-800">Latest Blog & Articles</h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-4">
        <article v-for="post in posts" :key="post.title" class="card bg-base-100 shadow hover-float" data-animate>
          <figure><img :src="post.image" :alt="post.title" class="h-32 w-full object-cover"></figure>
          <div class="card-body p-4">
            <h3 class="text-sm font-bold">{{ post.title }}</h3>
          </div>
        </article>
      </div>
      <div class="mt-10 text-center" data-animate>
        <button class="btn btn-neutral rounded-full text-white">View More</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  { title: 'How to Keep Your Teeth Healthy Every Day', image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80' },
  { title: 'When You Should Book A Dental Cleaning', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80' },
  { title: 'Top 5 Benefits of Routine Checkups', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
  { title: 'The Role of Technology in Modern Dentistry', image: 'https://images.unsplash.com/photo-1629909615957-bea00f5d0c2c?auto=format&fit=crop&w=800&q=80' }
]
</script>
