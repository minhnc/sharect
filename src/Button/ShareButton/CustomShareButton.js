import Button from '../Button'

export default function createCustomShareButton(icon, onClick) {
  const btn = Button(icon, onClick)
  return btn
}
