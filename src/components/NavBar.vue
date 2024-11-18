<template>
     <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style="background :#fff">
    <div class="container-fluid">
        <a class="navbar-brand">
            My<span style="color: #ffc107 !important;">W</span>ords
         </a>
        <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#sidenav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="my-collapse">
            <ul class="navbar-nav me-auto ">
                <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item"><router-link to="/ThreadView" class="nav-link">Threads</router-link></li> 
                <li class="nav-item"><router-link to="/Participants" class="nav-link">Participants</router-link></li>
                <li class="nav-item"><router-link to="/members" class="nav-link">members</router-link></li> 
                <li class="nav-item"><router-link to="/profile" class="nav-link">Profile</router-link></li>
                <li class="nav-item"><router-link to="/loginPage" class="nav-link">login</router-link></li> 
 
            </ul>
        </div>

    </div>
</nav>
<div class="offcanvas offcanvas-start" id="sidenav">
    <div class="offcanvas-header">
        <div class="offcanvas-title text-light">My<span>W</span>ords</div>
        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <div class="list-group list-group-flush">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item"><router-link to="/ThreadView" class="nav-link">Threads</router-link></li> 
                <li class="nav-item"><router-link to="/Participants" class="nav-link">Participants</router-link></li> 
                <li class="nav-item"><router-link to="/members" class="nav-link">members</router-link></li> 
                <li class="nav-item"><router-link to="/profile" class="nav-link">Profile</router-link></li> 
                <li class="nav-item"><router-link to="/loginPage" class="nav-link">login</router-link></li> 

            </ul>
        </div>
    </div>
</div>
</template>
<script> 
export default ({
     
})
</script>
<style scoped>
nav {
  padding: 3px;
}

 .nav-item {
   color: #000000;
}
  
 .nav-item :active , .nav-item :hover ,span{
    color: rgb(255 193 7) !important;
    } 
    .offcanvas-header{
        background:rgb(255 193 7) !important
    }
.navbar-light .navbar-toggler {
    color: rgb(255 193 119 / 7%);
    border-color: rgb(255 251 245);
}
</style>