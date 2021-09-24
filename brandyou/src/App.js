import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
// Secciones
import ProductList from './containers/product-list/ProductList'
import ProductDetail from './containers/product-detail/ProductDetail'
import UserList from './containers/user-list/UserList'
import UserDetail from './containers/user-detail/UserDetail'
import About from './containers/about/About'
import NotFound from './containers/not-found/NotFound'
import './App.css';
import './index.css';
import ContentWrapper from './components/ContentWrapper';
import { SidebarTitle, SidebarSubtitle} from './config'


function App() {
  return (
    <main>
      <Sidebar
        title={SidebarTitle}
        subtitle={SidebarSubtitle}
      />
      
      <Switch>
        <Route exact path="/" component={ContentWrapper} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={UserDetail} />
        <Route path="/about" component={About} />
        <NotFound />
      </Switch>

    </main>
  );
}

export default App;
