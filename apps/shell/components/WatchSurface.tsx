import React from 'react'
import { WatchSurface as WatchSurfaceType } from '../types/surface'

export default function WatchSurface({ surface }: { surface: WatchSurfaceType }) {
  return (
    <div style={{ border: '1px dashed #999', padding: 10, marginTop: 8 }}>
      <strong>{surface.title}</strong>
      {surface.body && <p style={{ marginTop: 6 }}>{surface.body}</p>}
    </div>
  )
}
