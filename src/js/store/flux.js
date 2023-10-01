const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },

    actions: {
      fetchData: async (endpoint) => {
        let baseUrl = `https://playground.4geeks.com/apis/fake/contact/${endpoint}`;

        try {
          let response = await fetch(baseUrl);
          if (!response.ok) return response.status;
          let data = await response.json();
          console.log("data from fetch", data);
          getStore().contacts = data;
          console.log("store data", getStore().contacts);
        } catch (error) {
          console.error(error);
        }
      },

      fetchApi: async (endpoint, fetch_method, data) => {
        let baseUrl = `https://playground.4geeks.com/apis/fake/contact/`;
        try {
          const response = await fetch(baseUrl + endpoint, {
            method: fetch_method,
            body: JSON.stringify(data),
          });
          const jsonData = await response.json();
          getStore().contacts = jsonData;

          return jsonData;
        } catch (error) {
          console.log("apiFetch: ", error);
        }
      },
    },
  };
};

export default getState;
