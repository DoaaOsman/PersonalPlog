import { createStore } from 'vuex'

export default createStore({
  state: {
    TheType:'',
    activeTab:'login',
    sortWith:'',
    liks:false ,
    selectedCondition:'',
    selectedCompany:'',
     typeTheParticipats:[
       {id:1,name:"since"},
       {id:2,name:"drama"},
       {id:3,name:"since"},
       {id:4,name:"other"},
  ]
,
  persons:[
      {id:1,
        name:"Mr Mohammed",
        age:48,
        country:"australian",
         date:"3-6-2024" ,
        img:"3.jpg",
        participints:[
          { id:1 ,title:"the titel" ,body:'work any wary' ,liks:550 ,type:"Religious",
            comments:[{id:1 ,name:"mona" , body:'work any wary' ,liks:70, Replaycomments:[{ }] },
            {id:2 ,name:"hany" , body:'work any wary' ,liks:70, Replaycomments:[{ }] },
            {id:3 ,name:"noon" , body:'work any wary' ,liks:70, Replaycomments:[{ }] } ]
           },
           
           { id:2 ,title:"particip2" ,body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, impedit aperiam accusantium dignissimos reiciendis temporibus!' ,liks:100 ,type:"other",
            comments:[ { id:1 ,name:"ali" , body:'lorem' ,liks:50 , Replaycomments:[{ } ]}]
           }             
           ]
           
        },
        {id:2,
          name:"Doaa osman",
          age:24,
          country:"sudan",
          date:"3-6-2020" ,
          img:"3.jpg",
          participints:[
            { id:1 ,title:"the titel" ,body:'work any wary' ,liks:550 ,type:"other",
              comments:[{id:1 ,name:"doaa" , body:'work any wary' ,liks:70 ,
              Replaycomments:[{ }] }
            ]
             },
             { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"drama",
              comments:[ { id:1 ,name:"ahmmed" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
             },
             { id:3 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"drama",
              comments:[ { id:1 ,name:"ahmmed" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
             },
             { id:4 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"drama",
              comments:[ { id:1 ,name:"ahmmed" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
             },
             { id:5 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"drama",
              comments:[ { id:1 ,name:"ahmmed" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
             }             
             ]
          },
          {id:3,
            name:"Dani",
            age:55,
            country:"oman",
            date:"3-6-2004" ,
            img:"3.jpg",
            participints:[
                  { id:1 ,title:"the titel" ,body:'work any wary' ,liks:550 ,type:"Religious",
                    comments:[{id:1 ,name:"mona" , body:'work any wary' ,liks:70 ,
                    Replaycomments:[{ }] }
                  ]
                   },
                   { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                    comments:[ { id:1 ,name:"aly" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                   }             
                   ]
            },
            {id:4,
              name:"Fadi",
              age:34,
              country:"qater",
              date:"3-6-2024" ,
              img:"3.jpg",
              participints:[
                { id:1 ,title:"the titel" ,body:'work any wary' ,liks:550 ,type:"drama",
                  comments:[{id:1 ,name:"mona" , body:'work any wary' ,liks:70 ,
                  Replaycomments:[{ }] }
                ]
                 },
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 } ,
                 { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                  comments:[ { id:1 ,name:"dany" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                 }             
                 ]
              }
              ,
              {id:5,
                name:"Ahmed Mohammed",
                age:19,
                country:"egipt",
                date:"3-6-2024" ,
                img:"3.jpg",
                participints:[
                  { id:1 ,title:"the titel" ,body:'work any wary' ,liks:550 ,type:"literary",
                    comments:[{id:1 ,name:"mona" , body:'work any wary' ,liks:70 ,
                    Replaycomments:[{ }] }
                  ]
                   },
                   { id:2 ,title:"hady" ,body:'work any wary' ,liks:100 ,type:"Religious",
                    comments:[ { id:1 ,name:"alaa" , body:'work any wary' ,liks:50 , Replaycomments:[{ } ]}]
                   }             
                   ]
                }       
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
