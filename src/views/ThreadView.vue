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
    <div class="col-9 m-auto">
    <textarea name="" cols="60" rows="20" placeholder="type here ..." v-model="body" class="p-2" style="border-radius: 20px;">
     
    </textarea>
     <!-- Button trigger modal -->
<button type="button" class="btn col-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Share</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">confirmation message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Do you want to publish ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Ignorance</button>
        <router-link to="/Participants" type="button" class="btn">Share</router-link>
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
       
        body:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit in ab architecto velit laborum asperiores, adipisci unde animi fuga.',
      
    }
  }
 }
</script>
 