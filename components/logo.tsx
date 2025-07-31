"use client"

export default function Logo({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        {/* 3D Logo Container */}
        <div
          className={`relative transform transition-all duration-300 hover:scale-105 ${
            isDark ? "drop-shadow-2xl" : "drop-shadow-xl"
          }`}
          style={{
            filter: isDark
              ? "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
              : "drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))",
          }}
        >
          {/* Main Logo Text */}
          <div className="flex items-center">
            <div className="relative">
              <span
                className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
                style={{
                  textShadow: isDark
                    ? "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(59, 130, 246, 0.3)"
                    : "2px 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                SAMADOV
              </span>
              {/* 3D Effect Layer */}
              <span
                className="absolute top-0 left-0 text-2xl font-bold tracking-tight opacity-30 transform translate-x-0.5 translate-y-0.5 -z-10"
                style={{
                  color: isDark ? "#1e40af" : "#6b7280",
                }}
              >
                SAMADOV
              </span>
            </div>

            {/* Studio Badge */}
            <div
              className={`ml-2 px-3 py-1 text-sm font-medium rounded-md transform transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg shadow-gray-500/25"
              }`}
              style={{
                boxShadow: isDark
                  ? "0 4px 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              Studio
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-xs tracking-widest mt-1 opacity-70">
            <span className={isDark ? "text-blue-300" : "text-gray-600"}>animation</span>
          </div>
        </div>
      </div>
    </div>
  )
}
