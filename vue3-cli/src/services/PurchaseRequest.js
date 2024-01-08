import axios from 'axios';

export const ADD_PROC_A0 = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/api/add", { data: data, withCredentials: true });    
    console.log(data)
    console.log(response)
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error('Failed to fetch user:', error);
    throw error;
  }
};

export const UPD_PROC_U0 = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/UPD_PROC_U0");
      return response.data;
    } catch (error) {
      // 오류 처리
      console.error('Failed to fetch user:', error);
      throw error;
    }
  };

  /**
   * 
   * @param {CMPYCD, REQYM, REQNO} data 
   * @returns String
   */
  export const DEL_PROC_D0 = async (data) => {
    try {
        console.log(data);
        const response = await axios.delete("http://localhost:8080/api/del", { data: data, withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw error;
    }
};

  export const SEL_PROC_S0 = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/PREV_PROC_P0");
      return response.data;
    } catch (error) {
      // 오류 처리
      console.error('Failed to fetch user:', error);
      throw error;
    }
  };

  export const PREV_PROC_P0 = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/NEXT_PROC_N0");
      return response.data;
    } catch (error) {
      // 오류 처리
      console.error('Failed to fetch user:', error);
      throw error;
    }
  };