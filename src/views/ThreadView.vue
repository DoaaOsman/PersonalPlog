<template>
   <div  class="container">
    <div class="col-4 col-md-2">
    
    <div class="accordion" id="kind">
       <div class="accordion-item border-0">
           <div class="accordion-header">
               <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#prices">Kind</button>
           </div>
           <div id="prices" class="collapse accordion-collapse" data-bs-parent="#kind">
               <div class="list-group">
                    <a class="list-group-item list-group-item-action" :class="min==0 && max==30000 ? 'active':''" href="#" @click="min=0;max=30000">drama</a>
                   <a class="list-group-item list-group-item-action" :class="min==30000?'active':''" href="#" @click="min=30000;max=60000">literary</a>
                   <a class="list-group-item list-group-item-action" :class="min==60000?'active':''" href="#" @click="min=60000;max=90000">Religious</a>
                   <a class="list-group-item list-group-item-action" :class="min==90000?'active':''" href="#" @click="min=90000;max=99999999999">other</a>
               </div>
           </div>
        </div>
</div>

</div>
    <div class="col-7 m-auto">
   
      <form class="form w-50 m-auto shadow-lg h-75 p-5" id="form" >
                   <h4>add participant</h4> 
                    <div class="form-floating  mt-3 w-100">
                    <input type="text" class="form-control" placeholder="Titel" name="titel" v-model="title" required>
                  <label class="text-dark">Titel</label></div>
                        <div class="form-floating mb-3 mt-3 w-100 h-75">
                    <textarea type="text" class="form-control h-75" placeholder="Subjec" name="body" cols="100" rows="500" v-model="body" required></textarea>
                  <label class="text-dark">body</label></div>
                   <div class="form-floating me-auto w-100 float-star">
                    <button type="button" class="btn col-5" data-bs-toggle="modal" data-bs-target="#newParticipant">
                      Share</button>                    </div>
            </form>
<!-- Modal -->
<div class="modal fade" id="newParticipant" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newParticipantLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="newParticipantLabel">confirmation message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Do you want to publish ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Ignorance</button>
        <router-link to="/Participants"  @click="$store.state.persons.push({name:name,participints:newParticipants}).$store.state.persons[$store.state.persons.length-1].participints.push({title:title,body:body,type:type,liks:0});name='';title='';body='' ;type=''" type="button" class="btn">Share</router-link>
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
       name:'Giste',
       title:'',
       body:'',
       type:'',
       newParticipants:{id:1 ,title:this.title,body:this.body,liks:0 ,type:this.type,
              comments:[{id:1 ,name:"doaa" , body:'work any wary' ,liks:0}]
}
 }}}
</script>
 
<style>
.modal-backdrop.show {
    opacity: 0;
    width: 0;
    height: 0;
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
      width: 25%;

    }
    
 .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ffc107;
    border-color: #ffc107;
}
</style>