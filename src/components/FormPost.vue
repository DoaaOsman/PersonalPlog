<template >
    
    <form class="form w-50 m-auto dark" id="form" @submit.prevent=" persons.push({name:name,age:ag,title:titl,sub:su ,jope:jop});name='';ag='';titl='';su='' ;jop=''">
                   <h4>Edit Comment</h4>
               <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Name" name="name" v-model="name" required>
                  <label class="text-dark"> <span class="bi bi-person-circle mx-2"></span>Name</label></div>
                  <div class="form-floating mb-3 mt-3">
                    <input type="number" class="form-control"  placeholder="Age" v-model="age" required>
                      <label class="text-dark">Age</label></div>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Description or Jope" name="titel" v-model="jop">
                  <label class="text-dark">Description</label></div>
                    <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Titel" name="titel" v-model="title" required>
                  <label class="text-dark">Titel</label></div>
                        <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Subjec" name="subjec" v-model="su" required>
                  <label class="text-dark">Subjec</label></div>
                   <div class="form-floating me-auto w-25 float-star">
                       <button class="btn btn-outline-warning text-dark text-center mb-5 btn1" value="submet" >Submet</button>
                  </div>
            </form>
</template>
 