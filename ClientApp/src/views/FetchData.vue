<template>
  
    <v-slide-y-transition mode="out-in">
      <v-row>
        <v-col>
          <h1>Weather forecast</h1>
          <p>This component demonstrates fetching data from the server.</p>

          <v-table theme="dark">
            <thead>
              <tr>
                <th class="text-left">
                  Summary
                </th>
                <th class="text-left">
                  temperatureC
                </th>
                <th class="text-left">
                  TemperatureF
                </th>
                <th class="text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in forecasts"
                :key="item.summary"
              >
                <td>{{ item.summary }}</td>
                <td>{{ item.temperatureC }}</td>
                <td>{{ item.temperatureF }}</td>
                <td>{{ item.date }}</td>

              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-slide-y-transition>

    <v-alert :value="showError" type="error" v-if="showError">
      This is an error alert.
    </v-alert>

    <v-alert :value="showError" type="warning" v-if="showError">
      Are you sure you're using ASP.NET Core endpoint? (default at
      <a href="http://localhost:5000/fetch-data">http://localhost:5000</a>)
      <br />
      API call would fail with status code 404 when calling from Vue app (default at
      <a href="http://localhost:8080/fetch-data">http://localhost:8080</a>) without devServer proxy
      settings in vue.config.js file.
    </v-alert>

</template>

<script>
// an example of a Vue Typescript component using Vue.extend
export default {
  name: "FetchData",
  data() {
    return {
      loading: true,
      showError: false,
      errorMessage: 'Error while loading weather forecast.',
      forecasts: [],
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Temp. (C)', value: 'temperatureC' },
        { text: 'Temp. (F)', value: 'temperatureF' },
        { text: 'Summary', value: 'summary' }
      ]
    }
  },
  methods: {
    getColor(temperature) {
      if (temperature < 0) {
        return 'blue'
      } else if (temperature >= 0 && temperature < 30) {
        return 'green'
      } else {
        return 'red'
      }
    },
    async fetchWeatherForecasts() {
      try {
        const response = await this.$axios.get('api/WeatherForecast')
        this.forecasts = response.data
      } catch (e) {
        this.showError = true
        console.log("stuff")
        this.errorMessage = `Error while loading weather forecast: ${e.message}.`
      }
      this.loading = false
    }
  },
  async created() {
    await this.fetchWeatherForecasts()
  }
}
</script>
