<template>
    <div class="flex flex-col w-full border-opacity-50">
        <div class="grid h-12 bg-base-300 rounded-box items-center text-center">
            <div class="flex justify-around items-center">
                <label class="mr-2 items-center text-sm space-x-2 w-[22rem]">요청부서
                    <input v-model="deptcd" name="deptcd" class="w-12 mr-2 text-center" />                    
                    <input v-model="deptnm" name="deptnm" class="text-center w-[6.5rem] mr-2" />    
                    <button class="btn rounded-box btn-xs btn-active btn-ghost h-2 text-sm">찾기</button>   
                </label>
                <label class="mr-2 items-center text-sm space-x-2 w-[22rem]">요청번호
                    <input v-model="reqym" name="reqym" type="text" class="w-16 mr-2 text-center" placeholder=""/>
                    <input v-model="reqno" name="REQNO" value="" class="w-12 mr-2" placeholder="" />      
                    <kbd class="kbd btn-xs mr-2">◀︎</kbd>
                    <kbd class="kbd btn-xs">▶︎</kbd>                               
                </label>  
                <div class="w-[22rem]">
                    <button class="btn rounded-box btn-xs btn-active btn-ghost h-2 text-sm space-x-2 w-[5rem]">검색</button>                 
                </div>                
            </div>            
        </div>

        <div class="py-2"></div>

        <div class="grid h-20 card bg-base-300 rounded-box items-center text-center">
            <div class="flex justify-around items-center">
                <label class="mr-2 items-center text-sm space-x-2 w-[22rem]">요청부서
                    <input v-model="deptcd" name="deptcd" class="w-12 mr-2 text-center" />
                    <input v-model="deptnm" name="deptnm" class="text-center w-[6.5rem] mr-2" />    
                    <button class="btn rounded-box btn-xs btn-active btn-ghost h-2 text-sm">찾기</button>   
                </label>
                <label class="mr-2 items-center text-sm space-x-2 w-[22rem] pr-[4.25rem]">요청번호
                    <input v-model="reqym" name="reqym" type="text" class="text-center w-16 mr-2" />
                    <input v-model="reqno" class="w-12 mr-2" />                                                 
                </label>  
                <label class="mr-2 items-center text-sm space-x-2 w-[22rem]">요청일자                                                        
                    <input v-model="reqymd" name="reqymd" type="text" class="w-20 mr-2 text-center" placeholder=""/>    
                </label>                         
            </div>      
            <div class="flex justify-around items-center">
                <label class="mr-2 items-center text-center text-sm space-x-2 w-[22rem] pr-[7.15rem]">구매요청
                    <input v-model="usernm" name="usernm" class="w-12 mr-2 text-center">                                          
                    <button class="btn rounded-box btn-xs btn-active btn-ghost h-2 text-sm">찾기</button>   
                </label>
                <label class=" mr-2 items-center text-sm space-x-2 w-[22rem] pr-[7.25rem]">입고요청                    
                    <input v-model="inymd" name="inymd" type="text" class="w-20 mr-2 text-center" />    
                </label>  
                <label class="items-center text-sm space-x-2 w-[22rem] pl-2">특기사항
                    <input v-model="remark" name="remark" type="text" class="w-[6.50rem] mr-2" placeholder=""/>                                     
                </label>              
            </div>             
        </div>

        <table class="min-w-full table-auto border-collapse mt-2 border-slate-800 table rounded-sm">
            <thead>
                <tr class="text-center">
                    <th class="border border-slate-300 w-8">-</th>
                    <th class="border border-slate-300 w-40">품목명</th>
                    <th class="border border-slate-300 w-24">규격</th>
                    <th class="border border-slate-300 w-32">단위</th>
                    <th class="border border-slate-300 w-32">재고</th>
                    <th class="border border-slate-300 w-32">수량</th>
                    <th class="border border-slate-300 w-32">매입단가</th>
                    <th class="border border-slate-300 w-32">금액</th>
                    <th class="border border-slate-300 w-32">매입거래처명</th>
                    <th class="border border-slate-300 w-32">발주번호</th>
                    <th class="border border-slate-300 w-8">
                        <button @click="addRow" class=" px-2 bg-blue-500 text-white rounded">
                            +
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody class='text-right'>
                    <tr v-for="(row, index) in rows" :key="row.id" class="items-center justify-center">
                        <td name="UPKIND" class="border border-slate-300 text-center">U</td>
                        <td class="border border-slate-300">
                            <div class="flex space-x-1">
                                <input name="ITEMCD" class="w-[3rem] mr-2 border-2" value=""  type="text" />
                                <input name="ITEMNM" class="w-[3rem] mr-2 border-2" value=""  type="text" />
                                <button class="">검색</button>
                            </div>
                        </td>
                        <td name="ITSIZE" class="border border-slate-300"><input value="" type="text" /></td>
                        <td name="UNIT" class="border border-slate-300"></td>
                        <td name="JQTY" class="border border-slate-300"></td>
                        <td name="REQQTY" class="border border-slate-300"></td>
                        <td name="IMPRICE" class="border border-slate-300"></td>
                        <td name="REQAMT" class="border border-slate-300"></td>
                        <td name="SCUSTNM" class="border border-slate-300"></td>
                        <td class="border border-slate-300 items-center justify-center flex text-center">
                            <input name="BALYM" type="text" class='w-[3rem] text-center border-2' />-
                            <input name="BALNO" type="text" class='w-[3rem] border-2 text-center' />
                        </td>
                        <td class="border border-slate-300 text-center">
                            <button @click="deleteRow(index)" class="bg-red-500 text-white px-2 rounded">
                                -
                            </button>
                        </td>                        
                    </tr>            
            </tbody>
        </table>
        <td class="flex items-center justify-center mt-8">
            <button id="add" @click="purchaseAdd" class="btn mr-2" value="A0">신규</button>
            <button @click="purchaseDel" class="btn"  value="D0">삭제</button>
        </td>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {DEL_PROC_D0} from '@/services/PurchaseRequest'
import {ADD_PROC_A0} from '@/services/PurchaseRequest'

export default {
  name: 'DateAndMonthPicker',
  computed: {
    ...mapState(['user']),
    
    currentMonthDay() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    currentMonth() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      return `${year}-${month}`;
    }
  },

  data() {
    return {
      rows: [ { 품목명: '', 규격: '', 단위: '', 재고: '', 수량: '', 매입단가: '', 금액: '', 매입거래처명: '', 발주번호: '' }],
    //   deptcd: this.user ? this.user.deptcd : '',
    iCMPYCD:'',  
      deptcd: '',
      deptnm: '',
      reqno:  '',
      usernm: '',
      remark: '',
      reqym: '',
      reqymd: '',
      inymd: '',
      reqgb: '',
      req_userid:'',
      updemp: ''  // UPDEMP와 매핑
    };
  },
  methods: {
    
    addRow() {
      this.rows.push({ id: Date.now(), 품목명: '', 규격: 'dsa', 단위: '', 재고: '', 수량: '', 매입단가: '', 금액: '', 매입거래처명: '', 발주번호: '' });
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    },

    async purchaseAdd(){
        try {
        const formattedReqym = this.reqym.replace(/-/g, '');
        const formattedInymd = this.inymd.replace(/-/g, '');
        const formattedReqymd = this.reqymd.replace(/-/g, '');

            const actkind = document.querySelector('#add');
            console.log(actkind.value);
            
            const data = {
                iCMPYCD: String(this.user.cmpycd),             
                iREQYM: formattedReqym,                                
                iDEPTCD: String(this.user.deptcd),
                iINYMD: formattedInymd,
                iREQYMD: formattedReqymd,
                iREMARK: this.remark,
                iREQGB: '',
                iREQ_USERID: String(this.user.userid),
                iUPDEMP: ''

                // iACTKIND: 'A0', 
                // iCMPYCD:'HAIONNET',             
                // iREQYM:'202311',
                // iDEPTCD: '5000',        
                // iINYMD: '20240108',
                // iREQYMD: '20240108',
                // iREMARK: '',
                // iREQGB: '',
                // iREQ_USERID: 'soo20987',
                // iUPDEMP: ''
            }
                console.log(data);
                const response = await ADD_PROC_A0(data);
                console.log(response);
                console.log("delete:" +  response)
            } catch (error) {
            console.log(error.response)
        }
    },

    async purchaseDel(){
        try {
        const formattedReqym = this.reqym.replace(/-/g, '');
        // const formattedInymd = this.inymd.replace(/-/g, '');
        // const formattedReqymd = this.reqymd.replace(/-/g, '');

            const data = {
                iCMPYCD: String(this.user.cmpycd),             
                iREQYM: formattedReqym,
                iREQNO: '0001'
            }
                console.log(data);
                const response = await DEL_PROC_D0(data);
                console.log(response);
                console.log("delete:" +  response)
            } catch (error) {
            console.log(error.response)
        }
    }    
  },

  mounted() {
    console.log("User from Vuex store:", this.user.userid);
    this.cmpycd = this.user?.cmpycd || '';
    this.deptcd = this.user?.deptcd || '';
    this.deptnm = this.user?.deptnm || '';
    this.reqno = this.reqno?.reqno || '';
    this.usernm = this.user?.usernm || '';
    this.remark = this.remark?.remark || '';
    this.reqym = this.currentMonth; // 계산된 속성에서 현재 월을 가져옵니다.
    this.reqymd = this.currentMonthDay; // 계산된 속성에서 현재 월을 가져옵니다.
    this.inymd = this.currentMonthDay; // 계산된 속성에서 현재 월을 가져옵니다.
  },

  /**
   *  프로시저 호출
   */ 
//   async created() {
//     try {
//         const formattedReqym = this.reqym.replace(/-/g, '');
//         const formattedInymd = this.inymd.replace(/-/g, '');
//         const formattedReqymd = this.reqymd.replace(/-/g, '');

//       const data = {
//         iCMPYCD: this.user.cmpycd,             
//         iREQYM: formattedReqym,
//         iREQNO: "ewqa",
//         iDEPTCD: null,  
//         iINYMD: formattedInymd,
//         iREQYMD: formattedReqymd,
//         iREMARK: null,
//         iREQGB: null,
//         iREQ_USERID: null,
//         iUPDEMP: null
//       }      

//       const response = await DEL_PROC_D0(data);
//       console.log("insert:" +  response.data)

      
//     } catch (error) {
//       console.log(error.response)
//     }
//   }
  
};
</script>