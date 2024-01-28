export type BlogType = {
  id: number
  title: string
  category?: string[]
  createdAt?: string
  author: string
  content: string
  subContent?: string
  image: string
  action?: string
  link?: string
}

export type TProfile = {
  id: number
  name: string
  image: string
  position?: string
  link?: string
}

export type TSuggestedTool = {
  id: number
  image: string
  title: string
  content: string
  btn: {
    content: string
    link: string
  }
}
