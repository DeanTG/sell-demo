import Product from './components/Product.vue'
import Comment from './components/Comment.vue'
import Seller from './components/Seller.vue'

export default [
  {
    path: '/product',
    component: Product
  },
  {
    path: '/comment',
    component: Comment
  },
  {
    path: '/seller',
    component: Seller
  },
  {
    path: '*',
    redirect: '/product'
  }
]