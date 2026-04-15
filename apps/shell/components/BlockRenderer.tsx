import React from 'react'
import { SurfaceBlock } from '../types/surface'

export default function BlockRenderer({ blocks }: { blocks: SurfaceBlock[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {blocks.map((block) => (
        <div key={block.id} style={{ border: '1px solid #ddd', padding: 12 }}>
          <h3>{block.title}</h3>
          {block.body && <p>{block.body}</p>}

          {block.confidence !== undefined && (
            <div>Confidence: {block.confidence}%</div>
          )}

          {block.risk && <div>Risk: {block.risk}</div>}
        </div>
      ))}
    </div>
  )
}
