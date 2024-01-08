<!-- eslint-disable no-unused-vars -->
<template>
    <Rootlayout>
        <TabComponent />
    </Rootlayout>
</template>

<script>
import Rootlayout from '@/components/common/RootLayout.vue';
import TabComponent from '@/components/tabs/TabComponent.vue';
import {mapState} from 'vuex'

export default {
    components: {
        Rootlayout,
        TabComponent
    },
    computed: {
    // 스토어의 상태를 계산된 속성으로 매핑
    ...mapState(['user'])
  }

}
</script>