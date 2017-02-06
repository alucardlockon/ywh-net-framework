<template>
  <div class="v-list">
    <ul>
      <li v-for="name in names">{{name.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'v-list',
  props: ['message'],
  data () {
    return {
      item: '111',
      names: [
        { name: 'ps4' },
        { name: 'ps3' },
        { name: 'wii' },
        { name: 'wiiu' },
        { name: 'xbox360' },
        { name: 'xboxOne' }
      ]
    }
  }
}
</script>
<style>
.v-list{
  width: 100%;
}
</style>