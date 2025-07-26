import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddProductModal } from "@/components/admin/AddProductModal";
import { ProductList } from "@/components/admin/ProductList";

// Mock data - replace with actual API calls
const mockProducts = [
  {
    id: 1,
    name: "Premium Coffee Beans - 1kg",
    price: 450,
    image: "/placeholder.svg",
    groupSize: 5,
    isActive: true
  },
  {
    id: 2,
    name: "Organic Rice - 25kg",
    price: 2500,
    image: "/placeholder.svg",
    groupSize: 10,
    isActive: true
  },
  {
    id: 3,
    name: "Fresh Vegetables Bundle",
    price: 800,
    image: "/placeholder.svg",
    groupSize: 8,
    isActive: false
  }
];

const ProductManagement = () => {
  const [products, setProducts] = useState(mockProducts);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddProduct = (productData) => {
    // TODO: Connect to backend
    const newProduct = {
      id: products.length + 1,
      ...productData,
      isActive: true
    };
    setProducts(prev => [...prev, newProduct]);
    console.log("Adding product:", newProduct);
  };

  const handleEditProduct = (id) => {
    // TODO: Implement edit functionality
    console.log("Editing product:", id);
  };

  const handleDeleteProduct = (id) => {
    // TODO: Connect to backend
    setProducts(prev => prev.filter(p => p.id !== id));
    console.log("Deleting product:", id);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Product Management</h1>
              <p className="text-muted-foreground">Manage group-buy products</p>
            </div>
            <Button onClick={() => setShowAddModal(true)}>
              Add Product
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductList
              products={products}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </CardContent>
        </Card>
      </main>

      <AddProductModal
        open={showAddModal}
        onOpenChange={setShowAddModal}
        onSubmit={handleAddProduct}
      />
    </div>
  );
};

export default ProductManagement;