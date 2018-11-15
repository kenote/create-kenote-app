
export const assetUrl = (asset) => (/^(data\:)/.test(asset) ? `` : PROJECT_ENV.context).concat(asset)

export const isActiveLink = (linkname, pathname) => {
  let pathMatch = pathname.match(/^(\/)([a-z\-]+)/)
  let linkMatch = linkname.match(/^(\/)([a-z\-]+)/)
  let pathKey = pathMatch && pathMatch[2] || ''
  let linkKey = linkMatch && linkMatch[2] || ''
  return pathKey.toLowerCase() === linkKey.toLowerCase()
}