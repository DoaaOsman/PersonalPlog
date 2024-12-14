<template>
 <div  class="container pt-4">
  <div class="row m-auto align-items-baseline">
  <div class="col-4 col-md-2">
    
             <div class="accordion" id="y">
                <div class="accordion-item border-0">
                    <div class="accordion-header">
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#prices"> filter  {{  $store.state.TheType }} </button>
                    </div>
                    <div id="prices" class="collapse accordion-collapse" data-bs-parent="#y">
                        <div class="list-group">
                            <a class="list-group-item list-group-item-action" :class="$store.state.TheType=='' ? 'active':''" href="#" @click="$store.state.TheType=''">All</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.TheType=='drama'  ? 'active':''" href="#" @click="$store.state.TheType='drama'">drama</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.TheType=='literary'  ?'active':''" href="#" @click="$store.state.TheType='literary'">literary</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.TheType=='Religious'  ?'active':''" href="#" @click="$store.state.TheType='Religious'">Religious</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.TheType=='other' ?'active':''" href="#" @click="$store.state.TheType='other'">other</a>
                        </div>
                    </div>
                 </div>
        </div>

  </div>
    <div class="col-6 mb-5">
       <input type="search" class="form-control  m-auto p-1 center" placeholder=" Search Hear ..." v-model="search">
    </div>
    <div class="col-2">  <router-link to="/ThreadView" class="btn w-100">+ </router-link></div>
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
          <div class=" shadow-sm rounded-3 px-md-6 w-100" style="padding: 15px ;"  :key="person" v-for="person in filtredSearch"> 
              <div class="row">
              <div class="col-12 col-md-4  border-end border-0 border-warning border-sd-0 pt-3 ">
                     <div style='  background : center;background-size:cover;  width:100px; height:100px; border-radius:50% ' class="img-thumbnail m-auto pb-2" alt="prophil"></div>
                      <h6>{{person.name}}</h6>
                   </div>
                   <div class="col-12 col-md-8 p-3  float-left">
                      <h5>{{person.participints[person.participints.length-1].title}}  </h5>
                      <p>{{person.participints[person.participints.length-1].body}}</p>
                       
                       </div>
          <!-- row comment liks share -->
                  <div class="row">
                      <a href="#"  class="col-3">    <i class="bi bi-heart text-dark" ></i> {{person.participints[person.participints.length-1].liks}}</a>
                      <a href="#form" class="col-3"> <i class="bi bi-chat-text text-dark me-3"></i>comment</a>
                      <a href="#"  class="col-3" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">   <i class="bi bi-share text-dark me-3"></i></a>
                  </div>
 <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-6 p-0 border-0" id="exampleModalToggleLabel">Share With ...</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
                    <a href="#"  class="col-3">    <i class="bi bi-chat-text text-dark me-3"   style="font-size: 30px " ></i></a>
                    <a href="#"  class="col-3">    <i class="bi bi-heart text-dark"            style="font-size: 28px"></i></a>
                    <a href="#"  class="col-3">    <i class="bi bi-share text-dark me-3"       style="font-size: 28px"></i></a>
                  </div>
       </div>
       
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
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
              search:'',
             }
            },
       computed:{
       
        filtredSearch() {
        let self = this;
         return this.$store.state.persons.filter((person) =>
        person?.participints?.some((item) =>
          item?.title?.toLowerCase().includes(self.search?.toLowerCase()) || item?.type == this.$store.state.TheType
        )
      )}

      }
      

};
</script>
<style scoped>
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
    background-color: #ffffff;
    }
div#prices {
      position: absolute;
    }
    a.col-3 {
     color: #ffc925; 
}

a.col-3:hover {
     color: #fff;
    background: #ffc925;
    border-radius: 20px;
}
 .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ffc107;
    border-color: #ffc107;
}
</style>