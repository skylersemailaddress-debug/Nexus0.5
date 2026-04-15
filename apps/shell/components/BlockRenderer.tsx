import React from 'react'
import { SurfaceBlock } from '../types/surface'
import WatchSurface from './WatchSurface'

export default function BlockRenderer({ blocks }: { blocks: SurfaceBlock[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {blocks.map((block) => (
        <div
          key={block.id}
          style={{
            border: '1px solid #ddd',
            padding: 12,
            borderRadius: 8
          }}
        >
          <h3>{block.title}</h3>
          {block.body && <p>{block.body}</p>}

          {block.confidence !== undefined && (
            <div>Confidence: {block.confidence}%</div>
          )}

          {block.risk && <div>Risk: {block.risk}</div>}

          {/* ACTIONS */}
          {block.actions && (
            <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
              {block.actions.map((action) => (
                <button key={action.id}>
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* WATCH SURFACES (THIS IS THE IMPORTANT PART) */}
          {block.watchSurfaces && (
            <div style={{ marginTop: 12 }}>
              {block.watchSurfaces.map((surface) => (
                <WatchSurface key={surface.id} surface={surface} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
