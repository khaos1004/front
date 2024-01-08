<template>
    <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="구매요청" checked/>
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6"><TabScreen /></div>
      
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
      </div>
  </template>
  
  <script>
    import TabScreen from './TabScreen';

    export default {
    components: {
        TabScreen,
    }
}
  </script>