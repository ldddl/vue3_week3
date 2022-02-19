
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const url = 'https://vue3-course-api.hexschool.io/v2';
const app = {
    data(){
        return {
            user:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        logIn(){
            console.log(this.user);
            console.log(`${url}/admin/signin`);

            axios.post(`${url}/admin/signin`,this.user)
                .then((result) => {
                    console.log(result);
                    // 取得token、expired
                    console.log(result.data.token);
                    const { token, expired } = result.data; // 解構方式取得 token, expired
                    document.cookie = `hexToken = ${ token }; expires = ${ new Date(expired) }`;
                    // 成功後，轉址                    
                    window.location.href = 'product.html';
                }).catch((err) => {
                    console.dir(err)
                });
        }
    },
    mounted() {
        
    },
}
createApp(app).mount('#app')