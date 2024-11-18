<template>
    <section class="container">
    <ul class="nav nav-tabs">
        <li class="nav-item"><a href="#" class="nav-link" @click="activeTab='login'">Login</a></li>
        <li class="nav-item"><a href="#" class="nav-link" @click="activeTab='register'">Register</a></li>
    </ul>
    <transition name="form">
        <form class="bg-light p-2 p-md-4" v-if="activeTab=='login'">
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control">
            </div>
            <button class="btn btn-success">Login</button>
        </form>
    </transition>

    <transition name="form">
        <form class="bg-light p-2 p-md-4" v-if="activeTab=='register'">

            <div class="mb-1 mb-sm-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-1 mb-sm-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control">
            </div>
            <button class="btn btn-success">Sign Up</button>
        </form>
    </transition>
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
}
.form-enter-active,.form-leave-active{
    transition: all 5s;
}
.form-enter-from{
    transform: translate(-100%,100%) ;
    opacity: 0;
}
.form-leave-to{
    transform: translate(100%,100%) ;
    opacity: 0;
}

</style>