import style from './style'

function handleMouseOver() {
  this.style.transform = 'scale(1.1)'
}

function handleMouseOut() {
  this.style.transform = 'scale(1)'
}

export default function createButton(icon, handleMouseDown) {
  const btn = document.createElement('div')
  btn.style.cssText = style
  btn.innerHTML = icon

  if (handleMouseDown) {
    btn.onmousedown = handleMouseDown
    btn.onmouseover = handleMouseOver
    btn.onmouseout = handleMouseOut
  } else {
    // Style for non-action button .i.e separator |
    btn.style.cssText = 'display:inline-block;'
  }

  return btn
}
