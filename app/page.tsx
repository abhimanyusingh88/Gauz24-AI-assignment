"use client";

import { useEffect, useState } from "react";
import { FeedbackData } from "../types";
import { fetchMockFeedback } from "../utils/api";
import FeedbackViewer from "../components/FeedbackViewer";
import ButtonComponent from "@/components/ButtonComponent";
import Loader from "@/components/loader";

export default function Home() {
  const [data, setData] = useState<FeedbackData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchMockFeedback();
      setData(result);
    } catch (err: any) { // yha error aa rha stackoverflow se dekhna hai last me
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      // return;
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
   return <Loader/>
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
            <div className="text-red-500 text-5xl mb-4">✕</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Failed to Load</h2>
            <p className="text-gray-500 mb-6">{error}</p>
            <button 
                onClick={loadData}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
                Retry
            </button>
        </div>
      </div>
    );
  }

 return (
  <main className="min-h-screen bg-gray-100 py-10 px-4">
    
    <ButtonComponent loadData={loadData} />

    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
      {data ? (
        <FeedbackViewer data={data} />
      ) : (
        <p className="text-center text-gray-500">Click the button to load feedback</p>
      )}
    </div>
  </main>
);

}