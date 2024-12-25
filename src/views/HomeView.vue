<template>
  <div class="row">
    
    
<section class="">
    <div id="carouselExampleCaptions" class="carousel slide m-auto" data-bs-ride="carousel" style="height: 300px;">
        <div class="carousel-indicators">
            <button data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
            <button data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
            <button data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            <button data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
        </div>


        <div class="carousel-inner" style="height: 300px;">
            <div class="carousel-item active" >
                <img src="4.jfif" class="d-block w-100">
                <div class="carousel-caption ">
                    <h3 class="center"> {{  }}</h3>
                </div>
            </div>
            <div class="carousel-item">
                <img src="1.jfif" class="d-block w-100">
                <div class="carousel-caption">
                  <h3> Lorem, ipsum dolor.</h3>
                </div>
            </div>
            <div class="carousel-item">
                <img src="33.jfif" class="d-block w-100">
                <div class="carousel-caption ">
                    <h3> Lorem, ipsum dolor.</h3>  
                </div>
            </div>
            <div class="carousel-item">
                <img src="55.jfif" class="d-block w-100">
                <div class="carousel-caption  ">
                    <h3> Lorem, ipsum dolor.</h3>
                </div>
            </div>
        </div>



        <button class="carousel-control-prev" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</section>

    <div class="about col-9 h-50 m-auto">
      <h2 class="center  pt-4 pb-1"> About us</h2> 
      <div class="col-3 m-auto mp-1" style="border: #ffc311 1px solid;"></div> 
        <p class="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptate porro cupiditate molestias quis accusamus asperiores a modi error placeat. 
         Pariatur corporis asperiores voluptas minus accusamus aut 
         architecto itaque rerum facilis.
      </p>
    </div>

    <div class="">
        <h2 class="center pt-4 pb-1"> Top members </h2> 
        <div class="col-3 m-auto" style="border: #ffc311 1px solid;"></div> 
        <div class="row m-2" >
          <div class="col-8 col-md-4 col-lg-4 col-xl-3 col-xxl-3 p-2 m-auto"  :key="job" v-for="job in sortedPersonsByParticipants" >
            <div class="card shadow-sm pt-4" >
               <div class="card-img-top" style="width:40%; height: 100px; background-size:cover; border-radius: 50%;margin: auto !important;" :style="{background:'no-repeat center url('+job.img+')'}"></div>
                 <div class="card-body">
                    <h1>{{ job.countPar }}</h1>
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
    
    </div>
</template>

<script>
 
export default {
  name: 'HomeView',
  methods: {
  sortedPersons() {
    return this.$store.state.persons.sort((x, y) => y.participints.length - x.participints.length).slice(0,3); 
  }
},
computed: {
  sortedPersonsByParticipants() {
    return this.sortedPersons(); 
  }
}}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
 }
 .carousel-item{
    position: static;
 }
 .carousel-caption{
    bottom: 5.25rem
 }
 .card:hover {
    background: #000000;
    color: white;
    border: 1px solid #ffc107;
}
</style>