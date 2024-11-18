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
                <div>
                  <p>
                         Age : {{selectedTodo.age}}  yers 
                         </p>
                        <p>
                          Country : sudan {{selectedTodo.jope}}
                        </p>
                </div>
                        
                   </div>
                   <div class="col-12 col-md-8 p-3  float-left">
                    <div class="d-flex align-items-start flex-column">
                      <p>participants : 28 {{selectedTodo.title}}</p>
                      <p> {{selectedTodo.sub}}</p>
                      <a href="#">  <i class="bi bi-heart text-dark me-3"  style="font-size: 28px"> 50 lik </i></a> <br>
                      <a href="#"> <i class="bi bi-share text-dark me-3"   style="font-size: 28px"> 100 shares</i></a>
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
       name:this.name,
       price:this.price,
       img:this.img,
      skill:this.skill,
    }
  },
  methods:{
     
        editToDo(){
        var index = this.$store.state.jobs.findIndex(a=>a.id==this.$route.jobs.id)
        this.$store.state.jobs[index]=this.selectedTodo
        console.log(this.selectedTodo)
        console.log("hu")
        this.$store.state.jobs.push({name:this.name,age:this.age,skill:this.skill,Decribtion:this.descr,id:this.$store.state.jobs.applecans[this.$store.state.jobs.applecans.length-1].id+1})

       }
    }
}

</script>
 
<style>
button{

  transition: all .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
 }
button:hover { 
    outline: 0;
    transform: scaleX(1.2);
    transition: all .15s ease-in-out;

    }
    a {
      text-decoration: none;
    }
</style>