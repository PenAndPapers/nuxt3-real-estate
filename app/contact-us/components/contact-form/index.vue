<template>
  <form>
    <div class="mb-3">
      <label for="name" class="block text-xl font-semibold">Name<sup class="text-rose-500">*</sup></label>
      <input class="w-4/5 h-14 px-4 rounded-2xl border border-gray-300 text-xl outline-none" type="text" id="name" autofocus>
    </div>
    <div class="mb-3">
      <label for="email" class="block text-xl font-semibold">Email<sup class="text-rose-500">*</sup></label>
      <input class="w-4/5 h-14 px-4 rounded-2xl border border-gray-300 text-xl outline-none" type="email" id="email">
    </div>
    <div class="mb-3">
      <label for="phone" class="block text-xl font-semibold">Phone</label>
      <input class="w-4/5 h-14 px-4 rounded-2xl border border-gray-300 text-xl outline-none" type="text" id="phone">
    </div>
    <div class="mb-6">
      <label for="find" class="block text-xl font-semibold">How did you find us?<sup class="text-rose-500">*</sup></label>
      <select class="w-4/5 h-14 px-4 rounded-2xl border border-gray-300 text-xl outline-none bg-white" id="find">
        <option value="Eiusmod dolore proident">Eiusmod dolore proident</option>
        <option value="Sunt reprehenderit officia reprehenderit">Sunt reprehenderit officia reprehenderit</option>
        <option value="Consectetur ad culpa qui ex ipsum">Consectetur ad culpa qui ex ipsum</option>
        <option value="Tempor dolore ad laboris irure">Tempor dolore ad laboris irure</option>
      </select>
    </div>
    <button class="w-4/5 h-14 rounded-xl text-xl font-semibold bg-rose-700 text-white">Submit</button>
  </form>
</template>

<script setup lang="ts"></script>