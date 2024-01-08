<template>
    <div class="flex flex-col max-w-screen overflow-x-hidden">
        <div class="h-[3rem] justify-center items-center">
          <HeaderComponent />
        </div>
        <div class="drawer lg:drawer-open mt-[30px]">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content p-4">
            <slot></slot>
          </div>
          <div class="drawer-side">
            <SideComponent />
          </div>
        </div>
        <FooterComponent />
      </div >
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import SideComponent from './SideComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    components: {
        HeaderComponent,
        SideComponent,
        FooterComponent
    }
}
</script>