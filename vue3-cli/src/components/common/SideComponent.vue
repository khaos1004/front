<template>
  <label htmlFor="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
  <ul class="menu p-4 w-56 min-h-full bg-base-100 text-base-content">                                         
    <li v-for="group in sideMenu" :key="group.grpnm">
        <details>
          <summary>{{ group.grpnm }}</summary>
          <ul>
            <li v-for="program in group.programs" :key="program">
              <a href="#">{{ program }}</a>
            </li>
          </ul>
        </details>
      </li>   
  </ul>
</template>
<script>
import { ref, onMounted, computed, watchEffect  } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const rawData = ref([]); // API로부터 받은 원본 데이터

    // 그룹화된 데이터를 계산된 속성으로 선언합니다.
    const sideMenu = computed(() => {
      const grouped = {};
      rawData.value.forEach(item => {
        if (!grouped[item.grpcd]) {
          grouped[item.grpcd] = {
            grpnm: item.grpnm,
            programs: []
          };
        }
        grouped[item.grpcd].programs.push(item.pgmnm);
      });
      return Object.values(grouped);
    });
    watchEffect(() => {
      console.log(sideMenu.value);
    });

    onMounted(() => {
      axios.post('http://localhost:8080/api/sidemenu')
        .then(response => {
          rawData.value = response.data; // 여기서 원본 데이터를 업데이트합니다.
          console.log()
        })
        .catch(error => {
          console.error('Error loading side menu:', error);
        });
    });

    return {
      sideMenu // 그룹화된 데이터를 반환합니다.
    };
  }
};
</script>