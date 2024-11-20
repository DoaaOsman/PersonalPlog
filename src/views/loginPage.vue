<template>
    <section class="container">
        <div class="row w-100 mt-5" >
        <div class="col-8 col-sm-10 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto d-flex  justify-content-center p-2 ">
            <transition name="form ">
        <form class="bg-light p-3 p-md-4 col-7 col-md-4 h-50" v-if="activeTab=='login'">
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control">
            </div>
          <a href="#" class="nav-link text-dark" @click="activeTab='register'">create an account ?</a>

            <button class="btn col-5">Login</button>
        </form>
    </transition>

    <transition name="form">
        <form class="bg-light p-4 p-md-4 col-7 col-md-4 shadow-sm" v-if="activeTab=='register'">

            <div class="mb-1 mb-sm-3">
                <label class="form-label">First Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control">
            </div>
            
         <a href="#" class="nav-link text-dark" @click="activeTab='login'">I have an account</a>

            <button class="btn col-5">Sign Up</button>
        </form>
    </transition>
    </div>
    </div>
</section>
</template>
<script>
 export default({
    data(){
          return {
              activeTab:'login'
          }
        } 
})
</script>

<style>
form{
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.form-enter-active,.form-leave-active{
    transition: all 2s;
}
.form-enter-from{
    transform: translate(-100%,100%) ;
    opacity: 0;
}
.form-leave-to{
    transform: translate(100%,100%) ;
    opacity: 0;
}
.btn {
    border: #ffc107 solid 1px;
    color: #fff;
    background: black;
    border-radius: 15px;
}
.bg-light {
    background-color: #fafaf8!important;
    border: #ffc107 solid 1px!important;
    border-radius: 20px;
}
</style>