import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Settings from '@/components/Settings'
import Tickets from '@/components/Tickets'
import TicketForm from '@/components/TicketForm'
import Ticket from '@/components/Ticket'
import Media from '@/components/Media'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'app',
      component: Index,
      redirect: '/tickets/list',
      children: [
        {
          path: 'tickets',
          name: 'tickets',
          component: {
            template: '<router-view></router-view>'
          },
          children: [
            {
              path: 'list',
              name: 'list',
              component: Tickets
            },
            {
              path: 'new',
              name: 'ticket_create',
              component: TicketForm
            },
            {
              path: ':id',
              name: 'ticket',
              component: Ticket
            },
            {
              path: ':id/edit',
              name: 'ticket_edit',
              component: TicketForm
            }
          ]
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: '/media',
          name: 'Media',
          component: Media
        }
      ]
    }
  ]
})
