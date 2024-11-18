<template>
   <div  class="container"> 
     <div class="row mt-5" >
        <div class="col-8 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 p-2"  :key="job" v-for="job in $store.state.jobs" >
            <div class="card shadow-sm pt-4" >
               <div class="card-img-top" style="width:40%; height: 100px; background-size:cover; border-radius: 50%;margin: auto !important;" :style="{background:'no-repeat center url('+job.img+')'}"></div>
                 <div class="card-body">
                    <h5 class="card-title"> {{job.name}}</h5>
                     <p class="" >countery : {{job.country}}</p>
                     <p class="">age {{job.age}}</p>
                     <p class="">total participants : {{job.countPartic}}</p>
                     <p class="">total shier : {{job.countliks}}</p>
                     <p class="">date : {{job.date}}</p>

                     <!-- <div class="card-text" v-bind:key="skill" v-for="skill in job.skills">
                       <p>{{skill}}</p>
                       </div> 
                         -->
                      <button class="btn btn-warning col-8 text-light" @click=" Applay(job.id)"> view </button>
                </div>
            </div>
        </div>
    </div> 
  </div>
</template>
<script>
export default {
    props:["name","price","img","skills","applecans","salary"],
     methods:{
     Applay(id){
       this.$router.push('/apple/'+id);
      }
    
 }
};
</script>
<style>
card-img-top {
  background-size: cover;
}
.card{
  border-radius: 40px !important;

}

</style>