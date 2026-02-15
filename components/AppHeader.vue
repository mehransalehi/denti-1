<template>
  <header class="bg-gradient-to-br from-[#a4f1e1] to-[#6bddca] pb-16">
    <div class="navbar mx-auto max-w-6xl px-6 pt-6" data-animate>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl font-black text-slate-900">🦷 Denti</a>
      </div>
      <div class="hidden gap-6 text-sm font-medium md:flex">
        <a class="hover:text-primary">Home</a>
        <a class="hover:text-primary">Services</a>
        <a class="hover:text-primary">About</a>
        <a class="hover:text-primary">Blog</a>
      </div>
      <button class="btn btn-primary btn-sm ml-3 rounded-full text-white">Book an Appointment</button>
    </div>

    <section class="mx-auto grid max-w-6xl gap-8 px-6 pt-10 md:grid-cols-2 md:items-center">
      <div data-animate>
        <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">we care for your smile</p>
        <h1 class="mt-3 text-5xl font-black leading-tight text-slate-900">Making Better<br>Smile.</h1>
        <p class="mt-5 max-w-md text-sm text-slate-700">
          Experience world-class dentistry and friendly care designed to keep your confidence bright and healthy.
        </p>
        <div class="mt-7 flex gap-3">
          <button class="btn btn-neutral rounded-full text-white hover-float">Get Started</button>
          <button class="btn rounded-full">Learn More</button>
        </div>
        <div class="stats mt-8 bg-transparent shadow-none">
          <div class="stat px-0">
            <div class="stat-title text-slate-700">15k+</div>
            <div class="stat-desc">Happy Patients</div>
          </div>
          <div class="stat px-0">
            <div class="stat-title text-slate-700">20+</div>
            <div class="stat-desc">Years Experience</div>
          </div>
          <div class="stat px-0">
            <div class="stat-title text-slate-700">98%</div>
            <div class="stat-desc">Positive Feedback</div>
          </div>
        </div>
      </div>

      <div class="relative" data-animate>
        <img class="w-full rounded-2xl object-cover shadow-soft hover-float" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80" alt="Dental consultation">
        <div class="glass-panel absolute -bottom-5 left-6 rounded-2xl px-4 py-2 text-xs font-semibold">⭐ We care for your smile</div>
      </div>
    </section>
  </header>
</template>
