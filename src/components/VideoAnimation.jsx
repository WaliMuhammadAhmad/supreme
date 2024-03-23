import React from 'react'

function VideoAnimation() {
  return (
    <div>
        <div className="relative w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src="video\supreme.mp4" type="video/mp4" />
                    {/* Add additional source elements for other video formats if needed */}
                </video>
            </div>
    </div>
  )
}

export default VideoAnimation