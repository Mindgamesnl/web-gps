import Coordinate from "./lib/Coordinate";

class WebGPS {

    constructor(onUpdate, onError) {
        this.onUpdate = onUpdate;
        this.onError = onError;
        this._trackers = [];

        navigator.geolocation.watchPosition((update) => {
            this._locationUpdate(update.coords.latitude, update.coords.longitude);
        }, this._locationError, {enableHighAccuracy: true});
    }

    trackLocation(data, lat, long) {
        this._trackers.push({
            data: data,
            coordinates: new Coordinate(lat, long)
        });
    }

    _locationError() {
        this.onError();
    }

    _locationUpdate(lat, long) {
        let currentLocation = new Coordinate(lat, long);
        let trackingDistances = [];

        for (const tracker of this._trackers) {
            trackingDistances.push({
                meters: tracker.distanceInMeters(currentLocation),
                tracker: tracker
            });
        }

        this.onUpdate(trackingDistances);
    }

}

window.WebGPS = WebGPS;
