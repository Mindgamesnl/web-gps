# web-gps
A small utility to track real time distance to locations or markers.

Example code:
```html
<script src="bundle.js"></script>

<script>
    function onUpdate(trackers) {
        // clear div
        document.getElementById("results").innerHTML = "";

        for (const tracker of trackers) {
            document.getElementById("results").innerHTML += "<b>" + tracker.tracker + "</b>: " + tracker.meters + "<br />";
        }
    }

    function onError() {
        alert("Something fucked up!");
    }

    console.log('start')
    const webGPS = new WebGPS(onUpdate, onError);

    // register a few sample locations from my local area
    webGPS.trackLocation("Hilfertshof", 52.224827, 5.176331);
    webGPS.trackLocation("Beeld en geluid", 52.235663, 5.172540);
    webGPS.trackLocation("ROC", 52.216036, 5.188179);
    webGPS.trackLocation("Scouting", 52.235801, 5.200051);
</script>
<div id="results"></div>
```

outputs something like this, with the location names and real time distance in meters
```$xslt
Hilfertshof: XXXX.4008160069366
Beeld en geluid: XXX.6356992816116
ROC: XXXX.1884711210037
Scouting: XXXX.2516424361834
```
_Xed some values out to protect my own privacy._
