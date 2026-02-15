<template>
  <section class="bg-primary py-20 text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
      <div data-animate>
        <h2 class="text-4xl font-extrabold">Download Our App</h2>
        <p class="mt-3 max-w-md text-sm text-white/90">Book appointments, get reminders, and access consultation records from your phone.</p>
        <div class="mt-7 flex gap-3">
          <button class="btn btn-neutral h-auto min-h-0 items-center gap-3 rounded-lg px-4 py-2 text-left normal-case">
            <i class="fa-brands fa-apple text-2xl"></i>
            <span><span class="block text-[10px] opacity-80">Download on the</span><span class="block text-sm font-semibold">App Store</span></span>
          </button>
          <button class="btn btn-neutral h-auto min-h-0 items-center gap-3 rounded-lg px-4 py-2 text-left normal-case">
            <i class="fa-brands fa-google-play text-xl"></i>
            <span><span class="block text-[10px] opacity-80">Get it on</span><span class="block text-sm font-semibold">Google Play</span></span>
          </button>
        </div>
      </div>
      <div class="flex justify-center" data-animate>
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=450&q=80" alt="App" class="h-64 w-40 rounded-[2rem] border-4 border-slate-900 object-cover shadow-2xl hover-float">
      </div>
    </div>
  </section>
</template>
