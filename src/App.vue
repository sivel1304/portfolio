<template>
  <div class="h-screen w-full snap-mandatory snap-y">
    <header class="fixed min-h-[35rem] top-0 left-0 right-0">
    <nav>
      <NavBar></NavBar>
    </nav>
      <NameHeader></NameHeader>
    </header>

    <main class="relative z-10 mt-[calc(100vh-74px)] snap-y">
    <div class="flex flex-col w-full mx-auto snap-always snap-center">
      <PortSection class="bg-primary snap-always snap-center" title="About Me" text-color="text-primary" :isTextLeft="false">
      <template v-slot:left>
    <p class="opacity-70"> link til insta og andet </p>
  </template>
<template v-slot:right>
    <p class="opacity-70"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis ex dolor, in
        porttitor lorem vehicula at. Vestibulum sem enim, dictum ut leo ut, mattis faucibus mauris. Cras vitae
        pellentesque eros, sed fermentum tellus. Morbi justo leo, dignissim sed egestas a, suscipit eu justo. Nam
        fringilla vulputate magna, ut tempus velit vehicula quis. Donec aliquet est ac est consequat, non viverra ex
        aliquet. Cras porttitor metus at quam fringilla imperdiet. Integer venenatis orci eget ipsum consequat molestie.
        Ut ultricies velit vel justo porta, a sagittis dui tincidunt. Sed sed lorem eget magna dignissim tempus eget in
        sem. Duis sit. </p>
  </template>
        </PortSection>
      <PortSection class="bg-secondary snap-center" title="Projects" text-color="text-secondary" :isTextLeft="true">
      <template v-slot:left>
    <p class="opacity-70"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis ex dolor, in
        porttitor lorem vehicula at. Vestibulum sem enim, dictum ut leo ut, mattis faucibus mauris. Cras vitae
        pellentesque eros, sed fermentum tellus. Morbi justo leo, dignissim sed egestas a, suscipit eu justo. Nam
        fringilla vulputate magna, ut tempus velit vehicula quis. Donec aliquet est ac est consequat, non viverra ex
        aliquet. Cras porttitor metus at quam fringilla imperdiet. Integer venenatis orci eget ipsum consequat molestie.
        Ut ultricies velit vel justo porta, a sagittis dui tincidunt. Sed sed lorem eget magna dignissim tempus eget in
        sem. Duis sit. </p>
  </template>

  <template v-slot:right>
    <p class="opacity-70"> 3d model af robot her </p>
  </template>
      </PortSection>

      <PortSection class="bg-third snap-center" title="Andet?" text-color="text-third" :isTextLeft="false"></PortSection>
    </div>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>