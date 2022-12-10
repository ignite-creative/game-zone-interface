import { INotification } from './interfaces'
export const notifications: INotification[] = [
  {
    id: '123-456',
    type: 'server',
    subject: 'Welcome to joining Game Zone',
    description: 'You will experience fantastic games here',
  },
  {
    id: '123-456',
    type: 'client',
    subject: '8v8 elimination started',
    description: 'Please join the tournament and win to get awesome award',
  },
]
