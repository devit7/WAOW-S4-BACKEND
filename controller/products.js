const { json } = require("express");

const products = [
    {
      id: "1697937696297",
      name: "Nasi Goreng Spesial",
      category: "Makanan Utama",
      price: 35000,
      quantity: 6,
    },
    {
      id: "1697937744754",
      name: "Ayam Bakar Madu",
      category: "Makanan Utama",
      price: 42000,
      quantity: 8,
    },
    {
      id: "1697937758370",
      name: "Sate Ayam",
      category: "Makanan Ringan",
      price: 18000,
      quantity: 15,
    },
    {
      id: "1697937764926",
      name: "Es Teler",
      category: "Minuman",
      price: 12000,
      quantity: 10,
    },
    {
      id: "1697937772903",
      name: "Soto Betawi",
      category: "Makanan Utama",
      price: 28000,
      quantity: 7,
    },
    {
      id: "1697937836918",
      name: "Gulai Ikan Patin",
      category: "Makanan Utama",
      price: 48000,
      quantity: 5,
    },
    {
      id: "1697937988332",
      name: "Pisang Goreng",
      category: "Makanan Ringan",
      price: 15000,
      quantity: 20,
    },
    {
      id: "1697938036040",
      name: "Es Kelapa Muda",
      category: "Minuman",
      price: 10000,
      quantity: 12,
    },
    {
      id: "1697938044164",
      name: "Soto Ayam Kampung",
      category: "Makanan Utama",
      price: 23000,
      quantity: 10,
    },
    {
      id: "1697938052422",
      name: "Gado-Gado",
      category: "Salad",
      price: 22000,
      quantity: 12,
    },
  ];
  


module.exports = {
    createProduct : (req,res) =>{
      try {
        const { name, category, price, quantity } = req.body;
        console.log(req.body);
        const id = new Date().getTime().toString();
  
        const newProduct = { id, name, category, price, quantity };
        products.push(newProduct);
  
        res.status(200).json({
          error: false,
          message: "Berhasil menambahkan data produk!",
          data: { product: newProduct },
        });
      } catch (e) {
        res.status(500).json({
          error: true,
          message: `Gagal menambahkan data produk! ${e.toString()}`,
          data: null,
        });
      }
    },

    updateProduct: (req, res) => {
      try {
        const { id } = req.params;
        const { name, category, price, quantity } = req.body;
  
        const updatedProduct = { id, name, category, price, quantity };
        const indexArray = products.map((item) => item.id).indexOf(id);
  
        if (indexArray === -1) {
          return res.status(404).json({
            error: true,
            message: "Data produk tidak ditemukan!",
            data: null,
          });
        }
  
        products.splice(indexArray, 1, updatedProduct);
  
        res.status(200).json({
          error: false,
          message: "Berhasil mengubah data produk!",
          data: { product: updatedProduct },
        });
      } catch (e) {
        res.status(500).json({
          error: true,
          message: `Gagal menambahkan data produk! ${e.toString()}`,
          data: null,
        });
      }
    },

    deleteProduct: (req, res) => {
      try {
        const { id } = req.params;
  
        const indexArray = products.map((item) => item.id).indexOf(id);
  
        if (indexArray === -1) {
          return res.status(404).json({
            error: true,
            message: "Data produk tidak ditemukan!",
            data: null,
          });
        }
  
        products.splice(indexArray, 1);
  
        res.status(200).json({
          error: false,
          message: "Berhasil menghapus data produk!",
          data: null,
        });
      } catch (e) {
        res.status(500).json({
          error: true,
          message: `Gagal menghapus data produk! ${e.toString()}`,
          data: null,
        });
      }
    },
    getAllProducts: (req,res) =>{
        try{
          const {cetegory} = req.query;

          if(cetegory){
            const categoryFilteredProduct = products.filter(
              (item) => item.category.toLowerCase() === category.toLowerCase()
            );
            
            return res.status(200).json({
              error: false,
              message: "Berhasil mendapatkan data produk!",
              data: { products: categoryFilteredProduct },
            });
          }

          res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data produk!",
            data: { products },
          });
        } catch (e) {
          res.status(500).json({
            error: true,
            message: `Gagal mendapatkan data produk! ${e.toString()}`,
            data: null,
          });
        }
      },

      getProductById: (req, res) => {
        try {
          const { id } = req.params;
    
          const product = products.filter((item) => item.id === id)[0];
    
          res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data produk!",
            data: { product },
          });
        } catch (e) {
          res.status(500).json({
            error: true,
            message: `Gagal mendapatkan data produk! ${e.toString()}`,
            data: null,
          });
        }
      }

    
}