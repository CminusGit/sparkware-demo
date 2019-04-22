let fetchAsync = {
    call: async function (url, configuration) {
        let response = await fetch(url, configuration);
        let data = await response.json();

        return data;
    }
}

export class Service {
    apiUrl = 'http://localhost:50093/api/';

    get(route, configuration) {
        const url = `${this.apiUrl}${route}`; 

        return fetchAsync.call(url, configuration);
    }

    post(route, data, configuration) {
        const url = `${this.apiUrl}${route}`;

        if (!configuration) {
            configuration = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        }

        return fetchAsync.call(url, configuration);
    }
} 
