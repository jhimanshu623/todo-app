//component

// Vue.component('show',{
//     props:['todo'],
//     template:'<li class="list-group-item alert-success">Task is: {{todo.task}}  Deadline is: {{todo.deadline}}  Priority is: {{todo.priority}}<button class="btn btn-outline-secondary" type="button" v-on:click="remove(index)">Remove</button></li>'
// })

{/* <button class="btn btn-outline-secondary" v-on:click="remove" type="button">Remove</button> */}
var app=new Vue({
    el:'#input-data',
    data:{
        task:'',
        id:0,
        deadline:'',
        priority:'',
        tasks:[]
    },
    methods:{
        add_task()
        {
            this.id++;
            this.tasks.push({task:this.task,id:this.id,deadline:this.deadline,priority:this.priority});
            this.tasks.sort((a,b)=>{
                if(a.priority<b.priority)
                    return -1;
                else
                    return 1;
            })
        },
        remove(index)
        {
            this.tasks.splice(index,1);
        }
    }
})

// var app2=new Vue({
//     el:'#show',
//     data:{
//         tasks:app.tasks,
//         status:true
//     },
//     methods:{
//         remove(index)
//         {
//             this.tasks.splice(index,1);
//             // this.status=!this.status;
//         }
//     }
// })