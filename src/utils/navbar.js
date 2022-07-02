import Home from '../pages/Home'
import Generic from '../pages/Generic/index'
import Properties from '../pages/Properties'
import Singin from '../pages/Singnin'
import Singnup from '../pages/Singnup'

export const navbar = [
    {
        id:1,
        title:'Home',
        path:'/home',
        element:<Home/>,
        search:'?',
        hidden:false,
        private:true,
    },
    {
        id:2,
        title:'Properties',
        path:'/properties',
        element:<Properties/>,
        search:'?',
        hidden:false,
        private:true,
    },
    {
        id:3,
        title:'Contacts',
        path:'/contacts',
        element:<Generic/>,
        search:'?',
        hidden:false,
        private:true,
    },
    {
        id:4,
        title:'Singin',
        path:'/Singin',
        element:<Singin/>,
        search:'?',
        hidden:true,
        private:true,
    }, 
    {
        id:5,
        title:'Singnup',
        path:'/singnup',
        element:<Singnup/>,
        search:'?',
        hidden:true,
        private:true,
    },
]