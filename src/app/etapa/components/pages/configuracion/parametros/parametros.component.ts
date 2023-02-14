import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Parametro } from 'src/app/etapa/api/parametro';
//import { Product } from 'src/app/etapa/api/product';
import { ParametroService } from 'src/app/etapa/service/parametro.service';
//import { ProductService } from 'src/app/etapa/service/product.service';

@Component({
    templateUrl: './parametros.component.html',
    providers: [MessageService]
})
export class ParametrosComponent implements OnInit {

    productDialog: boolean = false;
    deleteParametroDialog: boolean = false;
    deleteParametrosDialog: boolean = false;
    parametros: Parametro[] = [];
    //products: Product[] = [];
    //product: Product = {};
    parametro: Parametro = {};
    //selectedProducts: Product[] = [];
    selectedParametros: Parametro[] = [];
    submitted: boolean = false;
    cols: any[] = [];
    //statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(//private productService: ProductService, 
        private parametroService: ParametroService,
        private messageService: MessageService) { }

    ngOnInit() {

        this.parametroService.getParametros().subscribe(data => {
            console.log(data);
            
          });

        //this.productService.getProducts().then(data => this.products = data);

        this.cols = [
            { field: 'idParametro', header: 'Código' },
            { field: 'nombre', header: 'Parámetro' },
            { field: 'unidad', header: 'Unidad' },
            { field: 'descripcion', header: 'Descripción' },
            //{ field: 'rating', header: 'Reviews' },
            //{ field: 'inventoryStatus', header: 'Status' }
        ];
        /*
        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ]; */
    }

    openNew() {
        this.parametro = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedParametros() {
        this.deleteParametrosDialog = true;
    }

    editParametro(parametro: Parametro) {
        this.parametro = { ...parametro };
        this.productDialog = true;
    }

    deleteParametro(parametro: Parametro) {
        this.deleteParametrosDialog = true;
        this.parametro = { ...parametro };
    }

    confirmDeleteSelected() {
        this.deleteParametrosDialog = false;
        this.parametros = this.parametros.filter(val => !this.selectedParametros.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Parámetro Borrado', life: 3000 });
        this.selectedParametros = [];
    }

    confirmDelete() {
        this.deleteParametroDialog = false;
        this.parametros = this.parametros.filter(val => val.idParametro !== this.parametro.idParametro);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Parámetro Borrado', life: 3000 });
        this.parametro = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;
        /*
        if (this.product.name?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Parámetro Actualizado', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Parámetro Creado', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }*/
    }

    findIndexById(idParametro: number): number {
        let index = -1;
        for (let i = 0; i < this.parametros.length; i++) {
            if (this.parametros[i].idParametro=== idParametro) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

}
