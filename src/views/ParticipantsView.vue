<template>
 <div  class="container pt-4">
  <div class="row m-auto align-items-baseline">
  <div class="col-4 col-md-2">
    
             <div class="accordion" id="y">
                <div class="accordion-item border-0">
                    <div class="accordion-header">
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#prices">Filter</button>
                    </div>
                    <div id="prices" class="collapse accordion-collapse" data-bs-parent="#y">
                        <div class="list-group">
                            <a class="list-group-item list-group-item-action" :class="min==0 && max==99999999999 ? 'active':''" href="#" @click="min=0;max=99999999999">All</a>
                            <a class="list-group-item list-group-item-action" :class="min==0 && max==30000 ? 'active':''" href="#" @click="min=0;max=30000">drama</a>
                            <a class="list-group-item list-group-item-action" :class="min==30000?'active':''" href="#" @click="min=30000;max=60000">literary</a>
                            <a class="list-group-item list-group-item-action" :class="min==60000?'active':''" href="#" @click="min=60000;max=90000">Religious</a>
                            <a class="list-group-item list-group-item-action" :class="min==90000?'active':''" href="#" @click="min=90000;max=99999999999">other</a>
                        </div>
                    </div>
                 </div>
        </div>

  </div>
    <div class="col-6 mb-5">
       <input type="search" class="form-control  m-auto p-1 center" placeholder=" Search Hear ..." v-model="search">
    </div>
    <div class="col-2">  <router-link to="/ThreadView" class="btn w-100">+ </router-link></div>
    <button class="btn text-dark w-25" @click="found">a</button>  

   </div>
 
        <div class="row align-items-flex-start h-100">
          <!-- sideNav  -->
      <div class="col-2 col-md-3 p-1 me-2">
       <div style="height: 80vh;">
          <div class="p-2 rounded mb-2 " style="color: white; background: black;" :key="TheType" v-for="TheType in $store.state.typeTheParticipats">
           <router-link to="/product/:{{TheType.name}}" class="side" style="color: #fff; font-size: small; text-decoration: none">{{TheType.name}}</router-link>
      </div>
      </div>
      </div>
      <!-- participants -->
       <div class="col-9 col-md-7 d-flex flex-wrap" style="align-content: flex-start !important">
          <div class=" shadow-sm rounded-3 px-md-6 w-100" style="padding: 15px ;"  :key="person" v-for="person in fuondSearch"> 
              <div class="row">
              <div class="col-12 col-md-4  border-end border-0 border-warning border-sd-0 pt-3 ">
                     <div style='  background : center;background-size:cover;  width:100px; height:100px; border-radius:50% ' class="img-thumbnail m-auto pb-2" alt="prophil"></div>
                      <h6>{{person.name}}</h6>
                   </div>
                   <div class="col-12 col-md-8 p-3  float-left">
                      <h5>{{person.participints[person.participints.length-1].title}}  </h5>
                      <p>{{person.participints[person.participints.length-1].body}}</p>
                       </div>
                  <div >
                    <a href="#form"> <i class="bi bi-chat-text text-dark me-3"   style="font-size: 30px "></i>+</a>
                     <a href="#">    <i class="bi bi-heart text-dark me-3"       style="font-size: 28px"></i> {{person.participints[0].liks }}</a>
                      <a href="#">   <i class="bi bi-share text-dark me-3"       style="font-size: 28px"></i></a>
                  </div>
              </div>
             <hr>
             <div class="row" :key="comment" v-for="comment in person.participints[person.participints.length-1].comments">
                 <div class="col-3" >
                    <div style=' background : center;background-size:cover;  width:80px; height:80px; border-radius:50% ' class="img-thumbnail m-auto pb-2" alt="prophil"></div>
                      <small>{{comment.name}}</small>
                 </div>
                      <div class="col-8 float-left">
                       <p>{{comment.body}}</p>
                      </div>
                      <div >
                     <a href="#form"> <i class="bi bi-chat-text text-dark me-3"   style="font-size: 30px "></i></a>
                     <a href="#">    <i class="bi bi-heart text-dark me-3"       style="font-size: 28px"></i></a>
                     <a href="#">   <i class="bi bi-share text-dark me-3"       style="font-size: 28px"></i></a>
                  </div>
                    </div>     
                  </div>
            </div>
        
       </div>
      </div>
  </template>

<script>
 
export default {
  data(){
        return {
            name:null,
              age:null,
              title:null,
              sup:null,
              search:' ',
             }
            },
       computed:{
        fuondSearch($data) {
             return this.$store.state.persons.filter((person)=>{
               person.participints.forEach((participint)=>{
               if(participint.title.toLowerCase().includes($data.search.toLowerCase())){
                console.log(participint)
              
                     return true 
                    }
            })
            })     
        },
      },

      methods:{
        found(){
          console.log(this.fuondSearch)
        }
      }

};
</script>
<style>
.form-control {
  border-radius: 20px;
  outline-color: white ;
}
.form-control:focus ,.accordion-button:focus{
    color: #212529;
    background-color: #fff;
    border-color: #d7d3c6;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(251 248 243);
}
.accordion-button:not(.collapsed) {
    color: #ffc107;
    background-color: #ffffff;}
    div#prices {
      position: absolute;
    }
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ffc107;
    border-color: #ffc107;
}
</style>