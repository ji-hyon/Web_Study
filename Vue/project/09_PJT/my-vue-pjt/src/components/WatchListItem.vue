<template>
  <div>
    <div class="item">
      <div :class="{'checked': item.isChecked}" @click="toggleItem(item)">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleItem: function(item) {
      item.isChecked = !item.isChecked
    }
  }

}
</script>

<style>
.checked {
  text-decoration: line-through;
}

.item {
  margin: 10px;
  padding: 30px;
  background-color:azure;
  border-radius: 10px;
}
</style>