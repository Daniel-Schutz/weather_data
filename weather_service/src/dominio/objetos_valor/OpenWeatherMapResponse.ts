interface OpenWeatherMapResponse {
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
}

export default OpenWeatherMapResponse;
