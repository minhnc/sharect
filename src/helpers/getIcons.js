import ShareButton from '../Button/ShareButton/ShareButton'
import CustomShareButton from '../Button/ShareButton/CustomShareButton'

export default function getIcons({networks, customShareButtons}) {
  const icons = document.createElement('div')
  let length = 0
  for (let n in networks) {
    if (networks[n] && networks[n].isActive) {
      let { icon, url, username } = networks[n]
      icons.appendChild(ShareButton(icon, url, username))
      length++
    }
  }
  if (customShareButtons.length > 0) {
    customShareButtons.forEach(btn => {
      icons.appendChild(CustomShareButton(btn.icon, btn.onClick))
      length++
    })
  }
  return { icons, length }
}
