import { column, defineDb, defineTable } from 'astro:db'

const ArticleData = defineTable({
  columns: {
    slug: column.text({
      primaryKey: true
    }),
    hits: column.number({
      default: 0
    }),
    likesByUser: column.json({
      default: {}
    })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { ArticleData }
})
