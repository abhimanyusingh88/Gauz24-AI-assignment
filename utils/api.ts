import { FeedbackData } from "../types";
// idhar saara file pehle import kar lo warna dikkat hoga
import data1 from "../data/feedback_1.json";
import data2 from "../data/feedback_2.json";
import data3 from "../data/feedback_3.json";
import data4 from "../data/feedback_4.json";
import data5 from "../data/feedback_5.json";

const ALL_DATA_FILES = [data1, data2, data3, data4, data5];

export function fetchMockFeedback (): Promise<FeedbackData> {
  return new Promise((resolve, reject) => {
    // const fixed=500;

    // const delay = Math.floor(Math.random() * fixed) + fixed;

   
    const delay = Math.floor(Math.random() * 500) + 500;

    setTimeout(() => {
      
      const shouldFail = Math.random() < 0.1;

      if (shouldFail) {
        reject(new Error("Network Error: Failed to fetch any data ."));
      } else {
        
        const randomFile = ALL_DATA_FILES[Math.floor(Math.random() * ALL_DATA_FILES.length)];
       
        resolve(randomFile as FeedbackData);
      }
    }, delay);
  });
};
