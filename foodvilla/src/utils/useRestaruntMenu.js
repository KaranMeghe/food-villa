import { useState, useEffect } from "react";
import axios from "axios";
import { FETCH_MENU_URL } from "../config";

const useRestaruntMenu = (resId) => {
  const [restarunt, setRestarunt] = useState(null);

  // Get Data From Api
  useEffect(() => {
    getResstaruntInfo();
  }, []);

  async function getResstaruntInfo() {
    const dataMenu = await axios.get(FETCH_MENU_URL + resId);
    setRestarunt(dataMenu.data.data);
  }

  //Return Restarunt Data
  return restarunt;
};

export default useRestaruntMenu;
