import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product.model";
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
  from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public mode: number=1;
  public cuurentProduct:Product;
  public imagePath;
  imgURL: any;
  userFile ;
  public message: string;
  public currentData: Product;
  private url: string;

  constructor(public catalogueService: CatalogueService,private activatedRoute:ActivatedRoute,public fb: FormBuilder, private router :Router) {}


  ngOnInit(): void {
    this.infoForm();
  }
  infoForm() {
    this.catalogueService.dataForm = this.fb.group({
      id: null,
      designation: ['', [Validators.required]],
      price: [0, [Validators.required]],
      quantite: [0, [Validators.required]],
      fileName: ['', [Validators.required]],
      descriptionTech: ['', [Validators.required]],

    });
  }
//save product without image
  onSaveProduct(data: any) {
    console.log(data);

    this.catalogueService.saveData(this.catalogueService.host +"/produits",data)
      .subscribe(res => {
        //this.router.navigateByUrl("/product")

        this.cuurentProduct=res;
        this.mode=2

        console.log(res);
      }, err => {
        console.log(err);
      })


  }


  OnAdd() {
    this.mode=1;
  }


  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;


      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }


  }


//save producte with image

  addData() {
    const formData = new FormData();
    const article = this.catalogueService.dataForm.value;
    console.log("article" + article)
    formData.append('article', JSON.stringify(article));
    formData.append('file', this.userFile);
    this.catalogueService.createData(formData).subscribe(data => {

      this.router.navigate(['/product']);

    }, err => {
      console.log(err);
      alert("il faut renseigner tous les formulaire et choisire une Image\n Produit non ajouté");

    })
    this.router.navigateByUrl("/product")
  }





}
