<template>
 
    
<section class="container">

<form class="bg-light py-1 py-sm-3 px-3 px-sm-5" novalidate action="reg.php" method="get">
    <div class="mb-1 mb-sm-3">
        <label class="form-label">Username</label>
        <input class="form-control" type="text" required>
        <div class="valid-feedback">Good</div>
        <div class="invalid-feedback">Please fill this field</div>
    </div>
    <div class="mb-1 mb-sm-3">
        <label class="form-label">Email</label>
        <input class="form-control" type="email" required>
        <div class="valid-feedback">Good</div>
        <div class="invalid-feedback">Write valid email</div>
    </div>
    <div class="mb-1 mb-sm-3">
        <label class="form-label">Password</label>
        <input class="form-control" type="password" required>
        <div class="valid-feedback">Good</div>
        <div class="invalid-feedback">Please fill this field</div>
    </div>
    <button class="btn btn-success">Login</button>
</form>
</section>
</template>

<script>
export default {
     
};
</script>