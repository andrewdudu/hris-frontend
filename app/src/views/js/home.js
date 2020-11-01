import color from "@/assets/js/color.js";
import nameToInitials from "@/utils/name-to-initials";
import timestamp from "@/utils/timestamp";
import moment from 'moment';
import Vue from 'vue';
import Map from '@/components/Map.vue';
import { LMap, LTileLayer, LMarker, LCircleMarker, LPopup } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-circle-marker", LCircleMarker);
Vue.component("l-marker", LMarker);
Vue.component("v-popup", LPopup);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "Home",
  components: {
    Map
  },
  data() {
    return {
      color,
      location,
      dialog: false,
      loading: false,
      image: null,
      imageUrl: null,
      imageSize: 0,
      imageRules: [
        (v) => !!v || "Selfie is required",
        () => this.imageSize < 2097152,
      ],
      today: moment().format('dddd, DD MMMM YYYY')
    };
  },
  methods: {
    onImageChange(file) {
      let reader = new FileReader();
      this.image = null;
      this.url = null;
      if (file !== undefined) {
        reader.readAsDataURL(file);
        this.imageSize = file.size;
        this.imageUrl = URL.createObjectURL(file);
        reader.onload = () => {
          this.image = reader.result.substr(reader.result.indexOf(",") + 1);
        };
      }
    },
    onLocationFound(coordinates) {
      if (coordinates !== null) {
        this.location = {
          lat: coordinates[0],
          lon: coordinates[1]
        };
      } else {
        // TODO: Handle if GPS not function correctly
      }
    },
    onClockInSubmit() {
      this.dialog = false;
      this.$store.dispatch('postClockIn', {
        image: this.image,
        location: this.location
      });
    },
    onClockIn() {
      this.dialog = true;
    },
    unixToShortDay(value) {
      return timestamp.unixToShortDay(value);
    },
    unixToString(value) {
      return timestamp.unixToString(value);
    },
    unixToTime(value) {
      return timestamp.unixToTime(value);
    }
  },
  computed: {
    announcements() {
      return this.$store.state.announcements;
    },
    dashboardSummary() {
      return this.$store.state.dashboardSummary;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
    initials() {
      if (this.currentUser !== null) {
        return nameToInitials(this.currentUser.name);
      }
      return "G";
    }
  },
  created() {
    this.$store.dispatch('fetchCurrentUser');
    this.$store.dispatch('fetchDashboardSummary');
    this.$store.dispatch('fetchAnnouncements');
  }
};
