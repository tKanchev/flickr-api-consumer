import fetchJsonp from 'fetch-jsonp';

export function request() {    
    return async (url: string) => {       
        const response = fetchJsonp(url, {
            jsonpCallback: 'jsoncallback',
            timeout: 3000
          })
          .then(response => response.json());

        return response;
    };
}

export const getJsonp = request();
