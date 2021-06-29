import home from './components/admin/home.vue';
import AllCategory from './components/admin/category/allcategory.vue';
import AddCategory from './components/admin/category/addcategory.vue';
import EditCategory from './components/admin/category/editcategory.vue';
export const routes = [
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: AllCategory
    },
    {
        path: '/add-category',
        component: AddCategory
    },
    {
        path: '/edit-category/:id',
        component: EditCategory
    },
]
