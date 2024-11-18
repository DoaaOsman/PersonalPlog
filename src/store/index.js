import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedCondition:'',
    selectedCompany:'',
    min:0,
    max:99999999999,
    typeTheParticipats:[
       {id:1,name:"since"},
       {id:2,name:"drama"},
       {id:3,name:"since"},
       {id:4,name:"other"},
  ],
    persons:[
         {name:'Mr Mohammed',age:40,title:'For Our Service', jope:"Hotel manager", sub:'If this is your first time booking a hotel online, make sure your credit card is suitable for online payments.Whatch out Usually check-in at the hotel is after 14:00 local time, and check-out before 12:00.Before booking, please read the booking conditions and cancellation of booking carefully.Helpful advice'},
         {name:'Ms dania',age:25,title:'For Our Service',  jope:"Service manager", sub:'If this is your first time booking a hotel online, make sure your credit card is suitable for online payments.Whatch out Usually check-in at the hotel is after 14:00 local time, and check-out before 12:00.Before booking, please read the booking conditions and cancellation of booking carefully.Helpful advice'} 
     ]
,
     jobs:[
      {id:1,name:"Cuombuter Se",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024" ,img:"3.jpg",salary:100000,
      skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Khaled" ,age:42,skills:['english','jave'],descr:['work any wary'] },{id:2 ,name:"amani" ,age:22,skill:[ 'software word','english'],descr:['exprince 5 year'] }]},
      {id:2,name:"software enginer",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024",img:"2.jpg",salary:500000,
      skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Miy" ,age:32,skills:['manigmant','c++','kotlan'],descr:['expirinc 3 year'] } ]}
       ,{id:2,name:"software enginer",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024",img:"2.jpg",salary:500000,
       skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Miy" ,age:32,skills:['manigmant','c++','kotlan'],descr:['expirinc 3 year'] } ]}
      ,{id:2,name:"software enginer",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024",img:"2.jpg",salary:500000,
      skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Miy" ,age:32,skills:['manigmant','c++','kotlan'],descr:['expirinc 3 year'] } ]}
      ,{id:2,name:"software enginer",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024",img:"2.jpg",salary:500000,
      skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Miy" ,age:32,skills:['manigmant','c++','kotlan'],descr:['expirinc 3 year'] } ]}
      ,{id:2,name:"software enginer",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024",img:"2.jpg",salary:500000,
      skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Miy" ,age:32,skills:['manigmant','c++','kotlan'],descr:['expirinc 3 year'] } ]}
      ,{id:2,name:"software enginer",age:55,country:"sudan",countPartic:5,countliks:73,date:"3-6-2024",img:"2.jpg",salary:500000,
      skills:['write speed','Englight','java'],applecans:[{id:1 ,name:"Miy" ,age:32,skills:['manigmant','c++','kotlan'],descr:['expirinc 3 year'] } ]}
       
    ]
  },
  getters: { 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
