import { createContext, useContext, useEffect, useState } from "react";

const ReviewContext = createContext<any>({});

const ReviewProvider = ({ children }: { children: JSX.Element }) => {
  const [courseId, setCouresId] = useState<any>();
  const [courseReviwe, setCouresReview] = useState<any[]>();

  return (
    <ReviewContext.Provider
      value={{ courseId, setCouresId, courseReviwe, setCouresReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => useContext(ReviewContext);
export default ReviewProvider;
