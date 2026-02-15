<template>
  <header class="relative min-h-screen bg-gradient-to-br from-[#b9f3e8] via-[#8ae6d7] to-[#5ad9c8]">
    <div
      :class="[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      ]"
    >
      <div class="navbar mx-auto max-w-6xl px-6 py-4" data-animate>
        <div class="flex-1">
          <a class="text-xl font-black text-slate-900"><i class="fa-solid fa-tooth mr-2 text-primary"></i>Denti</a>
        </div>
        <div class="hidden gap-8 md:flex">
          <a class="nav-link">Home</a>
          <a class="nav-link">Services</a>
          <a class="nav-link">About</a>
          <a class="nav-link">Blog</a>
        </div>
        <button class="btn btn-primary btn-sm ml-4 rounded-full text-white">Book an Appointment</button>
      </div>
    </div>

    <section class="mx-auto grid min-h-screen max-w-6xl gap-8 px-6 pb-10 pt-28 md:grid-cols-2 md:items-center">
      <div data-animate>
        <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">we care for your smile</p>
        <h1 class="mt-3 text-5xl font-black leading-tight text-slate-900 md:text-6xl">Making Better<br>Smile.</h1>
        <p class="mt-5 max-w-md text-sm text-slate-700">
          Experience world-class dentistry and friendly care designed to keep your confidence bright and healthy.
        </p>
        <div class="mt-7 flex gap-3">
          <button class="btn btn-neutral rounded-full text-white hover-float">Get Started</button>
          <button class="btn rounded-full">Learn More</button>
        </div>
        <div class="stats mt-8 bg-transparent shadow-none">
          <div class="stat px-0"><div class="stat-title text-slate-800">15k+</div><div class="stat-desc">Happy Patients</div></div>
          <div class="stat px-0"><div class="stat-title text-slate-800">20+</div><div class="stat-desc">Years Experience</div></div>
          <div class="stat px-0"><div class="stat-title text-slate-800">98%</div><div class="stat-desc">Positive Feedback</div></div>
        </div>
      </div>

      <div class="relative" data-animate>
        <img class="w-full rounded-2xl object-cover shadow-soft hover-float" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80" alt="Dental consultation">
        <div class="glass-panel absolute -bottom-5 left-6 rounded-2xl px-4 py-2 text-xs font-semibold">⭐ We care for your smile</div>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
