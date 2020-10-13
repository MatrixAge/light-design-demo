<template>
      <div class="menu_items w_100 border_box flex flex_column">
            <div
                  class="menu_item w_100 border_box flex flex_column"
                  v-for="item in menu_items"
                  :key="item.path"
            >
                  <span class="title">{{item.name}}</span>
                  <div class="components w_100 border_box flex flex_column">
                        <div
                              class="component w_100 border_box flex align_end"
                              v-for="(it,idx) in item.components"
                        >
                              <span class="name"> {{it.name}}</span>
                              <span class="description"> {{it.description}}</span>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script lang='ts' src='./app.ts'></script>

<style lang="less" scoped>
@import './app.less';
</style>