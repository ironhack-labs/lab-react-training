import React from 'react'

export default function BoxColor({r,g,b}) {
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, height: 100, padding: 10 }}>
      rgb({r},{g}, {b})
    </div>
  )
}
