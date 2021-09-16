import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
// Secciones
import ProductList from './containers/product-list/ProductList'
import ProductDetail from './containers/product-detail/ProductDetail'
import About from './containers/about/About'
import NotFound from './containers/not-found/NotFound'
import './App.css';

import { SidebarTitle, SidebarSubtitle } from './config'


function App() {
  return (
    <main>
      <Sidebar 
        title={SidebarTitle}
        subtitle={SidebarSubtitle}
      />
      <Switch>
        <Route exact path="/" component={ProductList} />
        
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/about" component={About} />
        
        <NotFound />
      </Switch>
    </main>
  );
}

export default App;
