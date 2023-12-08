import React from 'react'

export type TBlog = {
  id: number
  title: string
  category: string[]
  createdAt: string
  author: string
  content: string
  subContent: string
  image: string
  action?: string
  link?: string
}

export type TTopicRow = {
  id: number
  title: string
  subTitle: string
  description: string
  btnLink?: string
  itemList: {
    id: number
    title: string
    description: string
  }[]
}

export type TLanguage = {
  code: string
  name: string
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
