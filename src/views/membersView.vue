<template>
<!--div class="container" >
     <div class="row">
        <div class="col-2">
            <div class="accordion" id="y">
                <div class="accordion-item">
                    <div class="accordion-header">
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#salary">Salary</button>
                    </div>
                    <div id="salary" class="collapse accordion-collapse" data-bs-parent="#y">
                        <div class="list-group">
                            <a class="list-group-item list-group-item-action" :class="min==0 && max==99999999999 ? 'active':''" href="#" @click="min=0;max=99999999999">All</a>
                            <a class="list-group-item list-group-item-action" :class="min==0 && max==130000 ? 'active':''" href="#" @click="min=0;max=30000">0 - 130,000</a>
                            <a class="list-group-item list-group-item-action" :class="min==130000?'active':''" href="#" @click="min=30000;max=60000">130,000 - 200,000</a>
                            <a class="list-group-item list-group-item-action" :class="min==200000?'active':''" href="#" @click="min=200000;max=400000">200,000 - 400,000</a>
                            <a class="list-group-item list-group-item-action" :class="min==400000?'active':''" href="#" @click="min=400000;max=99999999999">above 400,000</a>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
     </div>           
    <div > -->
   <cart-jobe-vue></cart-jobe-vue>

</template>
 <script>
import cartJobeVue from './cartJobe.vue';
 export default { 
   components:{
     cartJobeVue,
  },
  };
  </script>
 
 <style scoped>
 
 </style>