<template id="template">
  <div class="message">{{msg}}</div>    
</template>
<script>
export default {
  data: function() {
    return {
      msg: 'Hello from vue-loader'
    }
  },
  template: '#template'
}
</script>
<style>
.message{
    color:red;
    font-size:36px;
    font-weight:blod;
}
</style>