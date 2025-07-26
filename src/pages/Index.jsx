import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">GroupBuy Nexus</h1>
        <p className="text-xl text-muted-foreground mb-8">Connect vendors through group buying power</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>For Vendors</CardTitle>
              <CardDescription>Join group buys and save on bulk purchases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/vendor/login">
                <Button className="w-full">Vendor Login</Button>
              </Link>
              <Link to="/vendor/signup">
                <Button variant="outline" className="w-full">Sign Up as Vendor</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Admin Panel</CardTitle>
              <CardDescription>Manage products and group buys</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/admin/login">
                <Button className="w-full">Admin Login</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
