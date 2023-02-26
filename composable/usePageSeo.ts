// Better use https://nuxt.com/docs/getting-started/seo-meta

export const usePageSeo = (title: string, content: string) => {
  return useHead({
    title: `Dee\'s Estate: ${title}`,
    meta: [
      { name: 'description', content  }
    ]
  })
}