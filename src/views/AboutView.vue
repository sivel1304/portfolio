<template>
  <div class="w-full max-w-[1280px] mx-auto pt-24">

    <!-- hero -->
    <div
      class="relative px-5 md:px-16 pt-10 md:pt-[70px] pb-12 border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:48px_48px]">
      <div class="flex flex-wrap justify-between items-center gap-8">
        <div>
          <div class="font-mono text-xs text-secondary tracking-[0.1em] mb-4">GET TO KNOW ME</div>
          <h1 class="text-[clamp(38px,6vw,64px)] leading-none font-bold tracking-tight m-0">About Me</h1>
          <p class="mt-6 max-w-[480px] text-[16px] leading-relaxed text-white/60 font-light">
            I love creating, whether it's software, hardware, or music. Always building something.
          </p>
        </div>
        <BracketPhoto size="200px" />
      </div>
    </div>

    <!-- info + bio -->
    <div class="flex flex-wrap gap-12 px-5 md:px-16 pt-10 md:pt-14">
      <div class="flex-1 min-w-[260px] flex flex-col gap-6">
        <div>
          <div class="font-mono text-[11px] text-primary mb-2">01 — DEGREES</div>
          <div class="text-[14px] text-white/75 leading-relaxed">
            Bachelor in IT-Product Development<br>
            Master in IT-Product Development
          </div>
        </div>
        <div class="border-t border-white/10 pt-6">
          <div class="font-mono text-[11px] text-secondary mb-2">02 — LANGUAGES</div>
          <div class="text-[14px] text-white/75 leading-relaxed">Java, JavaScript, C, C++, C#, TypeScript, Python</div>
        </div>
        <div class="border-t border-white/10 pt-6">
          <div class="font-mono text-[11px] text-third mb-2">03 — WEB TECHNOLOGIES</div>
          <div class="text-[14px] text-white/75 leading-relaxed">Vue, Tailwind, React, Electron, React Native, REST, HTTP, MQTT</div>
        </div>
        <div class="border-t border-white/10 pt-6">
          <div class="font-mono text-[11px] text-primary mb-2">04 — DATABASES</div>
          <div class="text-[14px] text-white/75 leading-relaxed">MySQL, MSSQL, PostgreSQL, SQLite, Firebase, Supabase</div>
        </div>
        <div class="border-t border-white/10 pt-6">
          <div class="font-mono text-[11px] text-secondary mb-2">05 — TOOLS</div>
          <div class="text-[14px] text-white/75 leading-relaxed">Unity, VSCode, Visual Studio, .NET, IntelliJ, Git, OpenCV, Docker</div>
        </div>
      </div>

      <div class="flex-[1.4] min-w-[300px] pb-4">
        <div class="font-mono text-[11px] text-third mb-3.5">// BIO</div>
        <p class="text-[16px] leading-[1.75] text-white/70 font-light m-0">
          I'm Viktor, a passionate builder, developer, and problem solver. I'm 26, with a Master's degree in IT Product
          Development from Aarhus University, where I've developed a structured, independent approach to tackling complex
          technical challenges.
          <br><br>
          I love creating things, especially when electronics and programming come together. Whether it's designing smart
          home systems, building interactive web applications, developing games, or experimenting with embedded systems
          like ATmega and ESP32, I'm always looking for new ways to bring ideas to life. My primary passion, though, lies
          in XR application development, where I've gained hands-on experience with Unity and C# as part of my academic work.
          <br><br>
          My background spans software development, hardware integration, and user-centered design. Over the years I've
          worked on everything from practical IT solutions and IoT devices to game development, automation systems, and
          DIY hardware builds. I'm analytical, quick to learn, and take real ownership of my work. I enjoy pushing the
          limits of what technology can do and turning ideas into practical, user-focused solutions.
          <br><br>
          Outside of structured work and studies, I spend a lot of my time on personal projects: building custom tools,
          tinkering with electronics, and sharpening my skills in Python, Java, and C++.
          <br><br>
          If you share an interest in creative tech solutions or have an exciting project idea, I'd love to connect!
        </p>

        <div class="flex gap-4 mt-8">
          <a href="https://www.linkedin.com/in/viktor-s-aa-nielsen/" target="_blank" rel="noopener noreferrer"
            class="border border-primary bg-primary text-backgrund-900 px-[26px] py-3 rounded-md text-[13px] font-semibold">
            LinkedIn ↗
          </a>
          <a href="mailto:viktor00@live.dk"
            class="border border-white/20 text-white/80 px-[26px] py-3 rounded-md text-[13px] font-medium">
            Email
          </a>
        </div>
      </div>
    </div>

    <div class="h-16"></div>
  </div>
</template>

<script setup>
import BracketPhoto from '@/components/BracketPhoto.vue';
</script>
