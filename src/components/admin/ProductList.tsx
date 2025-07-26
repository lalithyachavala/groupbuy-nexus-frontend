import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  groupSize: number;
  isActive: boolean;
}

interface ProductListProps {
  products: Product[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ProductList = ({ products, onEdit, onDelete }: ProductListProps) => {
  return (
    <div className="space-y-4">
      {products.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No products added yet. Add your first product to get started!
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Group Size</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>৳{product.price}</TableCell>
                <TableCell>{product.groupSize} vendors</TableCell>
                <TableCell>
                  <Badge variant={product.isActive ? "default" : "secondary"}>
                    {product.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onEdit(product.id)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => onDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};