import { createContentLoader } from 'vitepress'
import path from 'node:path'

function versionFromUrl(url) {
  return path.basename(url).split('_').map(Number)
}

function compareVersionsDescending(a, b) {
  const aVersion = versionFromUrl(a.url)
  const bVersion = versionFromUrl(b.url)
  const length = Math.max(aVersion.length, bVersion.length)

  for (let index = 0; index < length; index += 1) {
    const difference = (bVersion[index] ?? 0) - (aVersion[index] ?? 0)
    if (difference !== 0) return difference
  }

  return b.url.localeCompare(a.url)
}

function firstImage(src) {
  const markdownImage = src.match(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)/)
  if (markdownImage) return { alt: markdownImage[1], src: markdownImage[2] }

  const htmlImage = src.match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/i)
  if (!htmlImage) return null

  const alt = htmlImage[0].match(/\balt=["']([^"']*)["']/i)
  return { alt: alt?.[1] ?? '', src: htmlImage[1] }
}

export default createContentLoader('updates/8season/*.md', {
  includeSrc: true,
  transform(pages) {
    const newest = pages.sort(compareVersionsDescending)[0]
    if (!newest) return null

    const title = newest.frontmatter.title ?? newest.src.match(/^#\s+(.+)$/m)?.[1]
    if (!title || !newest.frontmatter.description) {
      throw new Error(`Newest update ${newest.url} is missing a title or description`)
    }

    return {
      title,
      description: newest.frontmatter.description,
      date: newest.frontmatter.date ?? null,
      url: newest.url,
      image: firstImage(newest.src)
    }
  }
})
