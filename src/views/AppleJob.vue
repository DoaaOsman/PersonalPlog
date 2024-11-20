<template>
 
    <div  class="container">
      
      <div class="row d-flex flex-wrap" style="align-content: flex-start !important">
          <div class=" shadow-sm rounded-3 px-md-6 dark " style="padding: 15px ;"> 
              <div class="row"  style="height: 80vh;">
              <div class="col-12 col-md-4  border-end border-0 border-warning border-sd-0 pt-3 ">
                     <div style='background :url(96.jpg) center;background-size:cover;  width:200px; height:200px; border-radius:20% ' class="img-thumbnail m-auto pb-2 d-flex justify-content-end " alt="prophil">
                      <div class="d-flex align-self-end p-2"><i class="bi bi-pencil-fill"></i></div>
                     </div>
                     <input type="text" name="name" id="" v-model="name" class="form-control  mt-3 p-1 center"> 
              
                 <div class=" p-3  float-left">
                    <div class="d-flex align-items-start flex-column">
                      <p> Age : {{selectedTodo.age}}  yers  </p>
                      <p> Country : sudan {{selectedTodo.jope}} </p>
                      <p>participants : 28 {{selectedTodo.title}}</p>
                      <p> {{selectedTodo.sub}}</p>
                      <a href="#">  <i class="bi bi-heart text-dark"  style="font-size: 28px"> 50 lik </i></a> <br>
                      <a href="#"> <i class="bi bi-share text-dark "   style="font-size: 28px"> 100 shares</i></a>
                      </div> 
                  
                </div>
                        
                   </div>
                   <div class="col-12 col-md-8 p-3  float-left d-flex flex-wrap">
                    <div class="col-5 d-flex align-items-start flex-column h-50" :key="n" v-for="n in 4">
           <div class="shadow-sm rounded-3 px-md-6" style="padding: 15px ;"> 
               <h5>name the participants</h5>
               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
               <button class="btn col-5">Delet</button>
               <button class="btn col-5">Edit</button>
               <button class="btn col-5">Share</button>

              </div>
                    </div> 
                    </div>
                
             </div>     
                  </div>
            </div>
        

<!-- 
 <form class="bg-light p-3 m-1 rounded" @submit.prevent="    
    this.$store.state.todos.applecans.push({name:name,id:this.$store.state.jobs.applecans[this.$store.state.jobs.applecans.length-1].id+1})
" >
     <div class="mb-1 mb-sm-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" v-model="nam">
    </div>
    <div class="mb-1 mb-sm-3">
      <label class="form-label">Age</label>
      <input type="number" class="form-control" >
    </div>
    <div class="mb-1 mb-sm-3">
      <label class="form-label"> skills</label>
      <input type="text" class="form-control" >
    </div>
     <div class="mb-1 mb-sm-3">
      <label class="form-label">Decribtion</label>
      <textarea   class="form-control" ></textarea>
    </div>
    <button class="btn btn-success" @click="editToDo()">Edit</button>
 </form> -->
    </div>
</template>
<script> 
export default {

   data(){
    return {
       
       selectedTodo:[],
       name:'Doaa Osman',
        img:this.img,
      skill:this.skill,
    }
  },
  methods:{
     
        
    }
}

</script>
 
<style>
button{
margin: 3px;
  transition: all .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
 }
button:hover { 
    color: #fff !important;
    outline: 0;
    transform: scaleX(1.2);
    transition: all .15s ease-in-out;
     }
    a {
      text-decoration: none;
    }
</style>