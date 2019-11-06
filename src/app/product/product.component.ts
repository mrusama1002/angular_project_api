import { Component, OnInit } from '@angular/core';
import { MakeUpService } from '../make-up.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    title='';
    result=[];
    services=null;
    pageData=null;
    service=null;
    categories=[];
    constructor(private abc: MakeUpService) {
        this.result=[];
        this.services=null;

    }
    
   
    ngOnInit() {
        this.abc.readTask().subscribe((task)=>{
            if(task != null){
                this.pageData=task;
                this.title = task['Page']['title'];   
                this.categories=[...task['Taxonomies'].beauty_treatments.Terms];
            }
       })
        this.services=[];
        // this.services=[ 
        //     {name:'PEDICURE - SPA EDITIE', categories_id:1, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/pedicure.jpg'},
        //     {name:'GELLAK NAGELS - NIEUWE SET', categories_id:1, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/nail.jpg'},
        //     {name:'MANICURE - CLASSIC', categories_id:1, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/manicure.jpg'},
        //     {name:'PEDICURE - SPA EDITIE 2', categories_id:2, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/pedicure.jpg'},
        //     {name:'GELLAK NAGELS - NIEUWE SET 2', categories_id:2, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/nail.jpg'},
        //     {name:'MANICURE - CLASSIC 2', categories_id:2, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/manicure.jpg'},
        //     {name:'PEDICURE - SPA EDITIE 3', categories_id:3, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/pedicure.jpg'},
        //     {name:'GELLAK NAGELS - NIEUWE SET 3', categories_id:3, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/nail.jpg'},
        //     {name:'MANICURE - CLASSIC 3', categories_id:3, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/manicure.jpg'},
        // ]
    }
    page(id) {
        this.result=[];
        for (let partial of this.pageData.Partials) {
            for(let tag of partial.Tag){
                if(tag.term_id == id){
                    this.result.push(partial.Partial);
                } 
            } 
        }
        
    }
    moveBack(){
        this.result=[];
        this.service=null;
    }

    showDetail(service){
        this.service={...service};
    }

    moveBackTo(){
        this.service=null;
    }


}
