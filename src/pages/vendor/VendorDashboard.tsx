import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { JoinOrderModal } from "@/components/vendor/JoinOrderModal";
import { OrderStatus } from "@/components/vendor/OrderStatus";

// Mock data - replace with actual API calls
const mockProducts = [
  {
    id: 1,
    name: "Premium Coffee Beans - 1kg",
    price: 450,
    currentJoined: 3,
    targetGroup: 5,
    image: "/placeholder.svg",
    deadline: "2024-01-15"
  },
  {
    id: 2,
    name: "Organic Rice - 25kg",
    price: 2500,
    currentJoined: 7,
    targetGroup: 10,
    image: "/placeholder.svg",
    deadline: "2024-01-20"
  },
  {
    id: 3,
    name: "Fresh Vegetables Bundle",
    price: 800,
    currentJoined: 2,
    targetGroup: 8,
    image: "/placeholder.svg",
    deadline: "2024-01-18"
  }
];

const VendorDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const handleJoinOrder = (product: typeof mockProducts[0]) => {
    setSelectedProduct(product);
    setShowJoinModal(true);
  };

  const getProgressPercentage = (current: number, target: number) => {
    return (current / target) * 100;
  };

  const getStatusBadge = (current: number, target: number) => {
    if (current >= target) {
      return <Badge className="bg-green-500">Ready to Order</Badge>;
    } else if (current >= target * 0.7) {
      return <Badge variant="secondary">Almost Full</Badge>;
    } else {
      return <Badge variant="outline">Open</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
          <p className="text-muted-foreground">Join group buys and manage your orders</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Group Buy Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Available Group Buys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(product.currentJoined, product.targetGroup)}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>
                      ৳{product.price} per unit
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Group Progress</span>
                        <span>{product.currentJoined}/{product.targetGroup} joined</span>
                      </div>
                      <Progress 
                        value={getProgressPercentage(product.currentJoined, product.targetGroup)} 
                        className="h-2"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Deadline: {product.deadline}</span>
                    </div>
                    
                    <Button 
                      onClick={() => handleJoinOrder(product)}
                      className="w-full"
                      disabled={product.currentJoined >= product.targetGroup}
                    >
                      {product.currentJoined >= product.targetGroup ? "Group Full" : "Join Order"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Status Section */}
          <div>
            <OrderStatus />
          </div>
        </div>
      </main>

      {selectedProduct && (
        <JoinOrderModal
          product={selectedProduct}
          open={showJoinModal}
          onOpenChange={setShowJoinModal}
        />
      )}
    </div>
  );
};

export default VendorDashboard;