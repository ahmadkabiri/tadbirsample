<template>
  <div id="app" :class="typeof weather.main != 'undefined' ? 'warm' : ''">
    <main>
      <div class="search-box">
        <input
          type="text"
          placeholder="Search"
          class="search-bar"
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>

      <div class="container" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }},{{ weather.sys.country }}
          </div>
          <div class="data">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">
            {{ Math.floor(this.weather.main.temp) - 273 }} C
          </div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      apiKey: "67c8c4d5167606365a511d05ad88c17b",
      api: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        fetch(`${this.api}/weather?q=${this.query}&appid=${this.apiKey}`)
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            this.weather = response;
          });
      }
    },
    dateBuilder() {
      let d = new Date();
      console.log(d)
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      
      let day = days[d.getDate()];
      
      let date = d.getDate();
      
      let month = months[d.getMonth()];
      
      let year = d.getFullYear()
      console.log("days",day)
      console.log("days",month)
      console.log("days",date)

      return `${day} ${date}${month} ${year}`
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}

#app {
  background-image: url("./assets/weather.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url("./assets/warm.jpg");
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #fff;
  font-style: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: #313131;
  border-radius: 1rem 0 1rem 0;
  font-size: 1.4rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: red; */
  flex-direction: column;
}

.location-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.location,
.data {
  font-size: 2rem;
  color: #fff;
}

.weather-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.temp {
  width: 20rem;
  height: 10rem;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 6rem;
}

.weather {
  margin-top: 1rem;
  font-size: 3rem;
  color: #fff;
}
</style>
