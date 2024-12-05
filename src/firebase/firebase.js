import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiMC14nAyRwJJrO6-Cj3__FzizImb6GNg",
    authDomain: "carventa-7cfeb.firebaseapp.com",
    projectId: "carventa-7cfeb",
    storageBucket: "carventa-7cfeb.firebasestorage.app",
    messagingSenderId: "739769551927",
    appId: "1:739769551927:web:4da0c2ba829b6c6a4f03b2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSingleProduct(id) {
    const documentRef = doc(db, "products", id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.warn("Producto no encontrado");
            return null; // Retorna un valor explícito cuando no existe
        }
    } catch (error) {
        console.error("Problemas en el servidor:", error);
        throw new Error("No se pudo obtener el producto");
    }
}


export async function getProducts(){
    try{
        const querySnapshot = await getDocs(collection(db,'products'));
        if(querySnapshot.size !== 0){
            const productList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };

                });
                return productList;
            } else{
                console.log("coleccion esta vacia");
            }
        } catch (error){
            console.error('Error en la coleccion', error)
        }
    }
    

export async function filterbyCategory(category) {
    try {
        const filteredQuery = query(
            collection(db, 'products'), 
            where('category', '==', category)
        );

        const querySnapshot = await getDocs(filteredQuery);
        if (querySnapshot.size !== 0) {
            const productList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return productList;
        } else {
            console.log('No se encontraron productos en esta categoría');
            return [];
        }
    } catch (error) {
        console.error('Error al filtrar por categoría:', error);
        throw error;
    }
}

