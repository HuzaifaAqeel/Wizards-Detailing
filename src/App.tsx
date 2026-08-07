import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import Home from '@/pages/Home';
import ServicesPage from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import GalleryPage from '@/pages/Gallery';
import AboutPage from '@/pages/About';
import BookPage from '@/pages/BookAppointment';
import ContactPage from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/services/:slug" component={ServiceDetail} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/book" component={BookPage} />
    <Route path="/contact" component={ContactPage} />
    <Route component={NotFound} />
  </Switch>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;
