const https = require("https");
class Service {
  makeRequestUrl(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (reponse) => {
        reponse.on("data", (data) => resolve(JSON.parse(data)));
        reponse.on("error", reject);
      });
    });
  }
  async getPlanets(url) {
    const result = await this.makeRequestUrl(url);
    return {
      name: result.name,
      surfaceWater: result.surface_water,
      appearedIn: result.films.length,
    };
  }
}

module.exports = Service;
