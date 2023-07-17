const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},

    actions: {
      getName: () => {
        getActions().changeName();
      },
      loadSomeData: async () => {
        const serverUrl =
          "https://assets.breatheco.de/apis/fake/contact/agenda";
        const unspecificApiData = await loadData(serverUrl);
        console.log("unspecificApiData", unspecificApiData);
        const ContactsArr = [];

        for (const item of unspecificApiData.results) {
          console.log(item.url);
          let temp = await loadData(item.url);
          ContactsArr.push(temp.result.properties);
        }
        console.log("DONE");
        console.log(ContactsArr);
        setStore({ Contacts: ContactsArr });
      },
    },
  };
};

export default getState;
