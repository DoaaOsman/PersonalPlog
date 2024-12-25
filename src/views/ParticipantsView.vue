<template>
 <div  class="container pt-4">
  <div class="row m-auto align-items-baseline">
  <div class="col-4 col-md-2">
    
             <div class="accordion" id="y">
                <div class="accordion-item border-0">
                    <div class="accordion-header">
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#prices"> filter </button>
                    </div>
                    <div id="prices" class="collapse accordion-collapse w-25" data-bs-parent="#y">
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
       <input type="search" class="form-control  m-auto p-1 center" placeholder=" Search Hear with title..." v-model="search">
    </div>
    <div class="col-2" >  <router-link to="/ThreadView"   data-bs-toggle="modal" href="#AddCommet" role="button" class="btn w-100">+ </router-link></div>
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
          <div class=" shadow-sm rounded-3 px-md-6 w-100 mb-5" :key="person" v-for="(person , index) in filtredSearch"> 
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
                      <a href="#"  class="col-3">    
                        <i  class="bi bi-heart"  v-if="$store.state.liks==false" @click="$store.state.liks=true"></i>
                        <i class="bi bi-heart-fill "  v-else  @click="$store.state.liks=false"></i>  {{person.participints[person.participints.length-1].liks}}
                      </a>
                      <a class="col-3" role="button" @click="(this.AddNewComent=true) && (this.indexParticipant=index)"> <i class="bi bi-chat-text me-3"></i>comment</a>
                      <a href="#"  class="col-3" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">   <i class="bi bi-share me-3"></i> share</a>
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
                    <a href="https://wa.me/qr/JIMR76I4AOLKO1"  class="col-3 text-dark">  <i class="bi bi-whatsapp"></i> </a>
                    <a href="https://www.facebook.com/profile.php?idL"  class="col-3 text-dark">    <i class="bi bi-facebook"></i> </a>
                    <a href="https://telegram.org/dl"  class="col-3 text-dark">  <i class="bi bi-instagram"></i> </a>
                    <a href="https://www.instagram.com/dedy_osman/profilecard/?igsh=MWRkcXYzOHhjcHZ3aA=="  class="col-3 text-dark">  <i class="bi bi-telegram"></i> </a>

                   </div>
       </div>
       
    </div>
  </div>
</div> 
               </div>
             <hr>
             <div class="row comments" :key="comment" v-for="comment  in  person.participints[person.participints.length-1].comments">
                <div class="col-12 d-flex p-2">
                  <div class="col-3" >
                    <div style=' background : center;background-size:cover;  width:80px; height:80px; border-radius:50% ' class="img-thumbnail m-auto pb-2" alt="prophil"></div>
                      <small>{{comment.name}}</small>
                      {{ comments }}
                 </div>
                      <div class="col-8 float-left">
                       <p>{{comment.body}}</p>
                         <div >
                     <a href="#form"> <i class="bi bi-chat-text text-dark me-3" ></i></a>
                     <a href="#">    <i class="bi bi-heart text-dark me-3"     ></i></a>
                     <a href="#">   <i class="bi bi-share text-dark me-3"   ></i></a>
                  </div>
                      </div>
                    
                </div>
                    </div>
                  <!-- new comment -->
                     

                  <form class="row pt-3" v-show="this.AddNewComent==true" id="form" @submit.prevent="person.participints[person.participints.length-1].comments.push({name:name,age:age,title:title,body:body,liks:0});name='';age='';title='';body='' ,AddNewComent=false">
                    <div class="col-3" >
                    <div style=' background : center;background-size:cover;  width:80px; height:80px; border-radius:50% ' class="img-thumbnail m-auto pb-2" alt="prophil"></div>            
                       <p>{{ this.name }}</p>                  
                    </div>
                    <div class="col-8 float-left">
                        <div class="mb-3 ">
                        <input type="text" class="form-control" placeholder="write comment" name="body" v-model="body" required>
                       
                </div> 
                    </div>  
            </form>

                   
     <!-- add comment -->
      <div class="modal fade" id="AddCommet" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">Login </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style=" justify-items:center">
            <router-link to="/loginPage"  class="btn w-75 d-block m-2" >Login</router-link>
            <router-link to="/loginPage"  @click="$store.state.activeTab='register'" class="btn w-75 d-block m-2">Create an account</router-link>
          </div>
            <div class="modal-footer">
              <router-link  to="/ThreadView" class="btn">Regist as a Guest</router-link>
            </div>
          </div>
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
                   name:'giste',
                    age:55,
                    title:null,
                    body:'',
                search:'',
                indexParticipant:null,
               NewPerson:{name:'guist' ,age:this.age,body:this.body},
               AddNewComent:false,
             }
            },
       computed:{
        filtredSearch() {
        let self = this;
        console.log(this.$store.state.persons)
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
      z-index: 10;
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
.comments {
     border-bottom: 1px solid #80808017;
}
form {
    width: 100%;
    display: flex;
    align-items: self-start;
    justify-content: center;
     flex-direction: row !important;
     position: relative !important;
}
.modal-backdrop.show {
    opacity: 0;
    width: 0;
    height: 0;
}
</style>