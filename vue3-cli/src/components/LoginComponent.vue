<template>
    <section class="bg-gray-100 dark:bg-gray-900 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 rounded">
            <div class="w-[30rem] bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-[7rem]">
                <h1 class='text-2xl mb-8 font-bold text-blue-600 text-center'>HaioNNet</h1>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" v-model="companyID" name="companyID" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company ID</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" v-model="userID" name="userID" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">임직원 ID</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="password" type="password" name="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">비밀번호</label>
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">임직원 ID 기억하기</label>
                </div>
                <button @click="login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">로그인</button>                
                <div class='flex flex-rap mt-4 justify-center items-center'>
                    <a target="_blank" href="\" class="text-xs text-center mr-2 hover:text-blue-600">비밀번호 찾기</a>
                    <span class="text-xs mr-2">|</span>
                    <a target="_blank" href="\" class="text-xs text-center mr-2 hover:text-blue-600"> 아이디 찾기</a>
                    <span class="text-xs mr-2">|</span>
                    <a target="_blank" href="\" class="text-xs text-center mr-2 hover:text-blue-600"> 회원가입</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                companyID: '',
                userID: '',
                password: '',
            };
        },

        methods: {
        ...mapActions(['handleLogin']),
        login() {
        const loginData = {
            cmpycd: this.companyID,
            userid: this.userID,
            pw: this.password,
        };
        this.handleLogin(loginData);
        }
    }        
        // methods: {
        //     handleLogin() {
        //         const loginData = {
        //             cmpycd: this.companyID,
        //             userid: this.userID,
        //             pw: this.password,
        //         };

        //         axios.post('http://localhost:8080/api/login', loginData, { withCredentials: true })
        //             .then(response => {
        //                 console.log('Login Successful:', response.data);
        //                 router.push('/')
        //                 // 로그인 후 처리할 작업을 여기에 추가
        //             })
        //             .catch(error => {
        //                 console.error('Error during login:', error);
        //             });
        //     },           
        // }        
    }
</script>
<style scoped>
</style>