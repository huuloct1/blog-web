import { sql } from '@vercel/postgres'
import { BlogType } from '../TypeAlias'

export async function fetchBlogList() {
  try {
    const result = await sql<BlogType>`SELECT * FROM blogs`

    return result.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch blogs data.')
  }
}
