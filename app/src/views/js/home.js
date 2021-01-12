import { mapActions, mapGetters } from "vuex";
import color from "@/assets/js/color.js";
import config from "@/config";
import nameToInitials from "@/utils/name-to-initials";
import timestamp from "@/utils/timestamp";
import moment from 'moment';
const Map = () => import(/* webpackChunkName:'c-map' */'@/components/Map.vue');

export default {
  name: "Home",
  components: {
    Map
  },
  data() {
    return {
      color,
      config,
      isMock: process.env.VUE_APP_ENVIRONMENT !== 'prod' && process.env.VUE_APP_IS_MOCK === 'true',
      hasClockedIn: 0,
      location,
      dialog: false,
      loading: false,
      fileExtension: '',
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
    ...mapActions('user', ['fetchCurrentUser']),
    ...mapActions('dashboard', ['fetchDashboardSummary']),
    ...mapActions('announcement', ['fetchAnnouncements']),
    ...mapActions('attendance', ['postClockIn', 'postClockOut']),
    ...mapActions('component', ['openSnackbar']),
    onImageChange(file) {
      let reader = new FileReader();
      this.image = null;
      this.url = null;
      reader.readAsDataURL(file);
      this.imageSize = file.size;
      this.imageUrl = URL.createObjectURL(file);
      this.fileExtension = file.name.split('.').pop();
      reader.onload = () => {
        this.image = reader.result.substr(reader.result.indexOf(",") + 1);
      };
    },
    onLocationFound(coordinates) {
      if (!coordinates) {
        // TODO: if GPS Notfound
        return;
      }
      this.location = {
        lat: coordinates[0],
        lon: coordinates[1]
      }
    },
    onClockInSubmit() {
      this.dialog = false;
      this.postClockIn({
        image: `${this.fileExtension};${this.image}`,
        location: this.location
      })
          .then(this.onClockInSuccess)
          .catch(this.onClockInFail);
    },
    onClockOutSubmit() {
      this.dialog = false;
      this.postClockOut({
        location: this.location
      })
          .then(this.onClockOutSuccess)
          .catch(this.onClockOutFail);
    },
    onClockOutSuccess() {
      this.openSnackbar({
        message: "Clocked Out.",
        color: 'success'
      });
      this.fetchDashboardSummary();
    },
    onClockOutFail(err) {
      if (err.response.data.errors.message.includes('NOT_AVAILABLE')) {
        this.openSnackbar({
          message: "You haven't worked for 9 hours",
          color: 'error'
        })
      }
    },
    onClockInSuccess() {
      this.hasClockedIn = 1;
      this.openSnackbar({
        message: "Clocked In.",
        color: 'success'
      });
      this.fetchDashboardSummary();
    },
    onClockInFail() {
      this.openSnackbar({
        message: "Something went wrong, please try again.",
        color: 'error'
      })
    },
    hourTime(time) {
      if (this.isMock) return 0;
      const calculatedTime = moment.duration(moment().diff(moment(time)));
      return Math.floor(calculatedTime.asHours());
    },
    minuteTime(time) {
      if (this.isMock) return 0;
      const calculatedTime = moment.duration(moment().diff(moment(time)));
      return Math.floor(calculatedTime.asMinutes()) % 60;
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
    ...mapGetters('announcement', ['announcements']),
    ...mapGetters('dashboard', ['dashboardSummary']),
    ...mapGetters('user', ['currentUser']),
    initials() {
      return nameToInitials(this.currentUser.name);
    },
    employeeClockedIn() {
      return !!(this.dashboardSummary && this.dashboardSummary.attendance.current.date.start);
    },
    hasAttend() {
      return !(this.dashboardSummary.attendance.current.date.end);
    }
  },
  created() {
    this.fetchCurrentUser();
    this.fetchDashboardSummary();
    this.fetchAnnouncements();
  }
};
