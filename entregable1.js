class ProductManager {
    constructor() {
        this.products = []
        this.newId = 1
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.error("Todos los campos son obligatorios.")
        }

        if (this.products.some(prod => prod.code === code)) {
            return console.error("El codigo del producto ya existe")
        }

        const newProduct = {
            id: this.newId++,
            title, description, price, thumbnail, code, stock,
        }

        this.products.push(newProduct)
        console.log("Se agrego", newProduct)
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(prod => prod.id === id)

        if(product) {
            return product
        } else {
            console.error(`El producto de id ${id} no se encontro`)
        }
    }
}

// Ejemplos de uso
const items = new ProductManager()

// Agregar productos exitosamente
items.addProduct("Teclado", "Razer Hunstman TE - Switches Red", 79.99, "img/teclado_razer.webp", "P01", 30)
items.addProduct("Mouse", "Razer Viper Mini - Switches Red", 49.99, "img/mouse_razer.webp", "P02", 33)

// Error al agregar un producto
items.addProduct("Auriculares", "", 29.99, "img/auriculares_logitech.webp", "P03", 39)

// Ver productos
console.log(items.getProducts()) // Muestra todos los productos
console.log(items.getProductById(1)) // Muestra un producto por el id (en este caso el 1)
