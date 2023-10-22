const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },

    actions: {
      fetchApi: async (endpoint, fetch_method, data) => {
        let baseUrl = `https://playground.4geeks.com/apis/fake/contact/`;
        try {
          const response = await fetch(baseUrl + endpoint, {
            method: fetch_method,
            body: JSON.stringify(data),
          });
          const jsonData = await response.json();

          // Atualize o estado usando setStore somente após a busca de dados ser concluída
          setStore({ contacts: jsonData });

          return jsonData;
        } catch (error) {
          console.log("apiFetch: ", error);
        }
      },

      deleteContact: async (id) => {
        let baseUrl = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        try {
          const response = await fetch(baseUrl, {
            method: "DELETE",
          });
          console.log("response.status", response.status);

          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }

          const jsonData = await response.json();
          setStore({ contacts: jsonData });
          return jsonData;
        } catch (error) {
          console.error("apiFetch: ", error);
          throw error; // Lança o erro para que ele possa ser tratado em componentes que chamam a função fetchApi
        }
      },

      saveContact: async (endpoint, fetch_method, data) => {
        let baseUrl = `https://playground.4geeks.com/apis/fake/contact/`;
        try {
          const response = await fetch(baseUrl + endpoint, {
            method: fetch_method,
            body: data, // Envie a string JSON como corpo da solicitação
            headers: {
              "Content-Type": "application/json", // Especifica o tipo de conteúdo como JSON
            },
          });
          console.log("response.status", response.status);

          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }

          const jsonData = await response.json();
          setStore({ contacts: jsonData });
          return jsonData;
        } catch (error) {
          console.error("apiFetch: ", error);
          throw error; // Lança o erro para que ele possa ser tratado em componentes que chamam a função fetchApi
        }
      },
    },
  };
};

export default getState;
