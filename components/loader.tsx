"use client"

export default function Loader(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-600">Loading the feedback...</p>
            </div>
        </div>
    )
}
