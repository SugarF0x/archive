import { TStack } from '@/components/Stack/types'

export interface IItem {
  title: string;
  description: string;
  stack: TStack[];
  thumbnail: string;
  slug: string;
  status: string;
}
