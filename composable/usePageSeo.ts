export const usePageSeo = (title: string, content: string) => {
  return useHead({
    title: `Dee\'s Estate: ${title}`,
    meta: [
      { name: 'description', content  }
    ]
  })
}