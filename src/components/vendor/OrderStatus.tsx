import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with actual API calls
const mockOrders = [
  {
    id: 1,
    productName: "Premium Coffee Beans - 1kg",
    quantity: 2,
    amount: 900,
    status: "waiting",
    orderDate: "2024-01-10"
  },
  {
    id: 2,
    productName: "Organic Rice - 25kg",
    quantity: 1,
    amount: 2500,
    status: "confirmed",
    orderDate: "2024-01-08"
  },
  {
    id: 3,
    productName: "Fresh Vegetables Bundle",
    quantity: 3,
    amount: 2400,
    status: "delivered",
    orderDate: "2024-01-05"
  }
];

export const OrderStatus = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "waiting":
        return <Badge variant="outline">Waiting</Badge>;
      case "confirmed":
        return <Badge className="bg-blue-500">Confirmed</Badge>;
      case "delivered":
        return <Badge className="bg-green-500">Delivered</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusDescription = (status: string) => {
    switch (status) {
      case "waiting":
        return "Waiting for group to fill";
      case "confirmed":
        return "Order confirmed, preparing for delivery";
      case "delivered":
        return "Order completed";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-sm">{order.productName}</h4>
                {getStatusBadge(order.status)}
              </div>
              
              <div className="text-sm text-muted-foreground">
                Qty: {order.quantity} | Amount: ৳{order.amount}
              </div>
              
              <div className="text-xs text-muted-foreground">
                {getStatusDescription(order.status)}
              </div>
              
              <div className="text-xs text-muted-foreground">
                Ordered: {order.orderDate}
              </div>
            </div>
          ))}
          
          {mockOrders.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No orders yet. Join a group buy to get started!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};