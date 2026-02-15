<template>
  <section class="mx-auto max-w-6xl px-6 py-20">
    <div class="text-center" data-animate>
      <p class="text-xs font-bold uppercase tracking-[0.28em] text-primary">get in touch</p>
      <h2 class="mt-2 text-4xl font-extrabold text-slate-800">Book Your Appointment</h2>
    </div>

    <div class="mt-10 grid gap-8 md:grid-cols-3">
      <div class="space-y-4" data-animate>
        <div class="rounded-2xl bg-base-100 p-4 shadow">📍 123 Smile Street, NY</div>
        <div class="rounded-2xl bg-base-100 p-4 shadow">📞 +1 (555) 101-9999</div>
        <div class="rounded-2xl bg-base-100 p-4 shadow">✉️ hello@denti.com</div>
      </div>
      <form class="card col-span-2 bg-base-100 p-6 shadow" data-animate>
        <div class="grid gap-4 md:grid-cols-2">
          <input class="input input-bordered w-full" placeholder="Full Name">
          <input class="input input-bordered w-full" placeholder="Phone">
          <input class="input input-bordered w-full" placeholder="Email">
          <input class="input input-bordered w-full" placeholder="Date">
        </div>
        <textarea class="textarea textarea-bordered mt-4 w-full" rows="4" placeholder="Message"></textarea>
        <button class="btn btn-primary mt-4 text-white">Book an Appointment</button>
      </form>
    </div>
  </section>
</template>
