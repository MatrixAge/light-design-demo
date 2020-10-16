<template>

      <div class="menu_items_wrap w_100 border_box">
            <div
                  class="menu_items w_100 border_box flex flex_column"
                  :class="group?'group':''"
            >
                  <div
                        class="menu_item w_100 border_box flex flex_column"
                        v-for="item in menu_items"
                        :key="item.path"
                  >
                        <div class="title_wrap w_100 border_box flex justify_between align_center">
                              <router-link
                                    class="title"
                                    :to="'/com/'+item.path"
                                    @click.native=""
                              >{{item.name}}</router-link>
                              <div
                                    class="icon_close_wrap flex justify_center align_center"
                                    @click.stop="back"
                              >
                                    <img
                                          class="icon_close"
                                          src="/@/assets/icon_close.svg"
                                          alt="icon_close"
                                    >
                              </div>
                        </div>
                        <div class="components w_100 border_box flex flex_column">
                              <router-link
                                    class="component w_100 border_box flex justify_between align_center"
                                    v-for="(it,idx) in item.components"
                                    :key="it.name"
                                    :to="'/com/'+item.path+'/'+it.name"
                              >
                                    <div class="left flex align_end">
                                          <span class="name"> {{it.name}}</span>
                                          <span class="description"> {{it.description}}</span>
                                    </div>
                                    <img
                                          class="mark"
                                          src="/@/assets/icon_right.svg"
                                          alt="icon_right"
                                    >
                              </router-link>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script lang='ts' src='./index.ts'></script>

<style lang="less" scoped>
@import './index.less';
</style>
