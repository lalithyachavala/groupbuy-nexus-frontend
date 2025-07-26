import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VendorSignup from "./pages/vendor/VendorSignup";
import VendorLogin from "./pages/vendor/VendorLogin";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorProfile from "./pages/vendor/VendorProfile";
import AdminLogin from "./pages/admin/AdminLogin";
import ProductManagement from "./pages/admin/ProductManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Vendor Routes */}
          <Route path="/vendor/signup" element={<VendorSignup />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/vendor/profile" element={<VendorProfile />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
