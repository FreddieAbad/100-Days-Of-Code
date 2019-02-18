//logica de la interfaz - logica del prog
//alert('Works!');

class Producto {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}


class UI {
    //METODOS PARA AGREGAR OBJETOS
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.name}
                    <br>
                    <strong>Precio de Producto</strong>: ${product.price}
                    <br>
                    <strong>Año de Producto</strong>: ${product.year}
                    <br>
                    <a href="#" class = "btn btn-danger" name="delete">Delete</a>
                    </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }
    //limpia el formulario
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if (element.name === 'delete') {
            //Elimino elemento padres
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado Satisfactoriamente','danger');
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className=`alert alert-${cssClass} mt-4 mb-4`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container=document.querySelector('.container');
        const app=document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
}
//DOM EVENT
document.getElementById('product-form')
    .addEventListener("submit", function (e) {
        const name = (document.getElementById('name').value)
        const price = (document.getElementById('price').value)
        const year = (document.getElementById('year').value)
        console.log(name, price, year);
        const product = new Producto(name, price, year)
        const ui = new UI();
        if(name === '' || price===''|| year===''){
           return ui.showMessage('Ingrese datos completos','info');
        }
        ui.addProduct(product);
        ui.showMessage('Producto Agregado Satisfactoriamente','success');
        e.preventDefault(); //cancelo refrescamiento
    });
//evento borrar
document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});