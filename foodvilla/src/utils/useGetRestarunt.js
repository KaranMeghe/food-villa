import axios from "axios";
import { FETCH_RESTARUNTS } from "../config";
import { useEffect, useState } from "react";

export const useGetRestarunt = () => {
  const [allRestarunts, setAllRestarunts] = useState("");
  useEffect(() => {
    getRestarunts();
  }, []);

  async function getRestarunts() {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setAllRestarunts(data?.data?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestarunts;
};

export const useGetFilteredRestarunt = () => {
  const [filteredRestarunts, setFilteredRestarunts] = useState("");

  useEffect(() => {
    getFilteredRestarunts();
  }, []);

  async function getFilteredRestarunts() {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setFilteredRestarunts(data?.data?.data?.cards[2]?.data?.data?.cards);
  }
  return filteredRestarunts;
};
