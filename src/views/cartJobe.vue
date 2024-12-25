<template>
   <div  class="container"> 
     <div class="row m-auto align-items-baseline">
      <div class="accordion col-3" id="sort">
                <div class="accordion-item border-0">
                    <div class="accordion-header">
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#prices"> filter</button>
                    </div>
                    <div id="prices" class="collapse accordion-collapse w-25" data-bs-parent="#sort">
                        <div class="list-group">
                            <a class="list-group-item list-group-item-action" :class="$store.state.sortWith=='name' ? 'active':''" href="#" @click="$store.state.sortWith='name'">All</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.sortWith=='age'  ? 'active':''" href="#" @click="$store.state.sortWith='age'">By Age</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.sortWith=='Countery'  ?'active':''" href="#" @click="$store.state.sortWith='Countery'">Countery</a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.sortWith=='React'  ?'active':''" href="#" @click="$store.state.sortWith='React'">Most React </a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.sortWith=='Share'  ?'active':''" href="#" @click="$store.state.sortWith='Share'">Most Share </a>
                            <a class="list-group-item list-group-item-action" :class="$store.state.sortWith=='Date' ?'active':''" href="#" @click="$store.state.sortWith='Date'">Date</a>
                        </div>
                    </div>
                 </div>
        </div>

      <div class="col-6 mt-5">
       <input type="search" class="form-control  m-auto p-1 center" placeholder=" Search with the name ..." v-model="search">
     </div>
       
     </div>
    
    <div class="row mt-5" >
        <div class="col-8 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 p-2"  :key="job" v-for="job in filtredSearch" >
            <div class="card shadow-sm pt-4" >
               <div class="card-img-top" style="width:40%; height: 100px; background-size:cover; border-radius: 50%;margin: auto !important;" :style="{background:'no-repeat center url('+job.img+')'}"></div>
                 <div class="card-body">
                    <h5 class="card-title"> {{job.name}}</h5>
                     <p class="" >countery : {{job.country}}</p>
                     <p class="">age {{job.age}}</p>
                     <p class="">total participants : {{job.participints.length}}</p>
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
  data(){
        return { 
                search:'',
        }
      },
    props:["name","price","img","skills","applecans","salary"],
     methods:{
     Applay(id){
       this.$router.push('/apple/'+id);
      }
    
 },
 computed:{
      //   filtredSearch() {
      //   let self = this;
      //    return this.$store.state.persons.filter((person) =>
      //      person?.name?.toLowerCase().includes(self.search?.toLowerCase()) 
    
      // )}

      // }
      filtredSearch($data) {
           return this.$store.state.persons.filter((person) =>
           { 
            if(this.$store.state.sortWith=='name'){
              return  this.$store.state.persons.sort((x, y) => x.age - y.age) && person?.name?.toLowerCase().includes($data.search?.toLowerCase()) 
           }
           else
           if(this.$store.state.sortWith=='age'){
              return  this.$store.state.persons.sort((x, y) => x.age - y.age) && person?.name?.toLowerCase().includes($data.search?.toLowerCase()) 
           }  else
           if(this.$store.state.sortWith=='countery'){
              return  this.$store.state.persons.sort((x, y) => x.country.localeCompare(y.country)) && person?.name?.toLowerCase().includes($data.search?.toLowerCase()) 
           }
           else
           if(this.$store.state.sortWith=='React'){
              return  this.$store.state.persons.participints.sort((x, y) => x.participints.liks - y.participints.liks) && person?.name?.toLowerCase().includes($data.search?.toLowerCase()) 
           }
           else
           if(this.$store.state.sortWith=='Share'){
             return  this.$store.state.persons.sort((x, y) => y.participints.length - x.participints.length)  && person?.name?.toLowerCase().includes($data.search?.toLowerCase())
           }
           else
         return   this.$store.state.persons.sort((x, y) => x.name.localeCompare(y.name)) && person?.name?.toLowerCase().includes($data.search?.toLowerCase());

 
           }
    
      )}

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