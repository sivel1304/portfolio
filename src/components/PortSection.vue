<template>
    <div class="flex flex-row w-full h-[75vh] mx-auto text-backgrund-800 pt-24 p-8 2xl:px-20">
        <div class="w-2/3 pr-8">
          <h2 class="mb-10">{{title}}</h2>
          <p class="opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis ex dolor, in porttitor lorem vehicula at. Vestibulum sem enim, dictum ut leo ut, mattis faucibus mauris. Cras vitae pellentesque eros, sed fermentum tellus. Morbi justo leo, dignissim sed egestas a, suscipit eu justo. Nam fringilla vulputate magna, ut tempus velit vehicula quis. Donec aliquet est ac est consequat, non viverra ex aliquet. Cras porttitor metus at quam fringilla imperdiet. Integer venenatis orci eget ipsum consequat molestie. Ut ultricies velit vel justo porta, a sagittis dui tincidunt. Sed sed lorem eget magna dignissim tempus eget in sem. Duis sit amet tellus in erat pharetra congue. Vestibulum ut dolor eget sapien hendrerit condimentum non sed sem. Aliquam ultrices condimentum pellentesque.</p>
        </div>
          <div class="flex flex-col w-1/3 pl-8">
            <p class="opacity-70 font-light"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vehicula at. Vestibulum sem enim, dictum ut leo ut, mattis faucibus mauris. Cras vitae pellentesque eros, sed fermentum tellus. Morbi justo leo, dignissim sed egestas a, suscipit eu justo. Nam fringilla vulputate magna, ut tempus velit vehicula quis. Donec aliquet est ac est consequat, non viverra ex aliquet. Cras porttitor metus at quam fringilla imperdiet. Integer venenatis orci eget</p>
            <button class="flex bg-backgrund-800 rounded-lg w-fit h-fit mx-auto mt-8 shadow-md hover:bg-backgrund-900 hover:shadow-lg"><p class="m-4 text-secondary ">{{title}}</p></button>
          </div>

    </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>