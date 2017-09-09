import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'
import Tickets from '@/components/Tickets'
import TicketForm from '@/components/TicketForm'
import Ticket from '@/components/Ticket'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Post-a-Problem',
      component: Index
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: Tickets
    },
    {
      path: '/tickets/new',
      name: 'Ticket',
      component: TicketForm
    },
    {
      path: '/tickets/:id',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/tickets/:id/edit',
      name: 'Ticket',
      component: TicketForm
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }

  ]
})
