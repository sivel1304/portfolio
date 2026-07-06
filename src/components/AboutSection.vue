<template>
  <div class="w-full md:w-1/3 px-4 h-full flex flex-col md:mr-20 justify-between">
    <div class="">
      <h2 class="text-3xl md:mb-8">About Me</h2>
      <p class="font-light leading-7 text-base">Hi, my name is Viktor Nielsen. I'm 26 years old, and i have a masters
        degree in IT-Product Development at Aarhus University </p>
    </div>
    <p class="font-light leading-7 text-base">I love creating. Whether its software or hardware or even music. I
      am always doing a project.</p>
    <p class="font-light leading-7 text-base">Check out some of my projects to the right! Or contact me below</p>

    <div class="flex w-full justify-center items-center mb-4 md:mb-0">
      <div class="group flex w-fit h-10 hover:cursor-pointer items-center">
        <img src="../assets/icons/instagram.png" alt="instagram" class="h-5 opacity-40 group-hover:opacity-100 mr-2">
        <p class="opacity-40 group-hover:opacity-100 ">Instagram</p>
      </div>

      <div class="h-6 w-[1px] bg-white opacity-20 mx-6"></div>

      <a href="https://www.linkedin.com/in/viktor-s-aa-nielsen/" target="_blank" rel="noopener noreferrer"
        class="group flex w-fit h-10 hover:cursor-pointer items-center">
        <img src="../assets/icons/linkedin.png" alt="linkedin" class="h-5 opacity-40 group-hover:opacity-100 mr-2">
        <p class="opacity-40 group-hover:opacity-100">LinkedIn</p>
      </a>

      <div class="h-6 w-[1px] bg-white opacity-20 mx-6"></div>

      <a href="mailto:viktor00@live.dk" class="group flex w-fit h-10 hover:cursor-pointer items-center">
        <img src="../assets/icons/email.png" alt="email" class="h-5 opacity-40 group-hover:opacity-100 mr-2">
        <p class="opacity-40 group-hover:opacity-100">Email</p>
      </a>
    </div>

  </div>
</template>