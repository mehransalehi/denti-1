<template>
  <section class="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
    <img data-animate src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80" class="rounded-2xl shadow-soft" alt="Customer review">
    <div data-animate>
      <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">testimonials</p>
      <h2 class="mt-2 text-4xl font-extrabold text-slate-800">What Customers Say</h2>
      <p class="mt-4 text-sm leading-7">"Truly an outstanding service from start to finish. The staff are warm, patient, and very professional."</p>
      <div class="rating mt-4">
        <input v-for="n in 5" :key="n" type="radio" class="mask mask-star-2 bg-orange-400" checked>
      </div>
      <div class="mt-3 flex items-center gap-3">
        <div class="avatar">
          <div class="w-10 rounded-full"><img src="https://i.pravatar.cc/80?img=12" alt="avatar"></div>
        </div>
        <div>
          <p class="text-sm font-bold">Mia Jacob</p>
          <p class="text-xs">Product Designer</p>
        </div>
      </div>
    </div>
  </section>
</template>
