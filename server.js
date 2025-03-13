require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cors()); 

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sample'; 

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');

let contadorOperaciones = 0;
app.use((req, res, next) => {
    contadorOperaciones++;
    console.log(`🟢 Operación #${contadorOperaciones}: ${req.method} ${req.url}`);
    next(); 
});

app.get('/contadores', async (req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();
        res.json({ totalUsuarios, totalProductos });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los contadores', error });
    }
});

app.get('/operaciones', (req, res) => {
    res.json({ totalOperaciones: contadorOperaciones });
});

const usuariosRoutes = require('./routes/usuarios.routes');
const productosRoutes = require('./routes/productos.routes');

app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);

app.get('/', (req, res) => {
    res.send('Funcionaaaaaaa');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
