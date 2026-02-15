<template>
  <section class="bg-white py-20">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center" data-animate>
        <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">get in touch</p>
        <h2 class="mt-2 text-4xl font-extrabold text-slate-800">Book Your Appointment</h2>
      </div>

      <div class="mt-10 grid gap-8 md:grid-cols-3">
        <div class="space-y-4" data-animate>
          <div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 shadow-sm"><i class="fa-solid fa-location-dot text-primary"></i> 123 Smile Street, NY</div>
          <div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 shadow-sm"><i class="fa-solid fa-phone text-primary"></i> +1 (555) 101-9999</div>
          <div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 shadow-sm"><i class="fa-solid fa-envelope text-primary"></i> hello@denti.com</div>
        </div>
        <form class="card col-span-2 bg-slate-100 p-6 shadow" data-animate>
          <div class="grid gap-4 md:grid-cols-2">
            <input class="input input-bordered w-full bg-white" placeholder="Full Name">
            <input class="input input-bordered w-full bg-white" placeholder="Phone">
            <input class="input input-bordered w-full bg-white" placeholder="Email">
            <input class="input input-bordered w-full bg-white" placeholder="Date">
          </div>
          <textarea class="textarea textarea-bordered mt-4 w-full bg-white" rows="4" placeholder="Message"></textarea>
          <button class="btn btn-primary mt-4 text-white">Book an Appointment</button>
        </form>
      </div>
    </div>
  </section>
</template>
