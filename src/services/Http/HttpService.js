const BASE_URL = "http://localhost:3000"; // Replace with your API base URL

const httpService = {
  get: async (url, params) => {
    const queryParams = new URLSearchParams(params).toString();
    const requestUrl = `${BASE_URL}/${url}${
      queryParams ? `?${queryParams}` : ""
    }`;
    return fetch(requestUrl).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }
      return response.json();
    });
  },
  post: async (url, data) => {
    const requestUrl = `${BASE_URL}/${url}`;
    return fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }
      return response.json();
    });
  },

  put: async (url, data) => {
    const requestUrl = `${BASE_URL}/${url}`;
    return fetch(requestUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }
      return response.json();
    });
  },
  delete: async (url) => {
    const requestUrl = `${BASE_URL}/${url}`;
    return fetch(requestUrl, { method: "DELETE" }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }
      return response.json();
    });
  },
};

export default httpService;
